import React, {useRef, useState} from "react";
import ellipses from "../../resources/images/ellipses.webp";
import {removeZone} from "../redux/reducers/zone";
import {useDispatch} from "react-redux";
import {navigateTo} from "./LinkElement";
import {useParams} from "react-router-dom";

/**
 * Container for ZoneItem
 * @param zoneID The id of the given zone
 * @param zoneName The name of the given zone
 * @param zoneColor The color of the given zone
 * @param zoneItems The items of the given zone
 * @param showQuantity Display quantities under the zone item
 * @param saveQuantities Callback function to dispatch changes to the redux store
 * @returns {JSX.Element}
 */
const ZoneItem = ({zoneID, zoneName, zoneColor, zoneItems, showQuantity=false, saveQuantities}) => {

    const itemOptionsRef = useRef();
    const dispatch = useDispatch();
    const {foodID} = useParams();

    const displayOptions = () => {

        if (zoneName !== "Unassigned")
        {
            itemOptionsRef.current.style.display = "inline-flex";
            itemOptionsRef.current.style.flexDirection = "column";
        }
    };

    const hideOptions = () => {
        itemOptionsRef.current.style.display = "none";
    }

    const deleteZone = () => {
        let deleteZone = window.confirm("Are you sure you want to delete this zone, and its contents?");

        if (deleteZone)
        {
            dispatch(removeZone({zoneID: zoneID}));
            window.location.reload();
        }
    }

    const renderQuantity = () => {
        if (showQuantity)
        {
            let quantityValue = 0;
            let zoneItemsContainingFood = zoneItems.filter((zoneItem) => zoneItem.foodID === foodID);

            if (zoneItemsContainingFood.length !== 0)
            {
                quantityValue = zoneItemsContainingFood[0].quantity ?? 0;
            }

            return <input className="restock-input"
                          style={{backgroundColor: zoneColor}}
                          placeholder={quantityValue}
                          type="number"
                          min={0}
                          max={9999}
                          onKeyUp={(event) => saveQuantities(zoneID, event.target.value)}
            />
        }
    }
    return (
        <>
            <article className="zone-item" style={{backgroundColor: zoneColor}}>
                <p className="zone-item-name">{zoneName}</p>

                <img
                    className="zone-item-options"
                    src={ellipses}
                    alt="ellipses"
                    onClick={() => displayOptions()}
                />

                <div className="zone-item-dropdown" ref={itemOptionsRef} onMouseLeave={()=>hideOptions()}>
                    <p className="zone-item-dropdown-option" onClick={() => navigateTo(`/dashboard/zones/edit/${zoneID}`)}>Edit</p>
                    <p className="zone-item-dropdown-option" onClick={() => deleteZone()}>Remove</p>
                </div>

                {renderQuantity()}

            </article>
        </>
    )
};

export default ZoneItem;
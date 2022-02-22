import React, {useRef} from "react";
import ellipses from "../../resources/images/ellipses.webp";
import {navigateTo} from "./LinkElement";

/**
 * Container for food items
 * @param foodID The id of the given food item
 * @param foodName The name of the given food item
 * @param barcodeNumber The barcode number of the given food item
 * @param foodUnits The units of the given food item
 * @param restockLevel The restock level for the given food item
 * @returns {JSX.Element}
 */
const FoodItem = ({ foodID, foodName, barcodeNumber, foodUnits, restockLevel }) => {

    const itemOptionsRef = useRef();

    const displayOptions = () => {
        itemOptionsRef.current.style.display = "inline-flex";
        itemOptionsRef.current.style.flexDirection = "column";
    };

    const hideOptions = () => {
        itemOptionsRef.current.style.display = "none";
    }

    return (
        <>
            <article className="zone-item">
                <p className="zone-item-name">{foodName}</p>

                <img
                    className="zone-item-options"
                    src={ellipses}
                    alt="ellipses"
                    onClick={() => displayOptions()}
                />

                <div className="zone-item-dropdown" ref={itemOptionsRef} onMouseLeave={()=>hideOptions()}>
                    <p className="zone-item-dropdown-option" onClick={() => navigateTo(`/dashboard/food/manage/${foodID}`)}>Manage</p>
                </div>
            </article>
        </>
    )
};

export default FoodItem;
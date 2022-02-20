import React, {useRef} from "react";
import ellipses from "../../resources/images/ellipses.webp";
import {removeZone} from "../redux/reducers/zone";
import {useDispatch} from "react-redux";

const ZoneItem = ({zoneID, zoneName, zoneColor}) => {

    const itemOptionsRef = useRef();
    const dispatch = useDispatch();

    const displayOptions = () => {
        itemOptionsRef.current.style.display = "inline-flex";
        itemOptionsRef.current.style.flexDirection = "column";
    };

    const hideOptions = () => {
        itemOptionsRef.current.style.display = "none";
    }

    const deleteZone = () => {
        dispatch(removeZone({zoneID: zoneID}));
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
                    <a className="zone-item-dropdown-option">Edit</a>
                    <a className="zone-item-dropdown-option" href="#" onClick={() => deleteZone()}>Remove</a>
                </div>
            </article>
        </>
    )
};

export default ZoneItem;
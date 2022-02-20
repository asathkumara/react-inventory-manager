import React from "react";
import ellipses from "../../resources/images/ellipses.webp";

const ZoneItem = ({zoneName, zoneColor}) => {
    return (
        <>
            <article className="zone-item" style={{backgroundColor: zoneColor}}>
                <p className="zone-item-name">{zoneName}</p>
                <img className="zone-item-options" src={ellipses} alt="ellipses"/>
            </article>
        </>
    )
};

export default ZoneItem;
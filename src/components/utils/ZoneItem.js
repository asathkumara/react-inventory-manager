import React, {useRef} from "react";
import ellipses from "../../resources/images/ellipses.webp";

const ZoneItem = ({key, zoneName, zoneColor}) => {

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
                    <a className="zone-item-dropdown-option" href="#">Remove</a>
                </div>
            </article>
        </>
    )
};

export default ZoneItem;
import React from "react";
import {useSelector} from "react-redux";
import ZoneItem from "./ZoneItem";

const ZoneManager = ({zoneList}) => {

    return (
        <div>
            {console.table(zoneList)}
            {zoneList.map((zone) => {
                return <ZoneItem key={zone.zoneID} zoneName={zone.zoneName} zoneColor={zone.zoneColor}/>
            })}
        </div>
    )
};

export default ZoneManager;
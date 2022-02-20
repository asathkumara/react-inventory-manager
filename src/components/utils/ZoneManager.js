import React from "react";
import {useSelector} from "react-redux";
import ZoneItem from "./ZoneItem";

const ZoneManager = () => {

    const zoneList = useSelector((state) => state.zones.value);

    return (
        <div>
            {console.table(zoneList)}
            {zoneList.map((zone) => {
                return <ZoneItem key={zone.zoneID} zoneID={zone.zoneID} zoneName={zone.zoneName} zoneColor={zone.zoneColor}/>
            })}
        </div>
    )
};

export default ZoneManager;
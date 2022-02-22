import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ZoneItem from "./ZoneItem";

/**
 * Container for ZoneManager
 * @param showQuantities Display quantities under each zone item
 * @param saveQuantities Callback function to dispatch changes to the redux store
 * @returns {JSX.Element}
 */
const ZoneManager = ({showQuantities=false, saveQuantities}) => {

    const [zoneList, setZoneList] = useState(useSelector((state) => state.zones.value));

    useEffect(() => {
        if(!showQuantities)
        {
            setZoneList(zoneList.filter((zone) => zone.zoneName !== "Unassigned"));
        }
    }, [showQuantities])

    return (
        <div>
            {console.table(zoneList)}
            {

                zoneList.map((zone) => {
                    return <ZoneItem
                            key={zone.zoneID}
                            zoneID={zone.zoneID}
                            zoneName={zone.zoneName}
                            zoneColor={zone.zoneColor}
                            zoneItems={zone.zoneItems}
                            showQuantity={showQuantities}
                            saveQuantities={saveQuantities}

                    />
                })
            }
        </div>
    )
};

export default ZoneManager;
import React, {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import ZoneItem from "./ZoneItem";
import {useParams} from "react-router-dom";
import zone from "../redux/reducers/zone";

/**
 * Container for ZoneManager
 * @param showQuantities Display quantities under each zone item
 * @param saveQuantities Callback function to dispatch changes to the redux store
 * @returns {JSX.Element}
 */
const ZoneManager = ({showQuantities=false, saveQuantities}) => {

    const [zoneList, setZoneList] = useState(useSelector((state) => state.zones.value));
    const {foodID} = useParams();

    /**
     * Once the component is mounted onto the DOM, decide whether to show the unassigned zone.
     *
     * If the unassigned zone is shown, move it to the bottom of the list.
     */
    useEffect(() => {
        if(!showQuantities)
        {
            setZoneList(zoneList.filter((zone) => zone.zoneName !== "Unassigned"));
        }
        else
        {
            let unassignedZone = zoneList.filter((zone) => zone.zoneName === "Unassigned")[0];
            let zoneListWithoutUnassigned = zoneList.filter((zone) => zone.zoneName !== "Unassigned");
            zoneListWithoutUnassigned.push(unassignedZone);

            let zoneListWithUnassignedAtBottom = [...zoneListWithoutUnassigned];
            setZoneList(zoneListWithUnassignedAtBottom)
        }
    }, [showQuantities])

    return (
        <div className={"zone-list"}>
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
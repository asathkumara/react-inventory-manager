import React, {useState} from "react";
import {navigateTo} from "../utils/LinkElement";
import zoneIcon from "../../resources/images/zone-icon-white-active.webp";
import {ChromePicker} from "react-color";
import {useDispatch, useSelector} from "react-redux";
import {editZone} from "../redux/reducers/zone";
import {useParams} from "react-router-dom";
import Footer from "../utils/Footer";

/**
 * Container for EditZone page
 * @returns {JSX.Element}
 */
const EditZone = () => {
    const dispatch = useDispatch();
    const {zoneID} = useParams();
    const zoneList = useSelector((state) => state.zones.value);
    const zoneToBeEdited = zoneList.filter((zone) => zone.zoneID === zoneID)[0];

    const [color, setColor] = useState({hex: zoneToBeEdited.zoneColor});
    const [zoneName, setZoneName] = useState(zoneToBeEdited.zoneName);

    /***
     * Saves the zone
     *
     * @remark Errors are handled as alerts and confirms. Bad UX, but given the time constraints, it's simple.
     */
    const saveZone = () => {
        let zonesWithDesiredColor = zoneList.filter((zone) => zone.zoneColor.toLowerCase() === color.hex.toLowerCase());

        let hasZoneWithDesiredColor = zonesWithDesiredColor.length !== 0 && zonesWithDesiredColor[0] !== zoneToBeEdited;
        let hasEmptyZoneName = zoneName.length === 0;

        if (hasEmptyZoneName)
        {
            alert("A zone must have a name. Please enter a zone name.");
            return;
        }

        if(hasZoneWithDesiredColor)
        {
            alert(`A zone exists with the color ${color.hex}. Please pick a different color.`);
            return;
        }

        dispatch(editZone({zoneID: zoneID, zoneName: zoneName, zoneColor: color.hex}));
        navigateTo("/dashboard/zones");
    };

    return (
        <div>
            <header className="dashboard-header">Edit Zone</header>
            <section className="zone-menu">
                <article className="zone-name">
                    <input className="zone-name-input"
                           placeholder={zoneName}
                           type="text"
                           onChange={(event) => setZoneName(event.target.value)}
                    />
                </article>
                <article className="option">
                    <h2 className="option-label">Pick Zone Color</h2>
                    <ChromePicker color={color} onChangeComplete={(color) => setColor(color)}/>
                </article>

                <article className="option">
                    <h2 className="option-label">Preview Zone</h2>
                    <div className="preview-zone" style={{backgroundColor: color.hex}}>{zoneName}</div>
                </article>

                <button className="save-zone-button" onClick={() => saveZone()}>Save</button>
            </section>


            <Footer zoneIcon={zoneIcon}/>
        </div>
    );
};

export default EditZone;
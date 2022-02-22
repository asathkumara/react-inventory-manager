import React, {useState} from "react";
import LinkElement, {navigateTo} from "../utils/LinkElement";
import zoneIcon from "../../resources/images/zone-icon-white-active.webp";
import {ChromePicker} from "react-color";
import {useDispatch, useSelector} from "react-redux";
import {addZone} from "../redux/reducers/zone";
import {v4 as uuid} from "uuid";
import Footer from "../utils/Footer";

/**
 * Container for AddZone page
 * @returns {JSX.Element}
 */
const AddZone = () => {

    const [color, setColor] = useState({hex: "#ffffff"});
    const [zoneName, setZoneName] = useState("");
    const dispatch = useDispatch();
    const zoneList = useSelector((state) => state.zones.value);

    const saveZone = () => {
        let zonesWithDesiredColor = zoneList.filter((zone) => zone.zoneColor.toLowerCase() === color.hex.toLowerCase());
        let hasZoneWithDesiredColor = zonesWithDesiredColor.length !== 0;
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

        dispatch(addZone({zoneID: uuid(), zoneName: zoneName, zoneColor: color.hex, zoneItems: []}));
        navigateTo("/dashboard/zones");
    };

    return (
        <div>
            <header className="dashboard-header">Add Zone</header>
            <section className="food-menu">
                <article className="zone-name">
                    <input className="zone-name-input"
                           placeholder="Enter Zone Name"
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

export default AddZone;
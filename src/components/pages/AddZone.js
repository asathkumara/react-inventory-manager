import React, {useState} from "react";
import LinkElement from "../LinkElement";
import dashboardIcon from "../../resources/images/dashboard-icon-white-active.webp";
import zoneIcon from "../../resources/images/zone-icon-white-active.webp";
import registerFoodIcon from "../../resources/images/food-icon-white.webp";
import searchFoodIcon from "../../resources/images/magnifier-icon-white.webp";
import {ChromePicker} from "react-color";

const AddZone = () => {

    const [color, setColor] = useState({hex: "#ffffff"});
    const [zoneName, setZoneName] = useState("");

    return (
        <div>
            <header className="dashboard-header">Add Zone</header>
            <section className="zone-menu">
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

                <LinkElement>
                    <button className="save-zone-button">Save</button>
                </LinkElement>
            </section>


            <footer className="site-footer">
                <LinkElement link="/dashboard">
                    <img className="site-footer-links" src={dashboardIcon} alt=""/>
                </LinkElement>
                <LinkElement link="/dashboard/zones">
                    <img className="site-footer-links" src={zoneIcon} alt=""/>
                </LinkElement>
                <LinkElement link="/dashboard/register">
                    <img className="site-footer-links" src={registerFoodIcon} alt=""/>
                </LinkElement>
                <LinkElement link="/dashboard/search">
                    <img className="site-footer-links" src={searchFoodIcon} alt=""/>
                </LinkElement>
            </footer>
        </div>
    );
};

export default AddZone;
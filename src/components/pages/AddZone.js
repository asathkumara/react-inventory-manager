import React from "react";
import LinkElement from "../LinkElement";
import dashboardIcon from "../../resources/images/dashboard-icon-white-active.webp";
import zoneIcon from "../../resources/images/zone-icon-white-active.webp";
import registerFoodIcon from "../../resources/images/food-icon-white.webp";
import searchFoodIcon from "../../resources/images/magnifier-icon-white.webp";
import {CirclePicker, CompactPicker} from "react-color";

const AddZone = () => {
    return (
        <div>
            <header className="dashboard-header">Add Zone</header>
            <section className="zone-menu">
                <article className="zone-name">
                    <input className="zone-name-input" placeholder="Enter Zone Name" type="text"/>
                </article>
                <article className="color-input">
                    <h2 className="color-input-label">Pick Zone Color</h2>
                    <CirclePicker circleSize={40}/>
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
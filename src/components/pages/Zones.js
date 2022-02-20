import React from "react";
import LinkElement from "../utils/LinkElement";
import dashboardIcon from "../../resources/images/dashboard-icon-white-active.webp";
import zoneIcon from "../../resources/images/zone-icon-white-active.webp";
import registerFoodIcon from "../../resources/images/food-icon-white.webp";
import searchFoodIcon from "../../resources/images/magnifier-icon-white.webp";
import addIcon from "../../resources/images/plus-white.webp";
import ZoneManager from "../utils/ZoneManager";

const Zones = () => {


    return (
        <div>
            <header className="dashboard-header">Zones</header>
            <section className="zone-menu">
                <LinkElement link="/dashboard/zones/add">
                    <button className="add-zone-button">
                        <img className="add-zone-icon" src={addIcon} alt=""/>
                    </button>
                </LinkElement>

              <ZoneManager/>
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

export default Zones;
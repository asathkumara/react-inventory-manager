import LinkElement from "./LinkElement";
import _dashboardIcon from "../../resources/images/dashboard-icon-white-active.webp";
import _zoneIcon from "../../resources/images/zone-icon-white.webp";
import _registerFoodIcon from "../../resources/images/food-icon-white.webp";
import _searchFoodIcon from "../../resources/images/magnifier-icon-white.webp";
import React from "react";

const Footer = ({dashboardIcon=_dashboardIcon, zoneIcon=_zoneIcon, registerFoodIcon=_registerFoodIcon, searchFoodIcon=_searchFoodIcon}) => {
    return (
        <footer className="site-footer">
            <LinkElement link="/dashboard">
                <img className="site-footer-links" src={dashboardIcon} alt="dashboard icon"/>
            </LinkElement>
            <LinkElement link="/dashboard/zones">
                <img className="site-footer-links" src={zoneIcon} alt="zone icon"/>
            </LinkElement>
            <LinkElement link="/dashboard/food/register">
                <img className="site-footer-links" src={registerFoodIcon} alt="register food icon"/>
            </LinkElement>
            <LinkElement link="/dashboard/search">
                <img className="site-footer-links" src={searchFoodIcon} alt="search food icon"/>
            </LinkElement>
        </footer>
    );
};

export default Footer;
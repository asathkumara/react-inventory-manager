import LinkElement from "./LinkElement";
import _dashboardIcon from "../../resources/images/dashboard-icon-white.webp";
import _zoneIcon from "../../resources/images/zone-icon-white.webp";
import _registerFoodIcon from "../../resources/images/food-icon-white.webp";
import _searchFoodIcon from "../../resources/images/magnifier-icon-white.webp";
import _shoppingCartIcon from "../../resources/images/shopping-cart-icon-white.webp";
import React from "react";

/**
 * Container for Footer
 * @param dashboardIcon The dashboard icon
 * @param zoneIcon The zone icon
 * @param registerFoodIcon The register food icon
 * @param searchFoodIcon The search food icon
 * @returns {JSX.Element}
 * @remarks The icons were parameterized due to two versions of the image being available.
 *          One version when it's inactive, and another when it is active.
 */
const Footer = ({dashboardIcon=_dashboardIcon, zoneIcon=_zoneIcon, registerFoodIcon=_registerFoodIcon, searchFoodIcon=_searchFoodIcon, shoppingCartIcon=_shoppingCartIcon}) => {
    return (
        <footer className="site-footer">
            <LinkElement link="/dashboard">
                <img className="site-footer-links" src={dashboardIcon} alt="dashboard icon"/>
            </LinkElement>
            <LinkElement link="/dashboard/zones">
                <img className="site-footer-links" src={zoneIcon} alt="zone icon"/>
            </LinkElement>
            <LinkElement link="/dashboard/food">
                <img className="site-footer-links" src={registerFoodIcon} alt="register food icon"/>
            </LinkElement>
            <LinkElement link="/dashboard/search">
                <img className="site-footer-links" src={searchFoodIcon} alt="search food icon"/>
            </LinkElement>
            <LinkElement link="/dashboard/groceries">
                <img className="site-footer-links" src={shoppingCartIcon} alt="search food icon"/>
            </LinkElement>
        </footer>
    );
};

export default Footer;
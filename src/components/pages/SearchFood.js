import React from "react";
import LinkElement from "../LinkElement";
import dashboardIcon from "../../resources/images/dashboard-icon-white-active.webp";
import zoneIcon from "../../resources/images/zone-icon-white.webp";
import registerFoodIcon from "../../resources/images/food-icon-white.webp";
import searchFoodIcon from "../../resources/images/magnifier-icon-white-active.webp";

const SearchFood = () => {
    return (
        <div>
            <h2>Hello from SearchFood</h2>

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

export default SearchFood;
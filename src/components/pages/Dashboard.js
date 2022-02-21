import React from "react";
import searchFoodIcon from "../../resources/images/magnifier-icon-white.webp";
import registerFoodIcon from "../../resources/images/food-icon-white.webp";
import zoneIcon from "../../resources/images/zone-icon-white.webp";
import shoppingCartIcon from "../../resources/images/shopping-cart-icon-white.webp";
import dashboardIcon from "../../resources/images/dashboard-icon-white-active.webp";
import LinkElement from "../utils/LinkElement";
import Footer from "../utils/Footer";

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <header className="dashboard-header">Dashboard</header>
            <section className="dashboard-menu">
               <article className="dashboard-item">
                    <LinkElement link="/dashboard/zones">
                        <figure className="dashboard-item-icon">
                            <img className="dashboard-item-image" src={zoneIcon} alt=""/>
                            <figcaption className={"dashboard-item-description"}>Zones</figcaption>
                        </figure>
                    </LinkElement>
                </article>

                <article className="dashboard-item">
                    <LinkElement link="/dashboard/food/register">
                        <figure className="dashboard-item-icon">
                            <img className="dashboard-item-image" src={registerFoodIcon} alt=""/>
                            <figcaption className={"dashboard-item-description"}>Register</figcaption>
                        </figure>
                    </LinkElement>
                </article>

                <article className="dashboard-item">
                    <LinkElement link="/dashboard/search">
                        <figure className="dashboard-item-icon">
                            <img className="dashboard-item-image" src={searchFoodIcon} alt=""/>
                            <figcaption className={"dashboard-item-description"}>Search</figcaption>
                        </figure>
                    </LinkElement>
                </article>

                <article className="dashboard-item">
                    <LinkElement link="/dashboard/search">
                        <figure className="dashboard-item-icon">
                            <img className="dashboard-item-image" src={shoppingCartIcon} alt=""/>
                            <figcaption className={"dashboard-item-description"}>Groceries</figcaption>
                        </figure>
                    </LinkElement>
                </article>

            </section>
            <Footer dashboardIcon={dashboardIcon}/>
        </div>
    )
};

export default Dashboard;
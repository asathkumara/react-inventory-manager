import React from "react";
import searchFoodIcon from "../../resources/images/magnifier-icon-white.webp";
import registerFoodIcon from "../../resources/images/food-icon-white.webp";
import zoneIcon from "../../resources/images/zone-icon-white.webp";
import LinkElement from "../LinkElement";

const Dashboard = () => {
    return (
        <div className="Dashboard">
            <header className="dashboard-header">Dashboard</header>
            <section className="dashboard-menu">
                <LinkElement link="/zones">
                    <article className="dashboard-item">
                        <figure className="dashboard-item-icon">
                            <img className="dashboard-item-image" src={zoneIcon} alt=""/>
                            <figcaption className={"dashboard-item-description"}>Zones</figcaption>
                        </figure>
                    </article>
                </LinkElement>

                <LinkElement link="/register">
                    <article className="dashboard-item">
                        <figure className="dashboard-item-icon">
                            <img className="dashboard-item-image" src={registerFoodIcon} alt=""/>
                            <figcaption className={"dashboard-item-description"}>Register</figcaption>
                        </figure>
                    </article>
                </LinkElement>

                <LinkElement link="/search">
                    <article className="dashboard-item">
                        <figure className="dashboard-item-icon">
                            <img className="dashboard-item-image" src={searchFoodIcon} alt=""/>
                            <figcaption className={"dashboard-item-description"}>Search</figcaption>
                        </figure>
                    </article>
                </LinkElement>
            </section>
            <footer className="site-footer"></footer>
        </div>
    )
};

export default Dashboard;
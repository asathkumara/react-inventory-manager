import React from "react";
import Logo from "../../resources/images/kitchen-logo.webp";
import LinkElement from "../utils/LinkElement";

/**
 * Container for Home page
 * @returns {JSX.Element}
 */
const Home = () => {
    return (
        <div className="Home">
            <img className="site-logo" src={Logo} alt="site-logo"/>
            <header className="site-title">Kitchen Inventory Manager</header>

            <LinkElement link="dashboard">
                <button className="get-started">Get Started</button>
            </LinkElement>
        </div>
    )
};

export default Home;
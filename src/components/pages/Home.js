import React from "react";
import Logo from "../../resources/images/kitchen-logo.webp";
import {useNavigate} from "react-router-dom";
import LinkButton from "../LinkButton";

const Home = () => {
    return (
        <div className="Home">
            <img className="site-logo" src={Logo} alt="site-logo"/>
            <header className="site-title">Kitchen Inventory Manager</header>

            <LinkButton className={"get-started"} link={"dashboard"}>Get Started</LinkButton>
        </div>
    )
};

export default Home;
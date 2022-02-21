import Footer from "../utils/Footer";
import dashboardIcon from "../../resources/images/dashboard-icon-white-active.webp";
import React from "react";
import gordon404 from "../../resources/images/gordon-404.webp";

const Error = () => {

    const navigateToPreviousPage = () =>
    {
        window.history.back();
    }

    return (
        <div className="Error">
            <header className="dashboard-header">Error</header>
            <section className="dashboard-menu">
                <article className="error">
                    <img className="error-image" src={gordon404} alt="gordon-yelling"/>
                    <h1 className="error-header">404</h1>
                    <p className="error-message">The page you're looking for could not be found.</p>
                    <button className="error-button" onClick={() => navigateToPreviousPage()}>Go Back</button>
                </article>
            </section>
            <Footer dashboardIcon={dashboardIcon}/>
        </div>
    )
};

export default Error;
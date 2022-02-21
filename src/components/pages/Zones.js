import React from "react";
import LinkElement from "../utils/LinkElement";
import zoneIcon from "../../resources/images/zone-icon-white-active.webp";
import addIcon from "../../resources/images/plus-white.webp";
import ZoneManager from "../utils/ZoneManager";
import Footer from "../utils/Footer";

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

           <Footer zoneIcon={zoneIcon}/>
        </div>
    );
};

export default Zones;
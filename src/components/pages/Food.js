import React from "react";
import LinkElement from "../utils/LinkElement";
import foodIcon from "../../resources/images/food-icon-white-active.webp";
import addIcon from "../../resources/images/plus-white.webp";
import Footer from "../utils/Footer";
import FoodManager from "../utils/FoodManager";
import {useSelector} from "react-redux";

/**
 * Container for Zones page
 * @returns {JSX.Element}
 */
const Food = () => {

    const foodList = useSelector((state) => state.food.value);

    return (
        <div>
            <header className="dashboard-header">Food</header>
            <section className="zone-menu">
                <LinkElement link="/dashboard/food/register">
                    <button className="add-zone-button">
                        <img className="add-zone-icon" src={addIcon} alt=""/>
                    </button>
                </LinkElement>

                <FoodManager foodList={foodList}/>
            </section>

            <Footer registerFoodIcon={foodIcon}/>
        </div>
    );
};

export default Food;
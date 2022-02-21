import React, {useState} from "react";
import {navigateTo} from "../utils/LinkElement";
import registerFoodIcon from "../../resources/images/food-icon-white-active.webp";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Footer from "../utils/Footer";

const ManageFood = () => {
    const dispatch = useDispatch();
    const {foodID} = useParams();
    const foodList = useSelector((state) => state.food.value);
    const foodToBeManaged = foodList.filter((food) => food.foodID === foodID)[0];


    const saveZoneChanges = () => {
        dispatch();
        navigateTo("/dashboard/search");
    };

    return (
        <div>
            <header className="dashboard-header">Manage</header>
            <section className="zone-menu">
                <article className="zone-name">
                    <input className="zone-name-input"
                           placeholder={`${foodToBeManaged.foodName} (${foodToBeManaged.foodUnits})`}
                           type="text"
                           readOnly={true}
                    />
                </article>


                <button className="save-zone-button">Save</button>
            </section>


            <Footer registerFoodIcon={registerFoodIcon}/>
        </div>
    );
};

export default ManageFood;
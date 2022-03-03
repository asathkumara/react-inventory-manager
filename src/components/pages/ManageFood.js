import React, {useState} from "react";
import registerFoodIcon from "../../resources/images/food-icon-white-active.webp";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from "react-router-dom";
import Footer from "../utils/Footer";
import ZoneManager from "../utils/ZoneManager";
import {editZoneItems} from "../redux/reducers/zone";

/**
 * Container for ManageFood page
 * @returns {JSX.Element}
 */
const ManageFood = () => {


    const dispatch = useDispatch();
    const {foodID} = useParams();
    const foodList = useSelector((state) => state.food.value);
    const foodToBeManaged = foodList.filter((food) => food.foodID === foodID)[0];


    /***
     * Saves changes made to zone items
     * @param zoneID The id of the given zone
     * @param quantity The quantity of food in the given zone
     * @param delay The delay at which the changes are to be saved. Defaults to 200ms.
     */
    const saveZoneItems = (zoneID, quantity, delay=200) => {
        setTimeout(() => {
            dispatch(editZoneItems({zoneID: zoneID, foodID: foodID, quantity: quantity}));
        }, delay)
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

                <ZoneManager
                    showQuantities={true}
                    saveQuantities={saveZoneItems}
                />
            </section>


            <Footer registerFoodIcon={registerFoodIcon}/>
        </div>
    );
};

export default ManageFood;
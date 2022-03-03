import Footer from "../utils/Footer";
import shoppingCartIcon from "../../resources/images/shopping-cart-icon-white-active.webp";
import React, {useEffect, useState} from "react";
import FoodManager from "../utils/FoodManager";
import {useSelector} from "react-redux";

/**
 * Container for Groceries page
 * @returns {JSX.Element}
 */
const Groceries = () => {

    const [foodList, setFoodList] = useState(useSelector((state) => state.food.value));
    const zoneList = useSelector((state) => state.zones.value);

    /***
     * Once the component is mounted onto the DOM, it renders the food items needing to be restocked.
     *
     * Re-renders whenever the zones are modified.
     */
    useEffect(() => {
        let foodItemsBelowRestockLevel = [];

        zoneList.forEach((zone) => {
            zone.zoneItems.forEach((zoneItem) => {
                let foodID = zoneItem.foodID;
                let foodItem = foodList.filter((food) => food.foodID === foodID)[0];
                let foodItemNeedsToBeRestocked = foodItem.restockLevel !== 0 && zoneItem.quantity < foodItem.restockLevel;

                if (foodItemNeedsToBeRestocked)
                {
                    foodItemsBelowRestockLevel.push(foodItem);
                }
            })
        });

        console.table(foodItemsBelowRestockLevel);
        setFoodList([...new Set(foodItemsBelowRestockLevel)]);

    }, [zoneList])

    return (
        <div>
            <header className="dashboard-header">Groceries</header>
            <section className="zone-menu">

                <FoodManager foodList={foodList}/>
            </section>

            <Footer shoppingCartIcon={shoppingCartIcon}/>
        </div>
    );
};

export default Groceries;
import React, {useState} from "react";
import {useSelector} from "react-redux";
import FoodItem from "./FoodItem";

/**
 * Container for FoodManager
 * @param foodList The list of food items to be rendered
 * @returns {JSX.Element}
 */
const FoodManager = ({foodList}) => {

    return (
        <div>
            {console.table(foodList)}
            {
                foodList.map((food) => {

                    return <FoodItem
                        foodID={food.foodID}
                        foodName={food.foodName}
                        barcodeNumber={food.barcodeNumber}
                        foodUnits={food.foodUnits}
                        restockLevel={food.restockLevel}
                    />
            })}
        </div>
    )
};

export default FoodManager;
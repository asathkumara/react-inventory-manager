import React, {useState} from "react";
import {useSelector} from "react-redux";
import FoodItem from "./FoodItem";

const FoodManager = ({foodList}) => {

    // const [foodList, setFoodList] = useState(useSelector((state) => state.food.value));
    //
    // if (filterFor !== undefined)
    // {
    //     setFoodList(foodList.filter((food) => food.foodName === filterFor));
    // }

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
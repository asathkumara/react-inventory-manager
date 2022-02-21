import React, {useState} from "react";
import LinkElement, {navigateTo} from "../utils/LinkElement";
import dashboardIcon from "../../resources/images/dashboard-icon-white-active.webp";
import zoneIcon from "../../resources/images/zone-icon-white.webp";
import registerFoodIcon from "../../resources/images/food-icon-white-active.webp";
import searchFoodIcon from "../../resources/images/magnifier-icon-white.webp";
import {useDispatch, useSelector} from "react-redux";
import {v4 as uuid} from "uuid";
import {addFood} from "../redux/reducers/food";

const RegisterFood = () => {

    const [foodName, setFoodName] = useState("");
    const [barcodeNumber, setBarcodeNumber] = useState("");
    const [foodUnits, setFoodUnits] = useState("grams");
    const [restockLevel, setRestockLevel] = useState(1.0);

    const foodList = useSelector((state) => state.food.value);
    const dispatch = useDispatch();

    const saveFood = () => {
        let foodsWithSameBarcode = foodList.filter((food) => food.barcodeNumber === barcodeNumber);
        let hasFoodWithSameBarcode = foodsWithSameBarcode.length !== 0;
        let hasEmptyFoodName = foodName.length === 0;
        let hasEmptyBarcode = barcodeNumber.length === 0;

        if (hasEmptyFoodName)
        {
            alert("A food item must have a name. Please enter a name.");
            return;
        }

        if (hasEmptyBarcode)
        {
            alert("A food item must have a barcode. Please enter a barcode.");
            return;
        }

        if (hasFoodWithSameBarcode)
        {
            alert("A food item exists with the desired barcode. Please enter a different barcode.");
            return;
        }

        console.log({foodID: uuid(), foodName: foodName, barcodeNumber: barcodeNumber, restockLevel: restockLevel});
        dispatch(addFood({foodID: uuid(), foodName: foodName, barcodeNumber: barcodeNumber, restockLevel: restockLevel}));
        navigateTo("/dashboard");
    };

    return (
        <div>
            <header className="dashboard-header">Add Food</header>
            <section className="zone-menu">
                <article className="food-name">
                    <input className="food-name-input"
                           placeholder="Enter Name"
                           type="text"
                           onChange={(event) => setFoodName(event.target.value)}
                    />
                </article>
                <article className="option">
                    <h2>Enter Barcode Number</h2>
                    <input className="barcode-input"
                           placeholder="0123456AB78"
                           type="text"
                           onChange={(event) => setBarcodeNumber(event.target.value)}
                    />
                </article>

                <article className="option">
                    <h2>Select Units</h2>
                    <select className="food-units-input" name="units" onChange={(event) => setFoodUnits(event.target.value)}>
                        <option value="grams">grams</option>
                        <option value="kilograms">kilograms</option>
                        <option value="milliliter">milliliter</option>
                        <option value="liter">liter</option>
                    </select>
                </article>

                <article className="option">
                    <h2>Restock Below</h2>
                    <input className="restock-input"
                           placeholder="1.0"
                           type="number"
                           min={0}
                           max={999}
                           onChange={(event) => setRestockLevel(Number(event.target.value))}
                    />
                </article>

                <button className="save-food-button" onClick={() => saveFood()}>Save</button>
            </section>
            <footer className="site-footer">
                <LinkElement link="/dashboard">
                    <img className="site-footer-links" src={dashboardIcon} alt=""/>
                </LinkElement>
                <LinkElement link="/dashboard/zones">
                    <img className="site-footer-links" src={zoneIcon} alt=""/>
                </LinkElement>
                <LinkElement link="/dashboard/register">
                    <img className="site-footer-links" src={registerFoodIcon} alt=""/>
                </LinkElement>
                <LinkElement link="/dashboard/search">
                    <img className="site-footer-links" src={searchFoodIcon} alt=""/>
                </LinkElement>
            </footer>
        </div>
    );
};

export default RegisterFood;
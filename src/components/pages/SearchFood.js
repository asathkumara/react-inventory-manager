import React, {useState} from "react";
import searchFoodIcon from "../../resources/images/magnifier-icon-white-active.webp";
import magnifierIcon from "../../resources/images/magnifier-icon.webp";
import {useSelector} from "react-redux";
import FoodManager from "../utils/FoodManager";
import Footer from "../utils/Footer";

/**
 * Container for SearchFood page
 * @returns {JSX.Element}
 */
const SearchFood = () => {

    const [query, setQuery] = useState("");
    const [queryResults, setQueryResults] = useState("");
    const [queryFoodList, setQueryFoodList] = useState([]);

    const foodList = useSelector((state) => state.food.value);

    const searchFoodItems = (delay=200) => {
        setTimeout(() => {
            if (query.length === 0)
            {
                setQueryFoodList([]);
                setQueryResults("");
                return;
            }

            let filteredFoodList = foodList.filter((food) => food.foodName.toLowerCase().includes(query.toLowerCase()) ||
            food.barcodeNumber.toLowerCase().includes(query.toLowerCase()));

            setQueryResults(`About ${filteredFoodList.length} results found.`);
            setQueryFoodList(filteredFoodList);

        }, delay);

    };

    return (
        <div>
            <header className="dashboard-header">Search</header>
            <section className="zone-menu">
                <article className="food-search">
                    <span className="food-search-icon">
                        <img src={magnifierIcon} alt="search"/>
                    </span>
                    <input className="food-search-input"
                           placeholder="Search Food Item"
                           type="text"
                           onChange={(event) => setQuery(event.target.value)}
                           onKeyUp={() => searchFoodItems()}
                    />
                </article>

                <article className="option food-search-results">
                    <h2 className="option-label">Results</h2>
                    <p>{queryResults}</p>
                    <FoodManager foodList={queryFoodList}/>
                </article>
            </section>
            <Footer searchFoodIcon={searchFoodIcon}/>
        </div>
    );
};

export default SearchFood;
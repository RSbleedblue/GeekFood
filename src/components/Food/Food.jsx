import { useEffect, useState } from "react";
import profile from '../../assets/comment.jpg';
import food from '../../assets/FoodBurger.png';
import { FaMagnifyingGlass } from "react-icons/fa6";
import FoodPopularCards from "./FoodPopularCards";
import axios from 'axios';
import FoodSearchResults from "./FoodSearchResults";
import FoodPopularDishes from "./FoodPopularDishes";
import { Outlet } from "react-router-dom";
import MenuTransitions from "./FoodShowRecipe";

const Food = () => {
    const [foodItem, setFoodItem] = useState("");
    const [foodDataPopular, setFoodDataPopular] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    useEffect(() => {
        const fetchDataPopular = async () => {
            try {
                const response = await axios("https://www.themealdb.com/api/json/v1/1/categories.php");
                setFoodDataPopular(response.data.categories.slice(0, 7));
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        };
        fetchDataPopular();
    }, []);

    const handleSearch = async () => {
        if (foodItem.trim() === "") {
            setSearchResult([]);
            return;
        }

        try {
            const response = await axios(`https://www.themealdb.com/api/json/v1/1/search.php?s=${foodItem}`);
            setSearchResult(response.data.meals || []);
        } catch (error) {
            console.error("Error fetching search data:", error);
        }
    };

    useEffect(() => {
        const delayDebounceFn = setTimeout(() => {
            handleSearch();
        }, 500);

        return () => clearTimeout(delayDebounceFn);
    }, [foodItem]);

    return (
        
        <div className="flex flex-col p-2 mt-[6%] w-[80%] justify-center items-center">
            <div className="flex w-full">
                <div className="flex flex-col p-2 w-[60%] mt-10 gap-10">
                    <p className="text-[40px] text-sky-600 w-full">All foods are available at GeekFood!</p>
                    <div className="w-[50%] flex items-center gap-2">
                        <img className="w-6 h-6 rounded-full" src={profile} alt="Profile" />
                        <p className="text-sm text-slate-500">We at geekfood serve your craving desire for best foods</p>
                    </div>
                    <div className="flex rounded-full w-64 gap-2 items-center border border-solid border-sky-700 border-opacity-30 p-2">
                        <FaMagnifyingGlass className="ml-4 text-3xl text-sky-500 cursor-pointer" />
                        <input
                            className="rounded-lg p-2 focus:outline-none text-sky-700"
                            placeholder="Search Your food"
                            value={foodItem}
                            onChange={(e) => setFoodItem(e.target.value)}
                        />
                    </div>
                </div>
                {searchResult.length > 0 && foodItem.length > 0 ? (
                    <FoodSearchResults item={searchResult[0]} />
                ) : (
                    <div className="w-[50%] mt-10 rounded-lg shadow-xl flex flex-col p-4 gap-2  transition-all">
                        <p className="text-3xl text-sky-700 mb-4">Pizza Margeritta</p>
                        <div className="w-full flex items-center gap-4">
                            <div className="w-20 h-20 rounded-full shadow-xl bg-sky-200 items-center flex justify-center">
                                <img src="https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg" className="rounded-full w-[95%] h-[95%] " />
                            </div>
                            <div className=" text-sky-800 flex flex-col gap-2 w-[30%]">
                                <p><span>Category: </span>Pizza</p>
                                <p className="text-[10px] rounded-full shadow text-center">Italian</p>
                            </div>
                        </div>
                        <p className="text-sky-600">Ingredients</p>
                        <div className="w-full flex gap-2 text-[10px] flex-wrap">
                            <p className="rounded-lg shadow-xl p-2">pizza</p>
                            <p className="rounded-lg shadow-xl p-2">Onion</p>
                            <p className="rounded-lg shadow-xl p-2">Cheeze</p>
                            <p className="rounded-lg shadow-xl p-2">Garlic</p>
                            <p className="rounded-lg shadow-xl p-2">pizza</p>
                            <p className="rounded-lg shadow-xl p-2">Onion</p>
                            <p className="rounded-lg shadow-xl p-2">Cheeze</p>
                            <p className="rounded-lg shadow-xl p-2">Garlic</p>
                        </div>
                        <MenuTransitions props="1 Preheat the oven to 230°C.\r\n\r\n2 Add the sugar and crumble the fresh yeast into warm water.\r\n\r\n3 Allow the mixture to stand for 10 – 15 minutes in a warm place (we find a windowsill on a sunny day works best) until froth develops on the surface.\r\n\r\n4 Sift the flour and salt into a large mixing bowl, make a well in the middle and pour in the yeast mixture and olive oil.\r\n\r\n5 Lightly flour your hands, and slowly mix the ingredients together until they bind.\r\n\r\n6 Generously dust your surface with flour.\r\n\r\n7 Throw down the dough and begin kneading for 10 minutes until smooth, silky and soft.\r\n\r\n8 Place in a lightly oiled, non-stick baking tray (we use a round one, but any shape will do!)\r\n\r\n9 Spread the passata on top making sure you go to the edge.\r\n\r\n10 Evenly place the mozzarella (or other cheese) on top, season with the oregano and black pepper, then drizzle with a little olive oil.\r\n\r\n11 Cook in the oven for 10 – 12 minutes until the cheese slightly colours.\r\n\r\n12 When ready, place the basil leaf on top and tuck in!"/>
                    </div>
                )}
            </div>
            <div className="calc(w-h-screen - 10) mt-14 mb-10">
                <p className="text-3xl font-semibold text-sky-800">POPULAR CATEGORIES</p>
                <div className="flex flex-wrap w-full  gap-4 mt-10">
                    {foodDataPopular.map((category) => (
                        <FoodPopularCards key={category.idCategory} props={category} />
                    ))}
                </div>
            </div>
            <div className="w-full mt-14 mb-10">
                <p className="text-3xl font-semibold text-sky-800">POPULAR DISHES</p>
                <FoodPopularDishes />
            </div>
        </div>
    );
};

export default Food;

import { useEffect, useState } from "react";
import profile from '../../assets/comment.jpg';
import food from '../../assets/FoodBurger.png';
import { FaMagnifyingGlass } from "react-icons/fa6";
import FoodPopularCards from "./FoodPopularCards";
import axios from 'axios';
import FoodSearchResults from "./FoodSearchResults";
import FoodPopularDishes from "./FoodPopularDishes";
import { Outlet } from "react-router-dom";

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
        <div className="flex flex-col p-2 mt-[6%] items-start w-[70%]">
            <div className="flex w-full">
                <div className="flex flex-col p-2 w-[60%] mt-10 gap-10">
                    <p className="text-[40px] text-sky-600 w-full">All foods are available at GeekFood!</p>
                    <div className="w-[50%] flex items-center gap-2">
                        <img className="w-6 h-6 rounded-full" src={profile} alt="Profile" />
                        <p className="text-sm text-slate-500">We at geekfood serve your craving desire for best food</p>
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
                    <div className="w-[40%] mt-10 rounded-lg shadow-xl flex flex-col p-4 gap-2  transition-all">
                        <p className="text-3xl text-sky-700 mb-4">Pizza Margeritta</p>
                        <div className="w-full flex items-center gap-4">
                            <div className="w-20 h-20 rounded-full shadow-xl bg-sky-200 items-center flex justify-center">
                                <img src="https://www.themealdb.com/images/media/meals/x0lk931587671540.jpg" className="rounded-full w-[95%] h-[95%] " />
                            </div>
                            <div className=" text-sky-800 flex flex-col gap-2 w-[20%]">
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
                        <p></p>
                    </div>
                )}
            </div>
            <div className="w-full mt-14 mb-10">
                <p className="text-3xl font-semibold text-sky-800">POPULAR CATEGORIES</p>
                <div className="flex flex-wrap w-full  gap-4 mt-10">
                    {foodDataPopular.map((category) => (
                        <FoodPopularCards key={category.idCategory} props={category} />
                    ))}
                </div>
                <Outlet/>
            </div>
            <div className="w-full mt-14 mb-10">
                <p className="text-3xl font-semibold text-sky-800">POPULAR DISHES</p>
                <FoodPopularDishes />
            </div>
        </div>
    );
};

export default Food;

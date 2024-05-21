import axios from "axios";
import { useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";

const FoodPopularDishes = () => {
    const [popularFood, setPopularFood] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios("https://www.themealdb.com/api/json/v1/1/random.php");
            setPopularFood(response.data.meals);
            console.log(response.data.meals);
        };
        fetchData();
    }, []);

    const getIngredients = (food) => {
        let ingredients = [];
        for (let i = 1; i <= 20; i++) {
            const ingredient = food[`strIngredient${i}`];
            if (ingredient) {
                ingredients.push(ingredient);
            }
        }
        return ingredients;
    };

    const getYouTubeEmbedUrl = (url) => {
        const videoId = url.split('v=')[1];
        return `https://www.youtube.com/embed/${videoId}`;
    };

    return (
        <>
            {popularFood.length > 0 && (
                <div className="flex flex-col mt-3 w-full max-w-6xl mx-auto gap-6 shadow-xl p-4 rounded-lg">
                    <p className="text-2xl text-sky-800">{popularFood[0].strMeal}</p>
                    <div className="flex flex-col lg:flex-row gap-6">
                        <div className="flex flex-col lg:flex-row items-center lg:w-2/3 gap-6">
                            <div className="w-64 rounded-full flex justify-center items-center bg-sky-300 overflow-clip">
                                <img
                                    src={popularFood[0].strMealThumb}
                                    className="w-[96%] h-[98%]  rounded-full hover:scale-125 transition-all cursor-pointer"
                                    alt={popularFood[0].strMeal}
                                />
                            </div>
                            <div className="flex flex-col items-start gap-4 w-full lg:w-auto">
                                <div className="flex items-center gap-3">
                                    <FaLocationDot className="text-[40px] text-sky-900" />
                                    <p className="text-3xl text-sky-500">{popularFood[0].strArea}</p>
                                </div>
                                <div className="flex items-center gap-3">
                                    <p className="text-sm text-white rounded-lg bg-sky-500 p-2 hover:bg-sky-600 cursor-pointer">
                                        {popularFood[0].strCategory}
                                    </p>
                                </div>
                                <div className="flex flex-wrap gap-2 w-[300px]">
                                    {getIngredients(popularFood[0]).map((ele, idx) => (
                                        <p key={idx} className="text-[10px] p-2 rounded-lg bg-sky-900 text-white">{ele}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                        <div className="flex  flex-col justify-center items-center lg:w-1/3 w-full rounded-lg shadow-xl p-2 gap-2 h-full">
                            <p className="text-lg text-sky-800">Tutorial</p>
                            <iframe
                                className="w-full  lg:h-auto"
                                src={getYouTubeEmbedUrl(popularFood[0].strYoutube)}
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                                title="YouTube Video"
                            ></iframe>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default FoodPopularDishes;

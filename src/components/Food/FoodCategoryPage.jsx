import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ThreeCircles } from 'react-loader-spinner';

const FoodCategory = () => {
    const [categoryData, setCategoryData] = useState([]);
    const [hoveredImage, setHoveredImage] = useState(null);
    const [loading, setLoading] = useState(true);
    const { categoryId } = useParams();

    useEffect(() => {
        const fetchData = async () => {
            const response = await axios(`https://www.themealdb.com/api/json/v1/1/filter.php?c=${categoryId}`);
            const data = await response.data.meals;
            setCategoryData(data);
            setLoading(false);
        };
        fetchData();
    }, [categoryId]);

    return (
        <div className={`flex justify-center items-center min-h-screen mt-[6%]`}>
            {
                loading ? <ThreeCircles color="#0ea5e9"/> :
                    <div className="flex flex-col p-2 items-center w-[80%]">
                        <p className="text-[40px] font-semibold text-sky-950">{categoryId}</p>
                        <div className="w-full p-4 flex flex-wrap gap-4 justify-center">
                            {
                                categoryData.map((each, index) => (
                                    <div
                                        key={index}
                                        className="w-[22%] rounded-lg shadow-xl p-4 flex flex-col gap-4 hover:scale-105 hover:shadow-sky-200 transition-all cursor-pointer relative items-center"
                                        onMouseEnter={() => setHoveredImage(each.strMealThumb)}
                                        onMouseLeave={() => setHoveredImage(null)}
                                    >
                                        <p className="max-h-10 text-sm text-sky-700">{each.strMeal}</p>
                                        <div className="w-32 h-32 rounded-full flex items-center bg-blue-200 justify-center">
                                            <img src={each.strMealThumb} alt={each.strMeal} className="rounded-full w-[95%] h-[95%]" />
                                        </div>
                                        <button className="rounded-lg text-[10px] bg-sky-900 text-white p-2 hover:bg-sky-500 transition-all hover:scale-105">RECIPE</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default FoodCategory;

import { Link } from "react-router-dom";

const FoodPopularCards = ({ props }) => {
    return (
        <>
            {props.strCategory !== "Breakfast" && props.strCategory !== "Goat" &&
                (   

                    <Link to={`/foods/${props.strCategory}`} className="w-[13%] p-6  rounded-full gap-4 shadow-xl flex flex-col items-center hover:scale-105 hover:bg-sky-100 transition-all cursor-pointer justify-center">
                        
                            <p className="text-[12px] text-sky-800"> {props.strCategory}</p>
                            <div className="w-24 h-24 rounded-full flex justify-center items-center bg-blue-200">
                            <img src={props.strCategoryThumb} className="rounded-full w-[95%] h-[95%]" />
                            </div>
                       
                    </Link>
                    )
            }
        </>
    )
}
export default FoodPopularCards;
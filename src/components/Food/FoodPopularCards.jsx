import { Link } from "react-router-dom";

const FoodPopularCards = ({ props }) => {
    return (
        <>
            {props.strCategory !== "Breakfast" && props.strCategory !== "Goat" &&
                (
                    <div className="w-[12%]  rounded-full gap-4 p-6  shadow-xl flex flex-col items-center hover:scale-105 hover:bg-sky-100 transition-all cursor-pointer">
                        <Link to={`/foods/${props.idCategory}`} >
                            <p className="text-[12px] text-sky-800"> {props.strCategory}</p>
                            <img src={props.strCategoryThumb} className="rounded-full" />
                        </Link>
                    </div>)
            }
        </>
    )
}
export default FoodPopularCards;
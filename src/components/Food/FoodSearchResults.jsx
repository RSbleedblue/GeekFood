import MenuTransitions from "./FoodShowRecipe";

const FoodSearchResults = ({item}) => {
    return (
        <>

            <div className="w-[40%] mt-10 rounded-lg shadow-xl flex flex-col p-4 gap-2  transition-all">
                <p className="text-3xl text-sky-700 mb-4">{item.strMeal}</p>
                <div className="w-full flex items-center gap-4">
                    <div className="w-20 h-20 rounded-full shadow-xl bg-sky-200 items-center flex justify-center">
                        <img src={item.strMealThumb} className="rounded-full w-[95%] h-[95%] " />
                    </div>
                    <div className=" text-sky-800 flex flex-col gap-2 w-[20%]">
                        <p><span>Category: </span>{item.strCategory}</p>
                        <p className="text-[10px] rounded-full shadow text-center">{item.strArea}</p>
                    </div>
                </div>
                <p className="text-sky-600">Ingredients</p>
                <div className="w-full flex gap-2 text-[10px] flex-wrap">
                    <p className="rounded-lg shadow-xl p-2">{item.strIngredient1}</p>
                    <p className="rounded-lg shadow-xl p-2">{item.strIngredient2}</p>
                    <p className="rounded-lg shadow-xl p-2">{item.strIngredient3}</p>
                    <p className="rounded-lg shadow-xl p-2">{item.strIngredient4}</p>
                    <p className="rounded-lg shadow-xl p-2">{item.strIngredient5}</p>
                    <p className="rounded-lg shadow-xl p-2">{item.strIngredient6}</p>
                    <p className="rounded-lg shadow-xl p-2">{item.strIngredient7}</p>
                    <p className="rounded-lg shadow-xl p-2">{item.strIngredient8}</p>
                </div>
                <MenuTransitions props={item.strInstructions}/>
            </div>

        </>
    )
}
export default FoodSearchResults;
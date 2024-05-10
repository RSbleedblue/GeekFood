import resData from "../../utils/RestaurantData";
import ResCard from "../sub-components/RestaurantsCard";

const Restaurants = () => {
  return (
    <>
      <div className="flex p-4 mt-[6%] w-[90%] flex-col gap-2">
        <div className="flex justify-between w-full p-2 items-center">
          <input
            placeholder="Search Restaurants"
            className="p-2  border border-solid border-black border-opacity-30"
          ></input>
          <div className="flex items-center gap-2 justify-center">
            <p>Minimum Rating</p>
            <input
              placeholder="0"
              className="p-2 border border-solid border-black border-opacity-30 w-10 text-center"
            ></input>
          </div>
        </div>
        <div className="w-full flex gap-10  flex-wrap ml-10">
          {
            resData.map((ele,index) => (
                <ResCard key={index} title={ele.name} address={ele.address} postalCode={ele.postcode} rating={ele.rating} foodType={ele.type_of_food} share={ele.URL}/>
            ))
          }
        </div>
      </div>
    </>
  );
};
export default Restaurants;

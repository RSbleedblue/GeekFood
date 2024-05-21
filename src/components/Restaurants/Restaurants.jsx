import resData from "../../utils/RestaurantData";
import ResCard from "../sub-components/RestaurantsCard";
import { useState } from "react";

const Restaurants = () => {
  const [restaurant, setRestaurant] = useState("");
  const [rating, setRating] = useState(5);

  const searchResto = (event) => {
    setRestaurant(event.target.value);
  };

  const searchRating = (event) => {
    setRating(parseInt(event.target.value));
  };

  const filteredRestaurants = resData.filter((res) => {
    return parseInt(res.rating) === rating && res.name.toLowerCase().includes(restaurant.toLowerCase());
  });

  return (
    <>
      <div className="flex p-4 mt-[6%] w-[90%] flex-col gap-2">
        <div className="flex justify-between w-full p-2 items-center">
          <input
            placeholder="Search Restaurants"
            className="p-2  border border-solid border-sky-500  focus: outline-none rounded-lg"
            value={restaurant}
            onChange={searchResto}
          />
          <div className="flex items-center gap-2 justify-center">
            <p>Minimum Rating</p>
            <input
              type="number"
              min={0}
              max={5}
              placeholder="0"
              className="p-2 border border-solid border-sky-500 w-10 text-center focus:outline-none rounded-lg"
              value={rating}
              onChange={searchRating}
            />
          </div>
        </div>
        <div className="w-full flex gap-10  flex-wrap ml-10">
          {filteredRestaurants.map((ele, index) => (
            <ResCard
              key={index}
              title={ele.name}
              address={ele.address}
              postalCode={ele.postcode}
              rating={ele.rating}
              foodType={ele.type_of_food}
              share={ele.URL}
          
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Restaurants;

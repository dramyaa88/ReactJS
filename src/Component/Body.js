//import { restaurantList } from "../Constants";
import { RestaurantCard } from "./RestaurantCard";
import { useState ,useEffect} from "react";
import {Link} from "react-router-dom";
import Shimmer from "./Shimmer";
import { filterData } from "../utils.js/helper";


export const Body = ({user}) => {
    //const [restaurants, setRestaurants] = useState(restaurantList);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurantas] = useState([]);
    const [searchText, setSearchText] = useState(""); 

    useEffect(() => {
        getFilteredData();
    }, []);

    // const isOnline = useOnline();

    // if(!isOnline){
    //     return <h1>Offline! Please check your internet connection</h1>
    // }

    async function getFilteredData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurantas(json?.data?.cards[2]?.data?.data?.cards);
    }

    //if(filteredRestaurants?.length === 0)
    //return <h1>{"No Restaurants are found !!"}</h1>

    if (!allRestaurants) return null;

    return allRestaurants?.length === 0? (
        <Shimmer/>
    ) : (

  
        <>
        <div className="p-4 bg-pink-50 my-4">
            <input type="Text"
            className="search-input"
            placeholder = "Search"
            value ={searchText}
            onChange = {(e) => {setSearchText(e.target.value)}}/>
            <button className="p-2 m-2 bg-purple-500 hover:bg-purple-900 text-white rounded-md"
            onClick={() => {
                const data = filterData(searchText, allRestaurants);
                setFilteredRestaurantas(data);
            }}>
                Search</button>
        </div>
        
            <div className="flex flex-wrap">
              {filteredRestaurants.map((restaurant) => {
                return(
                    <Link to ={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
                 <RestaurantCard {...restaurant.data } user={user} />
                </Link>
                );
              })}
             </div>
        </>
    );

    
           
};
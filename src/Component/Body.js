//import { restaurantList } from "../Constants";
import { RestaurantCard } from "./RestaurantCard";
import { useState ,useEffect, useContext} from "react";
import {Link} from "react-router-dom";
import Shimmer from "./Shimmer";
import { UserContext } from "../utils.js/UserContext";
import { filterData } from "../utils.js/helper";


export const Body = () => {
    //const [restaurants, setRestaurants] = useState(restaurantList);
    const [allRestaurants, setAllRestaurants] = useState([]);
    const [filteredRestaurants, setFilteredRestaurantas] = useState([]);
    const [searchText, setSearchText] = useState(""); 
    const {user, setUser} = useContext(UserContext);

    useEffect(() => {
        getFilteredData();
    }, []);

    async function getFilteredData() {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9351929&lng=77.62448069999999&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //console.log(json);
        setAllRestaurants(json?.data?.cards[2]?.data?.data?.cards);
        setFilteredRestaurantas(json?.data?.cards[2]?.data?.data?.cards);
    }

    if (!allRestaurants) return null;

    return allRestaurants?.length === 0? (
        <Shimmer/>
    ) : (

  
        <>
        
        <div className="mx-auto max-w-5l  px-30 bottom-3">
        <div class="m-1 text-right ">
            
            <div class="flex m-2   px-20 pt-10">
                
                    
                    <div class="relative hidden md:block">
                        <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                        

                            <svg class="w-5 h-5 text-gray-500" aria-hidden="true" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Search icon</span>
                         </div>
                        <input type="text" id="search-navbar" class=" w-full p-2 m-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search..." value ={searchText}
                        onChange = {(e) => {setSearchText(e.target.value)}}/>
                    </div>
                    
                    <button class="p-2 m-2  bg-purple-500 hover:bg-purple-900 text-white rounded-md"
                        onClick={() => {
                            const data = filterData(searchText, allRestaurants);
                            setFilteredRestaurantas(data);
                        }}>
                            Search
                    </button>
                    
                
            </div>
                    </div>
            <div className="Available-Resturants  w-full flex  justify-center items-center">
            <div className="Restaurant-container px-5 flex flex-wrap justify-start border-none w-[90%] mt-[45px]">   
              {filteredRestaurants.map((restaurant) => {
                return(
                 
                    <Link to ={"/restaurant/"+restaurant.data.id} key={restaurant.data.id}>
                 <RestaurantCard {...restaurant.data } />
                </Link>
                );
              })}
              </div>
             </div>
             </div>
             
        </>
    );

    
           
};
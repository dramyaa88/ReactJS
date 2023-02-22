import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../Constants";
import  Shimmer  from "./Shimmer";
import useRestaurant from "../utils.js/useRestaurant";
import { addItems } from "../utils.js/cartSlice";
import { useDispatch } from "react-redux";


const RestaurantMenu = () => {
    const {resId} = useParams();
    
    const restaurant = useRestaurant(resId);

    const dispatch = useDispatch();

    const addFoodItems = (item) => {
        dispatch(addItems(item));
    }


    return !restaurant?(
        <Shimmer/>
    ) : (
    <div className="flex">
    <div className="p-2">
        <h1>Restaurant ID : {resId}</h1>
        <h2>{restaurant?.name}</h2>
        <img src= {IMG_CDN_URL +restaurant?.cloudinaryImageId} />
        <h3>{restaurant?.area}</h3>
        <h3>{restaurant?.city}</h3>
        <h3>{restaurant?.avgRating}</h3>
        <h3>{restaurant?.costForTwoMsg}</h3>
    </div>
    <div>
        <h1>Menu</h1>
        <ul>
            {Object.values(restaurant?.menu?.items).map((item) => <li key={item.id}>{item.name} - 
            <button className="p-2 m-2 bg-green-500 hover:bg-green-800 text-white rounded-md" onClick={() => addFoodItems(item)}>Add Items</button></li>)}
        </ul>
    </div>
    </div>
    )
   
  //  const {id} = params;
    
}

export default RestaurantMenu;
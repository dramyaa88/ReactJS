//Resstaurant Data - Menu items
import {useParams} from "react-router-dom";
import { useEffect, useState } from "react";
import { IMG_CDN_URL } from "../Constants";
import  Shimmer  from "./Shimmer";
import useRestaurant from "../utils.js/useRestaurant";
import { addItems } from "../utils.js/cartSlice";
import { useDispatch } from "react-redux";
import RestaurantMenu from "./RestaurantMenu";

const RestaurantPageBanner = () => {
    const dispatch = useDispatch();

    const addFoodItems = (item) => {
        dispatch(addItems(item));
    }

    const {resId} = useParams();
    
    const restaurant = useRestaurant(resId);

    return !restaurant?(
        <Shimmer/>
    ) : (

     <>
        <div className="Resturant-banner sticky top-0 z-20  bg-[#171a29] px-12 py-12 h-245  ">
      <div className="flex justify-around items-center px-16">
        <div className="Resturant-Image">
          <img
            className="w-[230px] h-[135px] bg-centre bg-contain bg-no-repeat"
            src={IMG_CDN_URL + restaurant?.cloudinaryImageId}
          />
        </div>
        <div className="Resturant-Info relative h-[145px] flex flex-col justify-between right-[60px] text-white ">

          <p className=" text-[25px]">{restaurant?.name}</p>
          {restaurant?.cuisines?.map((item, index) => {
            return (
              <span className="text-[13px] text-[#686b78]" key={index}>
                {item}{" "}
              </span>
            );
          })}
          <p className="text-[13px] text-[#686b78]">
            {restaurant?.locality}
          </p>
          <ul className="flex   justify-start items-center w-[350px] h-[60px]">
            {restaurant?.avgRating >= 2.5 ? (
              <li className="mr-11 px-2 text-[18px] relative  right-[5px]">
                {" "}
                <i className="fa-regular fa-star fa-small"></i>{" "}
                {restaurant?.avgRating}
                <p className="text-[10px] text-[#686b78]">Rating</p>
              </li>
            ) : (
              <li className="mr-11 px-2">
                <p>
                  <i className="fa-regular fa-star fa-small"></i>
                </p>
                <p className="text-xs text-[#686b78]"> --too few Rating-</p>
              </li>
            )}

            <li className="mr-11 px-2">
              <p>{restaurant?.sla?.deliveryTime} Mins</p>
              <p className="text-[10px] text-[#686b78]">Delivery Time</p>
            </li>
            <li className="mr-11 px-2">
              ₹ {restaurant?.costForTwo / 100}
              <p className="text-[10px] text-[#686b78]">Cost for two</p>
            </li>
          </ul>
        </div>
        <div className="Resturant-Offers  text-[white]">
          <fieldset className="border-[1px] w-[340px] h-[145px]">
            <legend className="text-[18px] p-2">OFFERS</legend>
            {restaurant?.aggregatedDiscountInfoV2?.descriptionList?.map(
              (item, index) => {
                return (
                  <p className="p-1 px-2 text-[14px]" key={index}>
                    <i class="fa-solid fa-tags fa-lg"></i> {item.meta}
                  </p>
                );
              }
            )}
          </fieldset>
        </div>
      </div>
    </div>

    <div>
        {Object.values(restaurant?.menu?.items).map((item) => (
          <RestaurantMenu
            key={item.id}
            foodItem={item}
            RestaurantData={restaurant}
          />
        ))}
      </div>

    
      
      </>
    );
};

export default RestaurantPageBanner;
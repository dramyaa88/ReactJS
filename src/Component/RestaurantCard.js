import { IMG_CDN_URL } from "../Constants";
import { useState } from "react";

export const RestaurantCard = ({
cloudinaryImageId,
name,
cuisines,
avgRating,
deliveryTime,
costForTwoString,
aggregatedDiscountInfo}) => {
    
    const [isLoaded, setIsLoaded] = useState(false);

    return (
        <li className=" restaurant-Card  w-[230px] h-fit px-3  py-4  mb-8 mt-4 hover:shadow-xl hover:border-slate-500 hover:border-[.5px] hover:border-solid">
        <img className="h-0 w-0" src= {IMG_CDN_URL +cloudinaryImageId} 
        onLoad={() => {
            setIsLoaded(true);
          }}
          />
            
            <div className="restaurant-Image">
             {isLoaded ? (
                <img
                  className="h-34 w-56 bg-center bg-no-repeat bg-contain"
                  src={IMG_CDN_URL +cloudinaryImageId}/>
             ) : (
                <div className=" h-32 w-[210px] bg-[#e9ebe7]" />
             )  
                
             }
            </div>
            <div className="restaurant-data flex flex-col justify-start content-evenly ">
              <p className="Restaurnat-Name p-0 pb-0 text-md text-[#3e4152]">
                {name}
              </p>
              <div className="restaurant-Cuisines  text-xs  text-[#535665]  w-[200px] overflow-clip ">
                {cuisines?.join(",")}
              </div>
              <div className="restaurant-Delivery-Info flex justify-between w-full  items-center h-10">
                {avgRating >= 4 ? (
                  <span className="Rating text-white pr-1 pl-1 text-xs p-0.5 decoration-slate-50  bg-green-600">
                    <i className="fa-regular fa-star fa-small"></i>{" "}
                    {avgRating}
                  </span>
                ) : avgRating > 2.8 ? (
                  <span className="Rating text-white pr-1 pl-1 p-0.5 text-xs bg-[#db7c38]">
                    <i className="fa-regular fa-star fa-small"></i>{" "}
                    {avgRating}
                  </span>
                ) : (
                  <span className="Rating text-slate-400 text-xs ">
                    <i className="fa-regular fa-star fa-small"></i>{" "}
                    {avgRating}
                  </span>
                )}

                <span className="Time text-[13px] text-[#535665] ">
                  {deliveryTime} Min
                </span>
                <span className="Cost-two text-[#535665] text-xs">
                  {costForTwoString}
                </span>
              </div>
              <hr />
              <div className="coupon p-1 text-[13px] text-[#8a584b] flex justify-center items-center font-[500]">
                <p>
                  <i className="fa-sharp fa-solid fa-tags"></i>{" "}
                  {
                    aggregatedDiscountInfo?.shortDescriptionList[0]
                      ?.meta
                  }
                </p>
              </div>
            </div>
       
        </li>
    );
};
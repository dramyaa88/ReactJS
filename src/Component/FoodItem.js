import { IMG_CDN_URL } from "../Constants";

export const FoodItem = ({
    item}
) => {

    return (
        <div className="w-56 p-2 m-2 shadow-lg bg-pink-50">
            
            <img src = {IMG_CDN_URL
            +item?.cloudinaryImageId}/>
            <h2 className="font-bold text-xl">{item?.name}</h2>
            <h3>{item?.description}</h3>
            <h4>Rupees : {item?.price/100}</h4>
        </div>
    );
};

export default FoodItem;
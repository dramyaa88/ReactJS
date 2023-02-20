import { useState, useEffect } from "react";
import { FETCH_MENU_URL } from "../Constants";

const useRestaurant = (resId) => {
    const [restaurant, setRestaurant] = useState(null);

    useEffect(() => {
        getRestaurantInfo();
    }, [])

    async function getRestaurantInfo(){
        const data = await fetch(FETCH_MENU_URL+resId);
        //console.log(resId);
        const json = await data.json();
        console.log(json);
        setRestaurant(json.data);
        //console.log(restaurant?.menu?.items);
    }

    return restaurant;
}

export default useRestaurant;
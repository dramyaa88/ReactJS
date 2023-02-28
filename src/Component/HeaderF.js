import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils.js/useOnline";
import { UserContext } from "../utils.js/UserContext";
import { useSelector } from "react-redux";
import Logo1 from "../assets/logo1.jpg";

const Image1 = () => (
    <a href = "/">
        <img  
        alt = "Foodies Empire logo"
        src = {Logo1} />
    </a>
);

export const Header = () => {
    //const [isLoggedin, setIsLoggedIn] = useState(false);
    //const {user} = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
    const isOnline = useOnline();
    return (
        <>
        <div className="Header sticky top-0  bg-white z-10 sm:pt-3 sm:pb-1  sm:px-[130px] sm:w-full w-[400px]  flex justify-between items-center shadow-xl">
        <div className="header-logo w-2/3  flex items-center ">
          <Link to="/">
            <div className="logo w-[60px] h-[60px] bg-no-repeat bg-contain bg-center"><Image1/></div>
          </Link>
        </div>
        <div className="Header-Links w-1/3 flex sm:text-[13px] text-[7px]  justify-around">
          <Link to="/instamart"> Instamart</Link>
          <Link to="/about">AboutUs</Link>
          <Link to="/cart">Cart -{cartItems.length}</Link>
          <h1>{isOnline? "✅" : "🔴"}</h1>
        </div>
      </div>

        </>
    );
};
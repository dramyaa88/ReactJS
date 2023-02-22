import { useState, useContext } from "react";
import Logo from "../assets/ReactJSImg.jpg";
import { Link } from "react-router-dom";
import useOnline from "../utils.js/useOnline";
import UserContext from "../utils.js/UserContext";
import { useSelector } from "react-redux";

const Image1 = () => (
    <a href = "/">
        <img className = "h-28 p-2" 
        alt = "logo"
        src = {Logo} />
    </a>
);

export const Header = () => {

    const [isLoggedin, setIsLoggedIn] = useState(false);
    const {user} = useContext(UserContext);
    const cartItems = useSelector(store => store.cart.items);
    const isOnline = useOnline();
    return (
        <div className="flex justify-between bg-pink-50 shadow-lg">
            <Image1/>
        <div >
        <ul className="flex py-10">
            <Link to="/"><li className="px-2">Home</li></Link>
            <Link to ="/about"><li className="px-2">About</li></Link>
            <Link to ="/contact"><li className="px-2">Contact</li></Link>
            <Link to ="/instamart"><li className="px-2">Instamart</li></Link>
            <Link to ="/cart"><li className="px-2">Cart - {cartItems.length}</li></Link>
        </ul>
        </div>
        <h1 className="p-10 font-bold text-red-900">{user.name}</h1>
        <h1 className="m-10">{isOnline? "✅" : "🔴"}</h1>
        <div className="m-10">
            {
                isLoggedin? (<button onClick={() => setIsLoggedIn(false)}>Logout</button>):(<button onClick={() => setIsLoggedIn(true)}>Login</button>)
            }
        </div>
        </div>
    );
};
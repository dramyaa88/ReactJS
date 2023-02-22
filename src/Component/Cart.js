import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils.js/cartSlice";
import FoodItem from "./FoodItem";

const Cart = () => {

    const cartItems = useSelector(store => store.cart.items);
    console.log(cartItems);

    const dispatch = useDispatch();

    const handleClear = () => {
        dispatch(clearCart());
    }
    
    return(
    <div>
        <h1 className="font-bold text-3xl p-2 m-2">Cart Items - {cartItems.length}</h1>
        <button className="bg-green-300 p-2 m-2" onClick={() => {handleClear()}}>Clear Cart</button>
        <div className="flex">
        {cartItems.map((item) => (<FoodItem key={item.id} {...item}/>) )}
        </div>
    </div>
    )
}

export default Cart;
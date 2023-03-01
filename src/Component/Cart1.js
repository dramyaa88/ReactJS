import CartItem from "./CartItem";
import { IMG_CDN_URL } from "../Constants";
import EmptyCart from "./EmptyCart";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Cart = () => {
  let totalAmount = 0;

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);

  cartItems.map((item) => {
    if (item?.dish?.price == 100) {
      totalAmount += item?.dish?.price * item?.qty;
    } else {
      totalAmount += (item?.dish?.price * item?.qty) / 100;
    }
  });

  if (cartItems?.length <= 0) return <EmptyCart />;
  else
    return (
      <div className="cart w-full h-fit flex-col flex justify-center items-center  py-14 px-10">
        <div className="Checkout-Box rounded-sm  w-[1120px] bg-white h-fit">
          <div className="Restaurant-info w-[full] h-[100px] px-4 pt-4 flex justify-start items-center  ">
            <div className="image">
              <img
                className="Image rounded-md bg-no-repeat bg-center bg-contain h-[80px] w-[80px]"
                src={IMG_CDN_URL + cartItems[0]?.restaurant?.cloudinaryImageId}
              />
            </div>
            <div className="Restaurant-Info ml-4">
              <p className="text-[18px] font-[900px] text-[#3e4152]">
                {cartItems[0]?.restaurant?.name}
              </p>

              <p className="text-[12px] font-[100px]">
                {cartItems[0]?.restaurant?.locality}
              </p>
            </div>
          </div>
          <div className="billing-info  w-full p-4">
            <ul>
              {cartItems?.map((item, index) => {
                return (
                  <li key={index}>
                    <CartItem cartItem={item} />
                  </li>
                );
              })}
            </ul>
            <div className="w-full h-[60px]    my-4 p-4 bg-[#f9f9f9] flex justify-start items-center">
              <span className="text-[20px] relative  right-2">❝</span>
              <input
                placeholder="Any suggstions we will pass it on to the restaurant..."
                className="suggestion w-10/12 bg-[#f9f9f9]"
                type="text"
              />
            </div>

            <div className="no-contact-delivery border-[#535665] border-[.5px] p-3 flex justify-start items-start ">
              <input type="checkbox" />
              <div className="no-contact-info ml-3">
                <p className=" text-[#3e4152] font-[600] text-[14px]">
                  Opt in for No-contact Delivery
                </p>
                <span className=" text-[13px] m-0 p-0 text-[#535665]">
                  Unwell, or avoiding contact? Please select no-contact
                  delivery. Partner will safely place the order outside your
                  door (not for COD)
                </span>
              </div>
            </div>
            <div className="bill-details my-4">
              <h1>Bill details</h1>
              <p className="flex justify-between my-1 text-[#535665] font-thin text-[13px]">
                <span>Item Total</span>
                <span>{totalAmount}</span>
              </p>
              <p className="flex justify-between my-1 font-thin">
                <span className="text-[#535665] text-[13px]">
                  Delivery Partner Fee
                </span>
                <span className=" text-[#60b246] font-thin text-[13px]">
                  FREE
                </span>
              </p>
              <hr />
              <p className="flex justify-between my-3 text-[#535665] text-[14px] font-thin">
                <span>Govt Taxes And Charges</span>
                <span>₹35.7</span>
              </p>
              <hr className="border-black border-[.5px] " />
              <p className="flex justify-between mt-3 font-[600] text-[13px] ">
                <span>To Pay</span>
                <span>{totalAmount + 35.7}</span>
              </p>
            </div>
          </div>
          <div className="Place-Order w-[1125px]    p-4">
            <Link to="/thank-you">
              <button className="w-full p-4 bg-[#60b246] rounded-sm text-white text-[20px]">
                Place Order
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
};

export default Cart;

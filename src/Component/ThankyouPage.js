import React from "react";
import { Link } from "react-router-dom";

const ThankyouPage = () => {
  return (
    <div class="font-bold  tracking-wide px-36 text-center pt-20 pb-20 ">
      <h1 class="text-3xl pt-6 pb-4">Thank You for Placing the order </h1>
      <p className="text-[12px] text-[#7e808c] ">
        You can go to home page to view more restaurants
      </p>
      <Link to="/">
        <button className="border-none p-2 text-[13px] bg-[#fc8019] my-3 text-white font-[700] rounded-sm">
          SEE RESTAURANTS NEAR YOU
        </button>
      </Link>
    </div>
  );
};

export default ThankyouPage;

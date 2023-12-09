import React from "react";
import styles from "../style";
import { bill, apple, google } from "../assets";

const Billing = () => {
  return (
    <section className={`flex md:flex-row flex-col-reverse ${styles.paddingY}`}>
      <div
        className="flex-1 flex justify-center items-center 
      md:mr-10 mr-0 md:mt-0 mt-10 relative"
      >
        <img className="w-[100%] h-[100%]" src={bill} alt="bill" />
      </div>
      <div
        className="flex-1 flex justify-center items-start 
      flex-col"
      >
        <h2
          className="font-poppins font-semibold xs:text-[48px] text-[40px] 
        xs:leading-[77.8px] leading-[66.8px] text-white w-full"
        >
          Easily control your billing & invoicing.
        </h2>
        <p
          className="font-poppins font-normal text-gray-400 text-[18px] 
          leading-[30.8px] mt-5 max-w-[470px]"
        >
          We consider the payment methods you'll offer your customers when you
          start your business. This is an important part of managing your
          business cash flow and meeting your customer's needs.
        </p>
        <div className="flex flex-row flex-wrap md:mt-10 mt-6">
          <img
            className="flex-1 mr-5 cursor-pointer"
            src={apple}
            alt="apple_store"
          />
          <img
            className="flex-1 cursor-pointer"
            src={google}
            alt="play_store"
          />
        </div>
      </div>
    </section>
  );
};

export default Billing;

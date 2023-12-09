import React from "react";
import styles from "../style";
import Button from "./Button";
import { card } from "../assets";

const CardDeal = () => {
  return (
    <section className={`flex md:flex-row flex-col ${styles.paddingY}`}>
      <div
        className="flex-1 flex justify-center items-start 
      flex-col "
      >
        <h2 className="font-poppins font-semibold xs:text-[48px] text-[40px] text-white xs:leading-[76.8px] leading-[66.8px] w-full">
          Find a better card deal <br className="sm:block hidden" /> in few easy
          steps
        </h2>
        <p
          className={`font-poppins font-normal text-gray-400 text-[18px] 
          leading-[30.8px] mt-5 max-w-[470px] mb-10`}
        >
          We've been researching and comparing credit cards for over 15 years.
          You can easily compare more than 270 Australian credit cards using our
          free tools. When you find one that suits, we'll take you securely to
          the bank's website.
        </p>
        <Button />
      </div>
      <div className="flex-1 flex flex-col md:mt-0 mt-10">
        <img src={card} alt="" />
      </div>
    </section>
  );
};

export default CardDeal;

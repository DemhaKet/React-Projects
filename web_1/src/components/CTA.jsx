import React from "react";
import styles from "../style";
import Button from "./Button";

const CTA = () => {
  return (
    <section
      className={`flex sm:flex-row flex-col sm:my-16 my-6 sm:py-12 py-4 sm:px-16 px-6 bg-black-gradient rounded-[20px] `}
    >
      <div className="flex-1 flex flex-col">
        <h2
          className="font-poppins font-semibold xs:text-[48px] text-[40px] 
        xs:leading-[77.8px] leading-[66.8px] text-white w-full"
        >
          Come try our service now!
        </h2>
        <p
          className="font-poppins font-normal text-gray-400 text-[18px] 
          leading-[30.8px] mt-5 max-w-[470px]"
        >
          Everything you need to accept card payments and grow your business
          anywhere on the planet.
        </p>
      </div>
      <div className="flex justify-center items-center sm:ml-10 ml-0 sm:mt-0 mt-10">
        <Button />
      </div>
    </section>
  );
};

export default CTA;

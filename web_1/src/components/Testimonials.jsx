import React from "react";
import styles from "../style";
import FeedbackCard from "./FeedbackCard";
import { quotes, people01, people02, people03 } from "../assets";

const Testimonials = () => {
  return (
    <section className={`flex md:flex-col flex-col ${styles.paddingY}`}>
      <div className="flex-1 flex md:flex-row flex-col justify-start items-center sm:mb-16 mb-6">
        <h2
          className="flex-1 font-poppins font-semibold xs:text-[48px] text-[40px] 
        xs:leading-[77.8px] leading-[66.8px] text-white w-full"
        >
          What people are <br className="sm:block hidden" /> saying about us
        </h2>
        <div className="flex-1">
          <p
            className="font-poppins font-normal text-gray-400 text-[18px] 
          leading-[30.8px] mt-5 max-w-[470px] "
          >
            Everything you need to accept card payments and grow your business
            anywhere on the planet.
          </p>
        </div>
      </div>
      <div className="flex-1 flex flex-row flex-wrap">
        <FeedbackCard />
      </div>
    </section>
  );
};

export default Testimonials;

import React from "react";
import { arrowUp } from "../assets";
import styles from "../style";

const GetStarted = () => {
  return (
    <div
      className={` ${styles.flexCenter} bg-blue-gradient w-[140px] h-[140px] rounded-full p-[2px]`}
    >
      <button className="bg-primary rounded-full w-full h-full">
        <p
          className={`text-gradient font-poppins font-medium text-[18px] leading-[21px]`}
        >
          Get
          <span>
            <img
              src={arrowUp}
              alt="arrow up"
              className="inline ml-2 h-[23px] w-[23px]"
            />
          </span>{" "}
          <br />
          Started
        </p>
      </button>
    </div>
  );
};

export default GetStarted;

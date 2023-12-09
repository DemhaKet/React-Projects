import React from "react";
import { stats } from "../constants";
import styles from "../style";

const Stats = () => {
  return (
    <section className="flex flex-row flex-wrap w-full justify-center sm:mb-20 mb-6 items-center ">
      {stats.map((element) => {
        return (
          <>
            <div
              key={element.id}
              className="flex flex-1 flex-row items-center justify-start text-white m-3"
            >
              <h4 className="font-poppins font-semibold xs:text-[40px] text-[30px] xs:leading-[53px] leading-[43px] ">
                {element.value}
              </h4>
              <p className="font-poppins font-normal items-center text-gradient xs:text-[20px] text-[15px] ml-3">
                {element.title}
              </p>
            </div>
          </>
        );
      })}
    </section>
  );
};

export default Stats;

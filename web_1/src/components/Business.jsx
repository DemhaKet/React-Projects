import React from "react";
import { features } from "../constants";
import Button from "./Button";
import { layout } from "../style";

const Business = () => {
  return (
    <section className={`${layout.section}`}>
      <div className="flex-1">
        <h2
          className="font-poppins font-semibold xs:text-[48px] text-[40px] 
        xs:leading-[77.8px] leading-[66.8px] text-white w-full"
        >
          You do the business,
          <br className="sm:block hidden" /> we'll handle the money.
        </h2>
        <p
          className={`font-poppins font-normal text-gray-400 text-[18px] 
          leading-[30.8px] mt-5 max-w-[470px] mb-10`}
        >
          With the right credit card, you can improve your financial life by
          building credit, earning rewards and saving money. But with hundreds
          of credit cards on the market.
        </p>
        <Button />
      </div>
      <div className="flex flex-col flex-1 md:ml-10 ml-0 justify-center items-center relative md:mt-0 mt-10">
        {features.map((element) => {
          return (
            <>
              <div className="flex flex-row rounded-[20px] p-6 mb-6 feature-card overflow-hidden ">
                <div
                  key={element.id}
                  className="w-[64px] h-[64px] rounded-full flex justify-center items-center bg-dimBlue"
                >
                  <img
                    className="w-[50%] object-contain"
                    src={element.icon}
                    alt=""
                  />
                </div>

                <div className="flex-1 flex flex-col ml-3 ">
                  <h4 className="font-poppins font-semibold text-[18px] text-white">
                    {element.title}
                  </h4>
                  <p
                    className="font-poppins font-normal text-gray-400 text-[16px] 
                    leading-[24px]"
                  >
                    {element.content}
                  </p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Business;

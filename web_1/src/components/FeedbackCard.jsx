import React from "react";
import { feedback } from "../constants";
import { quotes } from "../assets";

const FeedbackCard = () => {
  return (
    <>
      {feedback.map((element) => {
        return (
          <>
            <div
              key={element.id}
              className="flex justify-between flex-col px-10 py-12 rounded-[20px] max-w-[370px] 
               md:mr-10 sm:mr-5 mr-0 my-5 feature-card overflow-hidden"
            >
              <img
                className="w-[42px] h-[27px] object-contain"
                src={quotes}
                alt="quotes"
              />
              <p className="font-poppins font-normal text-[18px] leading-[32px] text-white my-10">
                {element.content}
              </p>
              <div className="flex flex-row">
                <img
                  className="w-[48px] h-[48px] rounded-full"
                  src={element.img}
                  alt="person1"
                />
                <div className="ml-3">
                  <h3
                    className="flex-1 font-poppins font-semibold xs:text-[20px] text-[12px] 
                   text-white w-full"
                  >
                    {element.name}
                  </h3>
                  <p
                    className="font-poppins font-normal text-gray-400 text-[16px] 
                   max-w-[470px] "
                  >
                    {element.title}
                  </p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default FeedbackCard;

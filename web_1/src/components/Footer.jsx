import React from "react";
import styles from "../style";
import { footerLinks, socialMedia } from "../constants";
import { logo } from "../assets";

const Footer = () => {
  return (
    <section className={`flex  sm:py-16 py-6 flex-col`}>
      <div className="flex md:flex-row flex-col justify-between gap-10 mb-8">
        <div className="flex-1 flex flex-col justify-start mr-10">
          <img
            className="w-[200px] h-[72px] object-contain"
            src={logo}
            alt="logo"
          />
          <p className="font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] max-w-[310px] mt-4">
            A new way to make payments easy, reliable and secure.
          </p>
        </div>
        <div className="flex-[1.5] w-full flex flex-row justify-between flex-wrap md:mt-0 mt-10">
          {footerLinks.map((element) => {
            return (
              <>
                <div className=" flex flex-col ss:my-0 my-4 w-[150px]">
                  <h4
                    className="font-poppins font-semibold text-white text-[18px] 
          leading-[30.8px] mt-5 max-w-[470px] mb-4"
                  >
                    {element.title}
                  </h4>

                  <div className="flex flex-col">
                    {element.links.map((link) => {
                      return (
                        <>
                          <p
                            className="font-poppins font-normal text-gray-400 text-[16px] 
          leading-[30.8px] mb-1 cursor-pointer text"
                          >
                            {link.name}
                          </p>
                        </>
                      );
                    })}
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
      <div className="w-full flex justify-between items-center md:flex-row flex-col pt-6 border-t-[1px] border-t-[#3f3e45]">
        <p className="font-poppins font-normal text-center text-[18px] leading-[27px] text-white">
          2022 HooBank. All Rights Reserved.
        </p>
        <div className="flex flex-row md:mt-0 mt-6">
          {socialMedia.map((element) => {
            return (
              <>
                <img
                  className="w-[21px] h-[21px] object-contain cursor-pointer mr-6"
                  key={element.id}
                  src={element.icon}
                  alt={element.id}
                />
              </>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Footer;

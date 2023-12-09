import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => {
  return (
    <section
      id="Home"
      className={`flex md:flex-row flex-col ${styles.paddingY}`}
    >
      <div
        className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6 `}
      >
        <div
          className={`flex flex-row items-center py-[6px] 
          px-4 bg-discount-gradient rounded-[10px] mb-2 `}
        >
          <img src={discount} alt="discount" className="w-[32px] h-[32px] " />
          <p className={`${styles.paragraph}`}>
            <span className="text-white">20% </span>Discount For{" "}
            <span className="text-white">1 Month </span> Account
          </p>
        </div>
        <div className="flex flex-row justify between items-center w-full ">
          <h1
            className={`flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] 
            text-white ss:leading-[100px] leading-[75px]`}
          >
            The Next <br className="sm:block hidden" />
            <span className="text-gradient">Generation</span>{" "}
          </h1>
          <div className=" ss:flex hidden md:mr-4 mr-0 transition-transform duration-500 ease-in-out transform hover:-translate-y-1">
            <GetStarted />
          </div>
        </div>

        <h1
          className="flex font-poppins font-semibold ss:text-[68px] text-[52px] 
            text-white ss:leading-[100px] leading-[75px]"
        >
          Payment Method.
        </h1>

        <p className="font-poppins font-normal text-gray-400 text-[18px] leading-[30.8px] max-w-[470px] mt-5">
          Our team of experts use a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className=" relative flex flex-1 justify-center items-center md:my-0 my-10">
        <img src={robot} alt="" className="z-[3] relative w-full h-full" />
        <div className="absolute pink__gradient z-[0] top-0 w-[40%] h-[35%]"></div>
        <div className="absolute white__gradient z-[1] bottom-40 w-[80%] h-[80%] rounded-full"></div>
        <div className="absolute blue__gradient z-[0] right-20 bottom-20 w-[50%] h-[50%]"></div>
      </div>
      <div className={`ss:hidden flex justify-center items-center`}>
        <GetStarted />
      </div>
    </section>
  );
};

export default Hero;

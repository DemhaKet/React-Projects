import React from "react";
import styles from "../style";

const Button = () => {
  return (
    <button
      className={`font-poppins bg-blue-gradient px-6 py-4 rounded-lg text-lg font-medium sm:mt-10 sm-0 
      transition-transform duration-500 ease-in-out transform hover:-translate-y-1`}
    >
      Get Started
    </button>
  );
};

export default Button;

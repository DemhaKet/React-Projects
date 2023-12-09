import React from "react";
import { airbnb, binance, coinbase, dropbox } from "../assets";
import styles from "../style";
import { clients } from "../constants";

const Clients = () => {
  return (
    <section className={`flex flex-row ${styles.paddingY}`}>
      <div className="flex flex-wrap justify-center items-center w-full">
        {clients.map((element) => {
          return (
            <>
              <div
                key={element.id}
                className="flex-1 flex justify-center items-center sm:min-w-[192px] min-w-[120px] my-2"
              >
                <img
                  className="sm:w-[192px] w-[100px] object-contain"
                  src={element.logo}
                  alt={element.id}
                />
              </div>
            </>
          );
        })}
      </div>
    </section>
  );
};

export default Clients;

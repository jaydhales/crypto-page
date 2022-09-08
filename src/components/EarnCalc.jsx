import React from "react";

const EarnCalc = () => {
  return (
    <section className="layout lg:flex-col lg:max-w-full z-10">
      <div className="text-center max-w-[650px] mx-auto content ">
        <h2>Check how much you can earn</h2>
        <p>
          Let’s check your hash rate to see how much you will earn today,
          Exercitation veniam consequat sunt nostrud amet.
        </p>
      </div>

      <div className="pb-12 w-full max-w-[950px] mt-16 shadow-2xl">
        <div className="bg-[#FBFCFE] flex justify-between items-center gap-4 text-primary rounded-t-2xl py-12 px-12 border-b-2 flex-wrap">
          <input type="text" placeholder="Enter your hash rate" />
          <input type="number" placeholder="TH/s" className="w-[100px]" />

          <a href="#" className="blue-btn text-light m-auto sm:m-0">
            Calculate
          </a>
        </div>

        <div className="text-primary bg-light pt-12 px-12 ">
          <p className="text-accent">ESTIMATED 24 HOUR REVENUE:</p>
          <h3 className="font-bold pt-4 pb-1">
            0.055 130 59 ETH <span className="text-accent">($1275)</span>
          </h3>
          <p>
            Revenue will change based on mining difficulty and Ethereum price.
          </p>
        </div>
      </div>
    </section>
  );
};

export default EarnCalc;

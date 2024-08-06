import React from "react";
import img1 from "../assets/pngwing.com.png";

const HeroArea = () => {
  return (
    <>
      <div className="container-fluid w-full h-screen flex items-start md:items-center justify-center bg-steal px-2 ">
        <div className="flex flex-col md:flex-row justify-start md:justify-center md:items-center rounded-sm md:py-10 w-full max-w-screen-xl">
          <img
            src={img1}
            alt=""
            className="h-40 md:h-80 mb-4 md:mb-0 md:mr-4 object-contain"
          />
          <div className="flex flex-col items-center w-full md:w-auto px-4 md:px-0">
            <h2 className="text-secondary text-center text-2xl md:text-3xl font-bold mb-4">
              Enter the URL to Shorten!
            </h2>
            <div className="flex flex-col justify-center md:flex-row items-center w-full md:w-[40rem]">
              <input
                type="text"
                className="rounded-3xl sm:rounded-none placeholder:text-white bg-green-900 opacity-80 md:rounded-l-xl shadow-2xl border border-green-900 w-full md:w-[25rem] py-3 px-4 mb-2 md:mb-0"
                placeholder="Paste a link to shorten it"
              />
              <button className="bg-sorange rounded-3xl sm:rounded-none md:rounded-r-xl text-white px-6 py-2 text-lg border-orange-400 border-opacity-10 border-2 font-semibold hover:bg-orange-600 transition-colors">
                SHORTEN
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroArea;

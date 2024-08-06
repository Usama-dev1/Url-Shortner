import React from "react";
import img1 from "../assets/pngwing.com.png";

const HeroArea = () => {
  return (
    <>
      <div className="container-fluid w-fullflex flex-col md:flex-row items-start justify-center bg-steal px-4 py-2">
        <div className="flex flex-col md:flex-row justify-center md:items-center rounded-sm md:py-10 w-full max-w-screen-xl">
          <img
            src={img1}
            alt=""
            className="h-32 md:h-64 mb-4 md:mb-0 md:mr-4 object-contain"
          />
          <div className="flex flex-col items-center w-full md:w-auto px-4 md:px-0">
            <h2 className="text-secondary text-center text-xl md:text-2xl font-bold mb-4">
              Enter the URL to Shorten!
            </h2>
            <div className="flex flex-col md:flex-row items-center w-full md:w-[40rem]">
              <input
                type="text"
                className="rounded-2xl sm:rounded-none md:rounded-l-xl placeholder:text-white bg-green-900 opacity-80 shadow-2xl border border-green-900 w-full md:w-[25rem] py-4 px-4 mb-2 md:mb-0"
                placeholder="Paste a link to shorten it"
              />
              <button className="bg-sorange sm:rounded-none rounded-2xl md:rounded-r-xl text-white px-6 py-4 text-lg font-semibold hover:bg-orange-600 transition-colors">
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

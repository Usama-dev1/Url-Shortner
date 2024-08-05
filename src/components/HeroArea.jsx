import React from "react";

const HeroArea = () => {
  return (
    <>
      <div className="container-fluid w-full h-full">
        <div className="flex flex-col bg-steal py-12 md:py-20 items-center">
          <h2 className="text-secondary text-center text-3xl font-light md:text-3xl mb-6">
            Enter the URL to Shorten
          </h2>
          <div className="flex flex-col md:flex-row justify-center items-center w-full md:w-auto">
            <div className="flex flex-row w-full md:w-[40rem]">
              <input
                type="text"
                className="shadow-innder border border-gray-300 rounded-l-md w-full py-3 px-4"
                placeholder="Paste your URL here"
              />
              <button className="bg-sorange text-white px-6 py-3 rounded-r-md text-lg font-semibold hover:bg-orange-600 transition-colors">
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

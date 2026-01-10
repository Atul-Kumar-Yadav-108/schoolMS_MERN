import React from "react";

const LandingPage = () => {
  return (
    <div className="flex relative">
      <div className="left w-[60%] bg-cyan-500  md:h-150 "></div>
      <div className="right w-[40%] md:h-150 bg-cyan-700">
        <div className="caption h-45 w-45 absolute left-[54%] top-[25%] bg-amber-400 rounded-full cursor-pointer">
          <h2 className="relative bg-red-600 2 py-1 text-white text-2xl rounded-t-4xl top-12 flex justify-center font-bold">
            Enroll
          </h2>
          <h2 className="relative bg-fuchsia-800 2 py-1 text-white text-xl rounded-b-4xl top-12 flex justify-center">
            Now
          </h2>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;

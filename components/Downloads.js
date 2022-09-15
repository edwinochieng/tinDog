import React from "react";
import { FaApple, FaGooglePlay } from "react-icons/fa";

function Downloads() {
  return (
    <div className="bg-rose-600 py-[7%] px-[10%] flex flex-col items-center justify-center">
      <div className="text-white">
        <h2 className="font-bold text-4xl text-center">
          Find The Love Of Your Dog's Life Today.
        </h2>
      </div>

      <div className="flex pt-16 pb-8 text-white">
        <button className="bg-black/90 w-40 h-12 mr-3 rounded-md flex items-center justify-center ">
          {" "}
          <i className="mr-1">
            <FaApple />{" "}
          </i>
          Download
        </button>
        <button className="border w-40 h-12 mr-3 rounded-md flex items-center justify-center ">
          {" "}
          <i className="mr-1">
            <FaGooglePlay />
          </i>
          Download
        </button>
      </div>
    </div>
  );
}

export default Downloads;

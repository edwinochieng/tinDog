import React from "react";
import Image from "next/image";
import {FaApple,FaGooglePlay} from 'react-icons/fa'

function Hero() {

  return (
    <div className=" bg-rose-600 h-max px-[15%] pt-[15%] grid grid-cols-1 lg:grid-cols-2 content-center justify-items-center">
      <div className="text-white">
        <h1 className="font-bold text-6xl">
          Meet new and interesting dogs nearby
        </h1>
        <div className="flex pt-16 pb-8">
        <button className="bg-black/90 w-40 h-12 mr-3 rounded-md flex items-center justify-center "> <i className="mr-1"><FaApple /> </i>Download</button>
        <button className="border w-40 h-12 mr-3 rounded-md flex items-center justify-center "> <i className="mr-1"><FaGooglePlay/></i>Download</button>
        </div>
        
      </div>

      <div className= "rotate-0 xl:rotate-[25deg]">
        <Image
          src="/images/iphone6.png"
          width="400"
          height="700"
          alt="iphone"
          className=""
        />
      </div>
    </div>
  );
}

export default Hero;

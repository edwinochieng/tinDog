import React from "react";
import Image from "next/image";
import {FaApple,FaGooglePlay} from 'react-icons/fa'

function Hero() {
  return (
    <div className="bg-rose-600 h-screen px-[15%] grid grid-cols-1 md:grid-cols-2">
      <div className="text-white">
        <h1 className="font-bold text-5xl">
          Meet new and interesting dogs nearby
        </h1>
        <div className="flex pt-16">
        <button className="bg-black/90 w-40 h-12 mr-2 rounded-md flex items-center justify-center "> <i className="mr-1"><FaApple /> </i>Download</button>
        <button className="border w-40 h-12 ml-2 rounded-md flex items-center justify-center "> <i className="mr-1"><FaGooglePlay/></i>Download</button>
        </div>
        
      </div>

      <div className= "rotate-0 md:rotate-[25deg]">
        <Image
          src="/images/iphone6.png"
          width="400"
          height="600"
          alt="iphone"
          className=""
        />
      </div>
    </div>
  );
}

export default Hero;

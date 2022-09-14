import React from "react";
import {FaBullseye,FaHeart,FaCheckCircle,} from 'react-icons/fa'

function Features() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 px-[15%] py-[7%]">
      <div className="flex flex-col items-center justify-center text-center p-10">
      <i className="mb-1"><FaCheckCircle size={60} color = '#ef8172'/></i>
        <h3 className="font-bold text-3xl pb-1">Easy to use.</h3>
        <p className="text-gray-600">So easy to use, even your dog could do it.</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-10">
      <i className="mb-1"><FaBullseye size = {60} color = '#ef8172' /></i>
        <h3 className="font-bold text-3xl pb-1">Elite Clientele.</h3>
        <p className="text-gray-600">We have all the dogs, the greatest dogs.</p>
      </div>
      <div className="flex flex-col items-center justify-center text-center p-10">
      <i className="mb-1"><FaHeart size = {60} color = '#ef8172'/></i>
        <h3 className="font-bold text-3xl pb-1">Guaranteed work.</h3>
        <p className="text-gray-600">Find the love of your dog`s life or your money back.</p>
      </div>
    </div>
  );
}

export default Features;

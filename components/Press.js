import React from "react";
import Image from "next/image";

function Press() {
  return (
    <div className="bg-[#ef8172] flex items-center justify-center pb-[7%]">
      <div className="mx-5">
        <Image
          src="/images/TechCrunch.png"
          alt="tech crunch"
          height="50"
          width="200"
          
        />
      </div>
      <div className="mx-5">
        <Image
          src="/images/tnw.png"
          alt="TNW"
          height="70"
          width="200"
          
        />
      </div>
      <div className="mx-5">
        {" "}
        <Image
          src="/images/bizinsider.png"
          alt="business insider"
          height="50"
          width="200"
          
        />
      </div>
      <div className="mx-5">
        <Image
          src="/images/mashable.png"
          alt="mashable"
          height="50"
          width="200"
          
        />
      </div>
    </div>
  );
}

export default Press;

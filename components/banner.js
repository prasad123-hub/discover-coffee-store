import Image from "next/image";
import React from "react";

function Banner(props) {
  return (
    <div className="flex justify-between items-center">
      <div>
        <h1 className="text-[52px] font-bold mt-20">
          <span className="text-blue-600">Coffee</span>
          <span className="text-black"> Connoisseur</span>
        </h1>
        <p className="text-[22px] mt-4 font-semibold">
          Discover Your local coffee Shops !
        </p>
        <button
          className="bg-blue-600 p-4 rounded-lg text-white font-semibold mt-8"
          onClick={props.handleOnClick}
        >
          {props.buttonText}
        </button>
      </div>
      <div className="w-[500px] h-[400px]">
        <Image
          src="/static/location.svg"
          height={400}
          width={500}
          objectFit="contain"
          alt="location-banner"
        />
      </div>
    </div>
  );
}

export default Banner;

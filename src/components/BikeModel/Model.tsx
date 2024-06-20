import React from "react";
import Image from "next/image";
import { productImages } from "../../app/constants/imagePaths";
import { BarlowCon200, Barl } from "../../app/Fonts/fonts";

interface ModelShape {
  title: string;
  image: string;
}

const Model = ({ title, image }: ModelShape) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-5 py-8">
      <div className="col-span-2 flex flex-col space-y-4 md:space-y-8 justify-center relative text-center md:text-left md:left-32">
        <span
          className={`${BarlowCon200.className} tracking-widest flex flex-col uppercase text-4xl md:text-7xl`}
        >
          <span className="">
            THE <span className="text-bikeRedText">{title}</span>{" "}
          </span>
          <span className="">model</span>
        </span>
        <div
          className={`${Barl.className} uppercase text-sm flex flex-col space-y-1 cursor-pointer`}
        >
          <span className="font-semibold">view collection</span>
          <span className="border border-1 w-28 ml-40 md:ml-3 border-black"></span>
        </div>
      </div>
      <div className="col-span-3 h-[22em] mt-10 md:mt-0 md:h-[48em] relative">
        <div className="flex md:justify-end">
          <Image src={image} alt="Sphynx" fill />
        </div>
      </div>
    </div>
  );
};

export default Model;

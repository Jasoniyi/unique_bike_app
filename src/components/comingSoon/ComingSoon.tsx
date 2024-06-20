import React from "react";
import Image from "next/image";
import { productImages } from "../../app/constants/imagePaths";
import { BarlowCon200 } from "../../app/Fonts/fonts";

const ComingSoon = () => {
  return (
    // <div className="">
    //   <div className="flex justify-center z-10">
    //     <span className="text-bikeRedText">coming soon!</span>
    //   </div>
    //   <div className="h-[40em] w-[30em] z-0">
    //     <Image
    //       src={productImages.eco_friendly}
    //       alt="coming soon"
    //       className=""
    //       fill
    //     />
    //   </div>
    // </div>
    <div className={`relative ${BarlowCon200.className}`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col text-center space-y-2 md:space-y-4">
        <span className="text-bikeRedText uppercase text-xl md:text-6xl tracking-widest font-black">
          coming soon!
        </span>
        <span className="uppercase text-white text-xl md:text-6xl tracking-widest">
          eco friendly e-bike
        </span>
      </div>
      <div className="h-[13em] md:h-[40em] z-0">
        <Image
          src={productImages.eco_friendly}
          alt="coming soon"
          className=""
          fill
        />
      </div>
    </div>
  );
};

export default ComingSoon;

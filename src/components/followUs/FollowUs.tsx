import React from "react";
import Btn from "../bikeBtn/Btn";
import Image from "next/image";
import { productImages } from "../../app/constants/imagePaths";

const FollowUs = () => {
  return (
    <div className="mt-48">
      <div className="px-[8em]">
        <div className="flex flex-col items-center text-white">
          <Btn
            title="follow us @uniquebikes"
            color="bg-bikeRed px-8 font-bold"
          />
          <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-x-0 text-emerald-400 justify-items-center justify-content-space-evenly w-full">
            <div className="flex flex-col space-y-8">
              <div className="h-[13em] w-[21em] relative">
                <Image src={productImages.left_top} alt="" fill />
              </div>
              <div className="h-[13em] w-[21em] relative">
                <Image src={productImages.left_btm} alt="" fill />
              </div>
            </div>
            <div className="w-[21em] relative hidden md:flex">
              <Image src={productImages.middle} alt="" fill />
            </div>
            <div className="hidden md:flex flex-col space-y-8">
              <div className="h-[13em] w-[21em] relative">
                <Image src={productImages.right_top} alt="" fill />
              </div>
              <div className="h-[13em] w-[21em] relative">
                <Image src={productImages.right_btm} alt="" fill />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;

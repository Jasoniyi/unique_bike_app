"use client";
import React, { useState } from "react";
import Btn from "../bikeBtn/Btn";
import Image from "next/image";
import { productImages } from "../../app/constants/imagePaths";

const FollowUs = () => {
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleImageLoad = (imageKey: string) => {
    setLoadedImages((prev) => ({
      ...prev,
      [imageKey]: true,
    }));
  };

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
                {!loadedImages["left_top"] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
                )}
                <Image
                  src={productImages.left_top}
                  alt="Left top image"
                  fill
                  className={`transition-opacity duration-300 ${
                    loadedImages["left_top"] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => handleImageLoad("left_top")}
                />
              </div>
              <div className="h-[13em] w-[21em] relative">
                {!loadedImages["left_btm"] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
                )}
                <Image
                  src={productImages.left_btm}
                  alt="Left bottom image"
                  fill
                  className={`transition-opacity duration-300 ${
                    loadedImages["left_btm"] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => handleImageLoad("left_btm")}
                />
              </div>
            </div>
            <div className="w-[21em] relative hidden md:flex">
              {!loadedImages["middle"] && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
              )}
              <Image
                src={productImages.middle}
                alt="Middle image"
                fill
                className={`transition-opacity duration-300 ${
                  loadedImages["middle"] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad("middle")}
              />
            </div>
            <div className="hidden md:flex flex-col space-y-8">
              <div className="h-[13em] w-[21em] relative">
                {!loadedImages["right_top"] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
                )}
                <Image
                  src={productImages.right_top}
                  alt="Right top image"
                  fill
                  className={`transition-opacity duration-300 ${
                    loadedImages["right_top"] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => handleImageLoad("right_top")}
                />
              </div>
              <div className="h-[13em] w-[21em] relative">
                {!loadedImages["right_btm"] && (
                  <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
                )}
                <Image
                  src={productImages.right_btm}
                  alt="Right bottom image"
                  fill
                  className={`transition-opacity duration-300 ${
                    loadedImages["right_btm"] ? "opacity-100" : "opacity-0"
                  }`}
                  onLoad={() => handleImageLoad("right_btm")}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FollowUs;

"use client";
import React, { useState, useEffect } from "react";
import { BarlowCon600, Rob } from "../../app/Fonts/fonts";
import Link from "next/link";
import Btn from "../bikeBtn/Btn";

const Banner = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Simulate background image load
    const img = new Image();
    img.src = "../../../public/banner.svg"; // Replace with the actual image path
    img.onload = () => setIsLoaded(true);
  }, []);

  return (
    <div className="relative">
      {/* Black shadow overlay */}
      <div
        className={`absolute inset-0 bg-black transition-opacity duration-700 ${
          isLoaded ? "opacity-0" : "opacity-100"
        }`}
      ></div>

      {/* Background image container */}
      <div className="bg-home_banner bg-cover h-[43em] md:w-screen md:h-screen relative">
        <div
          className={`${BarlowCon600.className} font-extrabold text-white text-6xl uppercase tracking-widest relative md:left-[14em] top-40 md:top-80`}
        >
          <div className="flex flex-col md:space-y-4 text-center md:items-start">
            <span>
              be <span className="text-bikeRedText">unique</span>
            </span>
            <span>
              <span className="text-bikeRedText">ride</span> with style
            </span>
            <div
              className={`${Rob.className} text-base w-32 flex justify-center relative left-32 md:left-0 mt-6`}
            >
              <Link href="/shop">
                <Btn title="shop now" outline={true} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

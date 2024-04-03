import React from "react";
import { Rob } from "../../Fonts/fonts";
import Image from "next/image";
import Logo from "../../../../public/logo.svg";

const Footer = () => {
  return (
    <div
      className={`${Rob.className} bg-black py-20 px-12 md:px-40 text-white`}
    >
      <div className="grid grid-cols-1 gap-y-16 md:grid-cols-3">
        <div className="md:col-span-1 h-4">
          <div className="flex flex-col md:space-y-32">
            <Image src={Logo} alt="logo" />
            <span className="hidden text-xs">©Copyright Unique bikes</span>
          </div>
        </div>
        <div className="md:col-span-2">
          <div className="flex flex-col space-y-8 md:space-y-0 md:flex-row md:justify-between">
            <div className="">
              <ul className="uppercase ">
                <span className="font-extrabold">faqs</span>
                <li className="text-sm py-2">TERMS & CONDITIONS</li>
                <li className="text-sm py-2">PRIVACY SUPPORT</li>
                <li className="text-sm py-2">HELP</li>
              </ul>
            </div>
            <div className="">
              <ul className="uppercase ">
                <span className="font-extrabold">SUPPORT</span>
                <li className="text-sm py-2">Assembly Guides</li>
                <li className="text-sm py-2">Payment</li>
                <li className="text-sm py-2">Shipping & Delivery</li>
                <li className="text-sm py-2">Returns & Refunds</li>
              </ul>
            </div>
            <div className="">
              <ul className="uppercase ">
                <span className="font-black">SERVICE@UNIQUEBIKES.COM</span>
                <li className="text-sm py-2 capitalize">
                  45 Fairground Rd, New York, United States
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

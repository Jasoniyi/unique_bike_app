import React from "react";
import { Rob } from "../../Fonts/fonts";
import Logo from "../../../../public/logo.svg";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";

import MobileNavbar from "./MobileNavbar";

const Navbar = () => {
  return (
    <>
      <div className={`${Rob.className} text-sm font-bold hidden md:block`}>
        <div className="bg-bikeBlack text-white py-4 px-16">
          <div className="flex justify-between items-center">
            <div className="">
              <Image src={Logo} alt="logo" />
            </div>
            <div className="">
              <ul className="flex space-x-12 uppercase">
                <li>shop</li>
                <li>bikes</li>
                <li>about us</li>
                <li>contact us</li>
              </ul>
            </div>
            <div className="flex space-x-8">
              <ShoppingCartIcon />
              <AccountCircleOutlinedIcon />
            </div>
          </div>
        </div>
      </div>

      {/* Mobile View */}
      <div className="">
        <MobileNavbar />
      </div>
    </>
  );
};

export default Navbar;

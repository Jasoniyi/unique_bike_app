"use client";
import React, { useState } from "react";
import { Rob } from "@/app/Fonts/fonts";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import MenuOpenOutlinedIcon from "@mui/icons-material/MenuOpenOutlined";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Link from "next/link";

type NavLink = {
  title: string;
  link: string;
};

const MobileNavbar = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(!open);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const navLinks: NavLink[] = [
    {
      title: "shop",
      link: "/shop",
    },
    {
      title: "bikes",
      link: "/bikes",
    },
    {
      title: "about us",
      link: "/about",
    },
    {
      title: "contact",
      link: "/contact",
    },
  ];

  return (
    <div className={`${Rob.className} text-sm font-bold md:hidden`}>
      <div className="bg-bikeBlack flex justify-between items-center py-4 px-8 text-white">
        <div className="">
          <Image src={Logo} alt="logo" />
        </div>
        <div className="">
          {!open ? (
            <MenuOutlinedIcon fontSize="large" onClick={handleOpen} />
          ) : (
            <MenuOpenOutlinedIcon sx={{ fontSize: 40 }} onClick={handleClose} />
          )}
        </div>
      </div>
      {open ? (
        <div className="bg-black text-white h-screen px-8 py-16">
          <ul className="flex flex-col space-y-12 uppercase text-base">
            {/* <li>Shop</li>
            <li>bikes</li>
            <li>about us</li>
            <li>contact us</li> */}
            {navLinks.map(({ link, title }, i) => (
              <Link key={i} href={link}>
                <li>{title}</li>
              </Link>
            ))}
          </ul>
          <div className="mt-16 flex space-x-10">
            <ShoppingCartIcon sx={{ fontSize: 35 }} />
            <AccountCircleOutlinedIcon sx={{ fontSize: 35 }} />
          </div>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNavbar;

"use client";
import React, { useState } from "react";
import { Rob } from "../../app/Fonts/fonts";
import Logo from "../../../public/logo.svg";
import Image from "next/image";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";
import MobileNavbar from "./MobileNavbar";
import Cart from "../Cart/Cart";
import Badge, { BadgeProps } from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import { useCartStore } from "../../store/useCartStore";

type NavLink = {
  title: string;
  link: string;
};

const StyledBadge = styled(Badge)<BadgeProps>(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `1px solid ${theme.palette.background.paper}`,
    padding: "0 4px",
  },
}));

const WhiteShoppingCartIcon = styled(ShoppingCartIcon)(({ theme }) => ({
  color: theme.palette.common.white,
}));

const Navbar = () => {
  const numberOfItems = useCartStore((state) => state.totalItems);

  const [openDrawer, setOpenDrawer] = useState(false);
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

  const handleDrawer = () => {
    setOpenDrawer(!openDrawer);
    console.log("Open drawer");
  };

  return (
    <>
      <div className={`${Rob.className} text-sm font-bold hidden md:block`}>
        <div className="bg-bikeBlack text-white py-4 px-16">
          <div className="flex justify-between items-center">
            <div className="">
              <Link href="/">
                <Image src={Logo} alt="logo" />
              </Link>
            </div>
            <div className="">
              <ul className="flex space-x-12 uppercase cursor-pointer">
                {navLinks.map(({ link, title }, i) => (
                  <Link key={`nav-${i}`} href={link}>
                    <li>{title}</li>
                  </Link>
                ))}
              </ul>
            </div>
            <div className="flex space-x-8 items-center">
              <div className="cursor-pointer" onClick={handleDrawer}>
                {/* <ShoppingCartIcon /> */}
                <IconButton aria-label="cart">
                  <StyledBadge badgeContent={numberOfItems} color="error">
                    <WhiteShoppingCartIcon />
                  </StyledBadge>
                </IconButton>
              </div>

              <Link href={"/login"}>
                <AccountCircleOutlinedIcon />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Drawer */}
      <Drawer anchor="right" open={openDrawer} onClose={handleDrawer}>
        <div style={{ width: 350 }} role="presentation">
          <div className="p-4 flex justify-between items-center">
            <h2>Your Shopping Cart</h2>
            <IconButton onClick={handleDrawer}>
              <CloseIcon />
            </IconButton>
          </div>
          {/* Add your cart items or content here */}
          <Cart />
        </div>
      </Drawer>

      {/* Mobile View */}
      <div className="">
        <MobileNavbar />
      </div>
    </>
  );
};

export default Navbar;

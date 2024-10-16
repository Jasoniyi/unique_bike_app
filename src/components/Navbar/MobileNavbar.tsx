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
import { IconButton } from "@mui/material";
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

const MobileNavbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const numberOfItems = useCartStore((state) => state.totalItems);

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
          <Link href="/" onClick={handleClose}>
            <Image src={Logo} alt="logo" />
          </Link>
        </div>
        <div className="flex items-center space-x-5">
          <div className="flex space-x-5">
            <IconButton aria-label="cart">
              <StyledBadge badgeContent={numberOfItems} color="error">
                <WhiteShoppingCartIcon />
              </StyledBadge>
            </IconButton>
            <div className="mt-1">
              <AccountCircleOutlinedIcon sx={{ fontSize: 30 }} />
            </div>
          </div>
          <div className="">
            {!open ? (
              <MenuOutlinedIcon fontSize="large" onClick={handleOpen} />
            ) : (
              <MenuOpenOutlinedIcon
                sx={{ fontSize: 40 }}
                onClick={handleClose}
              />
            )}
          </div>
        </div>
      </div>
      {open ? (
        <div className="bg-black text-white h-screen px-8 py-16">
          <ul className="flex flex-col space-y-12 uppercase text-base">
            {navLinks.map(({ link, title }, i) => (
              <Link key={i} href={link} onClick={handleClose}>
                <li>{title}</li>
              </Link>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default MobileNavbar;

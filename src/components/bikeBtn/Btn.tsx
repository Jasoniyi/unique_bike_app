import React from "react";
import { BarlowCon200 } from "@/app/Fonts/fonts";

interface BtnShape {
  title: string;
  outline?: boolean;
  color?: string;
  textColor?: string;
  classname?: string;
  onClick?: () => void;
}

const Btn = ({
  title,
  outline,
  color,
  textColor,
  classname,
  onClick,
}: BtnShape) => {
  return (
    <div
      className={`${BarlowCon200.className} uppercase ${
        outline ? "outline outline-1" : null
      }  p-2 ${color} text-xs md:text-sm ${textColor} ${classname} cursor-pointer  `}
      onClick={onClick}
    >
      {title}
    </div>
  );
};

export default Btn;

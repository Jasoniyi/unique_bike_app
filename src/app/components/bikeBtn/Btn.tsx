import React from "react";
import { BarlowCon200 } from "@/app/Fonts/fonts";

interface BtnShape {
  title: string;
  outline?: boolean;
}

const Btn = ({ title, outline }: BtnShape) => {
  return (
    <div
      className={`${BarlowCon200.className} uppercase ${
        outline ? "outline outline-1" : null
      }  p-2  `}
    >
      {title}
    </div>
  );
};

export default Btn;

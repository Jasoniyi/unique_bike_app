import React from "react";
import { BarlowCon600 } from "../Fonts/fonts";
import { productImages } from "../constants/imagePaths";
import Image from "next/image";
import jersy from "../../../public/jersey.svg";

interface ShopShape {
  name: string;
  image: string;
}

const page = () => {
  const shopItems: ShopShape[] = [
    {
      name: "jersey",
      image: `${productImages.jersey}`,
      //   image: `${jersy}`,
    },
    {
      name: "shoe",
      image: `${productImages.shoe}`,
    },
    {
      name: "all accessories",
      image: `${productImages.all_accessories}`,
    },
    {
      name: "helmet",
      image: `${productImages.helmet}`,
    },
    {
      name: "spare part",
      image: `${productImages.spare_part}`,
    },
  ];
  return (
    <div className={`${BarlowCon600.className} pb-10`}>
      <div className="flex justify-center py-20">
        <h1 className={` uppercase text-4xl`}>shop</h1>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-8 py-8 px-16">
        {shopItems.map(({ name, image }, i) => (
          <div
            key={`shop-${i}`}
            className={`h-[17em] bg-red-100 py-8 flex items-center justify-center space-x-20 ${
              i === 2 ? "md:col-span-2" : ""
            }`}
          >
            <span className="uppercase text-3xl">{name}</span>
            <div className="w-[7em] md:w-[16em] h-[7em] md:h-[10em] relative pr-4">
              <Image src={image} alt={name} fill />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;

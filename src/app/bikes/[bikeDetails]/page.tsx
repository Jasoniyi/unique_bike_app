"use client";

import React, { useState } from "react";
import { useParams } from "next/navigation";
import { productData } from "../../../data/data"; // Import your product data
import { Barl } from "../../Fonts/fonts";
import Btn from "@/components/bikeBtn/Btn";
import { useCartStore } from "../../../store/useCartStore";
import Image from "next/image";
import { productImages } from "../../constants/imagePaths";
import { BarlowCon600 } from "../../Fonts/fonts";
import FollowUs from "@/components/followUs/FollowUs";

const BikeDetails = () => {
  const addToCart = useCartStore((state) => state.addToCart);
  const params = useParams();
  console.log(params, "params");
  const productId = params.bikeDetails; // Using parseInt to get your number

  console.log(productId, "params");

  // Find the product from productData based on productId
  const product = productData.find((product) => product.id === productId);

  // If product is not found, you can handle it accordingly
  if (!product) {
    return <p>Product not found</p>;
  }

  // bike parts
  const bikeParts = [
    {
      image: `${productImages.saddle}`,
      title: "saddle",
    },
    {
      image: `${productImages.crank_gear}`,
      title: "crank gear",
    },
    {
      image: `${productImages.frame}`,
      title: "frame",
    },
  ];

  const [activeTab, setActiveTab] = useState("description");

  return (
    <div className="overflow-x-hidden">
      <div className="bg-black h-[39em] grid md:grid-cols-4 grid-cols-1">
        <div className="md:col-span-3 relative">
          <div
            className={`${Barl.className} uppercase text-red-600 text-5xl md:text-9xl px-16 py-8`}
          >
            the <br /> {product.name}
          </div>
          <div className="absolute w-[15em] md:w-[40em] md:top-[21em] left-2/3 transform -translate-x-1/2 -translate-y-1/2 z-10">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-auto"
            />
          </div>
        </div>

        <div className="flex flex-col text-white items-center justify-center space-y-12 md:space-y-32">
          <div className="">
            <div className="flex flex-col space-y-4 md:space-y-8 items-center">
              <span className={`${Barl.className} uppercase text-2xl`}>
                size
              </span>
              <div className="flex space-x-8">
                {["small", "medium", "large"].map((item, i) => (
                  <Btn
                    title={item}
                    outline
                    classname="px-6 py-1 hover:bg-[#1E1E1E]"
                  />
                ))}
              </div>
            </div>
          </div>
          <div className="flex flex-col w-full px-16 text-xl space-y-6">
            <div className="flex justify-between">
              <span className="uppercase tracking-wider">price</span>
              <span className="">$ {product.price}</span>
            </div>
            <div className="flex justify-between">
              <span className="uppercase tracking-wider">weight</span>
              <span className="">{product.weight}</span>
            </div>
            <Btn
              title="add to cart"
              classname="bg-[#DD1212] text-center text-4xl"
              onClick={() => addToCart(product)}
            />
          </div>
        </div>
      </div>
      <div className={`${Barl.className} py-6 `}>
        <div className="flex flex-col items-center justify-center">
          <span className=" text-lg uppercase font-medium py-5">customize</span>
          <div className="border-t-[1px] border-slate-300 w-4/5 "></div>
        </div>

        <div className="py-10 flex flex-col md:flex-row justify-center space-y-16 md:space-y-0 md:space-x-24">
          {bikeParts.map((items, i) => (
            <div
              className="flex flex-col space-y-4 items-center"
              key={`bikeParts-${i}`}
            >
              <div className="relative w-40 h-40">
                <Image src={items.image} alt={items.title} fill />
              </div>
              <span className="uppercase">{items.title}</span>
            </div>
          ))}
        </div>
        <div className="px-16">
          <div
            className={`${BarlowCon600.className} flex space-x-9 uppercase text-xl tracking-wider `}
          >
            <span
              className={`cursor-pointer  ${
                activeTab === "description"
                  ? "font-bold border-b-2 border-red-500"
                  : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              description
            </span>
            <span
              className={`cursor-pointer  ${
                activeTab === "spec"
                  ? "font-bold border-b-2 border-red-500"
                  : ""
              }`}
              onClick={() => setActiveTab("spec")}
            >
              specs
            </span>
          </div>
          <div className="my-8">
            {activeTab === "description" ? (
              <p className="">{product.description}</p>
            ) : (
              <p className="">{product.spec}</p>
            )}
          </div>
        </div>
        <div className="">
          <FollowUs />
        </div>
      </div>
    </div>
  );
};

export default BikeDetails;

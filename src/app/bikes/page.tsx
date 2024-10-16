"use client";
import React, { useState } from "react";
import { Barl, BarlowCon200 } from "../Fonts/fonts";
import Btn from "../../components/bikeBtn/Btn";
import Image from "next/image";
import { productData } from "@/data/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BikesPage = () => {
  const router = useRouter();
  const [loadedImages, setLoadedImages] = useState<{ [key: string]: boolean }>(
    {}
  );

  const handleClick = (productId: string) => {
    router.push(`/bikes/${productId}`);
  };

  const handleImageLoad = (productId: string) => {
    setLoadedImages((prev) => ({
      ...prev,
      [productId]: true,
    }));
  };

  return (
    <div className="flex flex-col space-y-20">
      <div className="flex flex-col space-y-6 text-center pt-24 px-4">
        <h1
          className={`${BarlowCon200.className} text-5xl uppercase font-extralight tracking-widest`}
        >
          Sphynx collection
        </h1>
        <p className={`${Barl.className} text-2xl `}>
          Explore the full collection of our SPHYNX collection{" "}
        </p>
      </div>
      <div className="px-24 grid grid-cols-1 md:grid-cols-3 gap-x-8 gap-y-16 pb-20">
        {productData.map((product, i) => (
          <div
            className="py-4 flex flex-col space-y-4 justify-center items-center"
            key={`pdct-${i}`}
          >
            <div className="h-[11em] w-[18em] relative">
              {!loadedImages[product.id] && (
                <div className="absolute inset-0 bg-gray-200 animate-pulse rounded-lg" />
              )}
              <Image
                src={product.image}
                alt={product.name}
                fill
                className={`transition-opacity duration-300 ${
                  loadedImages[product.id] ? "opacity-100" : "opacity-0"
                }`}
                onLoad={() => handleImageLoad(product.id)}
              />
            </div>
            <span className="">{product.name}</span>
            <Btn
              title="view"
              outline={true}
              classname="px-8 tracking-widest"
              onClick={() => handleClick(product.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default BikesPage;

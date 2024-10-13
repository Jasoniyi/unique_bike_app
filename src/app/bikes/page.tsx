"use client";
import React from "react";
import { Barl, BarlowCon200 } from "../Fonts/fonts";
import Btn from "../../components/bikeBtn/Btn";
import Image from "next/image";
import { productData } from "@/data/data";
import Link from "next/link";
import { useRouter } from "next/navigation";

const BikesPage = () => {
  const router = useRouter();

  const handleClick = (productId: string) => {
    // console.log("Product ID:", productId);
    router.push(`/bikes/${productId}`);
  };

  return (
    <div className="flex flex-col space-y-20">
      <div className="flex flex-col space-y-6 text-center pt-24">
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
              <Image src={product.image} alt={product.name} fill />
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

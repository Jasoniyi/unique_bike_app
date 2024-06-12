import Image from "next/image";
import { BarlowCon600, Rob } from "./Fonts/fonts";
import Btn from "./components/bikeBtn/Btn";
import Model from "./components/BikeModel/Model";
import { productImages } from "./constants/imagePaths";
import Siamese from "./components/SiameseModel/Siamese";
import ComingSoon from "./components/comingSoon/ComingSoon";
import FollowUs from "./components/followUs/FollowUs";
import Footer from "./components/footer/Footer";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <div className="bg-home_banner bg-cover h-[43em] md:w-screen md:h-screen ">
        <div
          className={`${BarlowCon600.className} font-extrabold text-white text-6xl uppercase tracking-widest relative md:left-[14em] top-40 md:top-80`}
        >
          <div className="flex flex-col md:space-y-4 text-center md:items-start">
            <span className="">
              be <span className="text-bikeRedText">unique</span>{" "}
            </span>
            <span className="">
              {" "}
              <span className="text-bikeRedText">ride </span> with style
            </span>
            <div
              className={`${Rob.className} text-base w-32 flex justify-center relative left-32 md:left-0 mt-6`}
            >
              <Btn title="shop now" outline={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Model title="Sphynx" image={productImages.sphynx} />
      </div>
      <div className="">
        <Siamese />
      </div>
      <div className="">
        <Model title="bengal" image={productImages.bengal} />
      </div>
      <div className="relative">
        <ComingSoon />
      </div>
      <FollowUs />
    </main>
  );
}

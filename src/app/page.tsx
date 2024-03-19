import Image from "next/image";
import { BarlowCon600, Rob } from "./Fonts/fonts";
import Btn from "./components/bikeBtn/Btn";
import Model from "./components/BikeModel/Model";
import { Mode } from "@mui/icons-material";

export default function Home() {
  return (
    <main className="">
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
              className={`${Rob.className} text-base w-32 flex justify-center`}
            >
              <Btn title="shop now" outline={true} />
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <Model />
      </div>
    </main>
  );
}

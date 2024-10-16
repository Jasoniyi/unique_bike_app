import Model from "../components/BikeModel/Model";
import { productImages } from "./constants/imagePaths";
import Siamese from "../components/SiameseModel/Siamese";
import ComingSoon from "../components/comingSoon/ComingSoon";
import FollowUs from "../components/followUs/FollowUs";
import Banner from "@/components/Banner/Banner";

export default function Home() {
  return (
    <main className="overflow-x-hidden">
      <Banner />
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

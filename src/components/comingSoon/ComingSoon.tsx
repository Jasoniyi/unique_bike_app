"use client";
import React, { useState } from "react";
import Image from "next/image";
import { productImages } from "../../app/constants/imagePaths";
import { BarlowCon200 } from "../../app/Fonts/fonts";

//   return (
//     <div className={`relative ${BarlowCon200.className}`}>
//       <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col text-center space-y-2 md:space-y-4">
//         <span className="text-bikeRedText uppercase text-xl md:text-6xl tracking-widest font-black">
//           coming soon!
//         </span>
//         <span className="uppercase text-white text-xl md:text-6xl tracking-widest">
//           eco friendly e-bike
//         </span>
//       </div>
//       <div className="h-[13em] md:h-[40em] z-0">
//         <Image
//           src={productImages.eco_friendly}
//           alt="coming soon"
//           className=""
//           fill
//         />
//       </div>
//     </div>
//   );
// };

const ComingSoon = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className={`relative ${BarlowCon200.className}`}>
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 flex flex-col text-center space-y-2 md:space-y-4">
        <span className="text-bikeRedText uppercase text-xl md:text-6xl tracking-widest font-black">
          coming soon!
        </span>
        <span className="uppercase text-white text-xl md:text-6xl tracking-widest">
          eco friendly e-bike
        </span>
      </div>

      {/* Image container with skeleton */}
      <div className="h-[13em] md:h-[40em] z-0 relative">
        {isLoading && (
          <div className="absolute inset-0 bg-gray-300 animate-pulse"></div>
        )}
        <Image
          src={productImages.eco_friendly}
          alt="coming soon"
          className="object-cover"
          fill
          onLoadingComplete={() => setIsLoading(false)}
        />
      </div>
    </div>
  );
};

export default ComingSoon;

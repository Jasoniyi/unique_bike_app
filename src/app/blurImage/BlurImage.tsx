import React, { useState } from "react";
import Image from "next/image";

interface BlurImageProps {
  src: string;
  alt: string;
  fill?: boolean;
}

const BlurImage: React.FC<BlurImageProps> = ({ src, alt, fill }) => {
  const [isLoading, setLoading] = useState(true);

  return (
    <div className={`relative ${fill ? "w-full h-full" : ""}`}>
      <Image
        src={src}
        alt={alt}
        fill={fill}
        className={`
          duration-700 ease-in-out
          ${
            isLoading
              ? "grayscale blur-2xl scale-110"
              : "grayscale-0 blur-0 scale-100"
          }
        `}
        onLoadingComplete={() => setLoading(false)}
      />
    </div>
  );
};

export default BlurImage;

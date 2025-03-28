import * as React from "react";
import Image from "next/image";

type HeroProps = {
  imageSrc: string; // URL of the hero image
  imageAlt: string; // Alt text for the image
  title?: string; // Optional title
  description?: string; // Optional description
};

const Hero: React.FC<HeroProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
}) => (
  <div className="relative bg-black text-white w-screen h-[calc(100vh-64px)] overflow-hidden">
    {/* Hero Image */}
    <div className="absolute top-0 left-0 w-full h-full">
      <Image
        src={imageSrc}
        alt={imageAlt}
        layout="fill"
        objectFit="cover"
        className="opacity-80"
      />
    </div>

    {/* Overlay Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
      {title && (
        <h1 className="text-3xl md:text-5xl font-bold mb-4">{title}</h1>
      )}
      {description && <p className="text-lg md:text-xl">{description}</p>}
    </div>
  </div>
);

export default Hero;

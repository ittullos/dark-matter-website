import * as React from "react";
import Image from "next/image";

type HeroProps = {
  imageSrc: string; // URL of the hero image
  imageAlt: string; // Alt text for the image
  title?: string; // Optional title
  description?: string; // Optional description
  style?: React.CSSProperties; // Optional inline styles
};

const Hero: React.FC<HeroProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  style,
}) => (
  <div
    className="relative bg-black text-white w-screen overflow-hidden"
    style={style} // Apply the dynamic style prop here
  >
    {/* Hero Image */}
    <div className="absolute top-0 left-0 w-full h-full">
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        style={{ objectFit: "cover" }}
        className="opacity-60" // Darken the background image
      />
    </div>

    {/* Overlay Content */}
    <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
      {title && (
        <h1
          className="text-4xl md:text-6xl font-bold mb-4"
          style={{
            textShadow: "4px 4px 8px rgba(0, 0, 0, 1)", // More prominent drop shadow
          }}
        >
          {title}
        </h1>
      )}
      {description && (
        <p
          className="text-xl md:text-2xl"
          style={{
            textShadow: "2px 2px 6px rgba(0, 0, 0, 1)", // More prominent drop shadow
          }}
        >
          {description}
        </p>
      )}
    </div>
  </div>
);

export default Hero;

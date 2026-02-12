import React, { useState, useEffect } from "react";
import Image from "next/image";

type HeroCarouselProps = {
  images: { src: string; alt: string }[]; // Array of images with src and alt
  logoSrc: string; // Path to the logo image
};

const HeroCarousel: React.FC<HeroCarouselProps> = ({ images, logoSrc }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  // Automatically rotate images every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // 3 seconds

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [images.length]);

  return (
    <div className="relative w-full h-[calc(100vh-64px)] overflow-hidden">
      {/* Carousel Image */}
      <div className="relative w-full h-full">
        <Image
          src={images[currentIndex].src}
          alt={images[currentIndex].alt}
          fill
          style={{ objectFit: "cover" }}
          className="transition-opacity duration-500"
        />
        {/* Dark Tint Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-30"></div>
      </div>

      {/* Logo Overlay */}
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <img
          src={logoSrc}
          alt="Logo"
          className="h-1/4 md:h-1/3 lg:h-[30%] w-auto object-contain"
        />

        {/* Social Media Icons */}
        <div className="flex space-x-6 mt-2">
          {/* Instagram */}
          <a
            href="https://www.instagram.com/darkmatterbassmusic/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="hover:opacity-75 transition"
          >
            <img
              src="/instagram-white-icon.png"
              alt="Instagram"
              className="h-12 w-12"
            />
          </a>

          {/* Facebook */}
          <a
            href="https://www.facebook.com/darkmatterbassmusic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="hover:opacity-75 transition"
          >
            <img
              src="/facebook-app-round-white-icon.png"
              alt="Facebook"
              className="h-12 w-12"
            />
          </a>

          {/* Spotify */}
          <a
            href="https://open.spotify.com/artist/71c783dJDlJ3pqD7cFIOQq?si=r1kWgk6GR5urDLEAUk65GQ"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Spotify"
            className="hover:opacity-75 transition"
          >
            <img src="/spotify-icon.png" alt="Spotify" className="h-12 w-12" />
          </a>

          {/* SoundCloud */}
          <a
            href="https://soundcloud.com/darkmatterbassmusic"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="SoundCloud"
            className="hover:opacity-75 transition"
          >
            <img
              src="/soundcloud-white-icon.png"
              alt="SoundCloud"
              className="h-12 w-12"
            />
          </a>
        </div>
      </div>

      {/* Navigation Buttons */}
      <button
        onClick={handlePrev}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        aria-label="Previous"
      >
        &#8249;
      </button>
      <button
        onClick={handleNext}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-75"
        aria-label="Next"
      >
        &#8250;
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-white" : "bg-gray-500"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default HeroCarousel;

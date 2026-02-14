import React, { useState, useEffect } from "react";
import Image from "next/image";
import { MusicItem } from "../data/musicData";

interface MusicHeroCarouselProps {
  items: MusicItem[];
}

const MusicHeroCarousel: React.FC<MusicHeroCarouselProps> = ({ items }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-rotate slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % items.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [items.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % items.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + items.length) % items.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-screen sm:h-screen lg:h-[60vh] overflow-hidden">
      {items.map((item, index) => (
        <div
          key={item.id}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background Image - Zoomed and Blurred */}
          <div className="absolute inset-0">
            <Image
              src={item.image}
              alt={`${item.title} Background`}
              fill
              style={{ objectFit: "cover" }}
              className="scale-125 sm:scale-150 blur-md"
            />
            {/* Dark overlay for text readability */}
            <div className="absolute inset-0 bg-black bg-opacity-60 sm:bg-opacity-50"></div>
          </div>

          {/* Content Layer */}
          <div className="relative z-10 h-full flex flex-col justify-center text-white px-4 sm:px-6">
            {/* MUSIC Banner - Responsive positioning and sizing */}
            <div className="absolute top-20 sm:top-20 lg:top-8 left-1/2 transform -translate-x-1/2">
              <h1
                className="text-6xl sm:text-7xl lg:text-7xl font-bold tracking-wider"
                style={{
                  textShadow: "4px 4px 8px rgba(0, 0, 0, 1)",
                }}
              >
                MUSIC
              </h1>
            </div>

            {/* Album Cover and Text Section */}
            <div className="flex items-center justify-center max-w-6xl mx-auto w-full px-2">
              <div
                className={`flex flex-col lg:flex-row items-center gap-4 sm:gap-6 lg:gap-10 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Album Cover */}
                <div className="flex-shrink-0">
                  <div
                    className="w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 rounded-lg shadow-2xl overflow-hidden cursor-pointer transition-transform hover:scale-105"
                    onClick={() => {
                      // Scroll to the corresponding section on the music page
                      const targetElement = document.getElementById(item.id);
                      if (targetElement) {
                        targetElement.scrollIntoView({
                          behavior: "smooth",
                          block: "center",
                        });
                      }
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={`${item.title} Artwork`}
                      width={320}
                      height={320}
                      style={{ objectFit: "cover" }}
                    />
                  </div>
                </div>

                {/* Title and Stream Button Box */}
                <div className="text-center max-w-xs sm:max-w-sm lg:max-w-none">
                  <h2
                    className="text-2xl sm:text-3xl lg:text-5xl font-bold mb-4 sm:mb-6 lg:mb-8 leading-tight"
                    style={{
                      textShadow: "4px 4px 8px rgba(0, 0, 0, 1)",
                    }}
                  >
                    {item.title}
                  </h2>

                  {item.streamUrl && (
                    <a
                      href={item.streamUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center bg-blue-500 text-white font-bold py-2 px-4 sm:py-3 sm:px-6 lg:py-4 lg:px-8 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 text-sm sm:text-lg lg:text-xl"
                    >
                      Stream Now
                      {/* Speaker Icon */}
                      <svg
                        className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 ml-2 lg:ml-3"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M9.383 3.076A1 1 0 0110 4v12a1 1 0 01-1.617.77L4.172 13H2a1 1 0 01-1-1V8a1 1 0 011-1h2.172l4.211-3.77a1 1 0 011-.154zM14.657 2.929a1 1 0 011.414 0A9.972 9.972 0 0119 10a9.972 9.972 0 01-2.929 7.071 1 1 0 01-1.414-1.414A7.971 7.971 0 0017 10c0-2.21-.894-4.208-2.343-5.657a1 1 0 010-1.414zm-2.829 2.828a1 1 0 011.415 0A5.983 5.983 0 0115 10a5.984 5.984 0 01-1.757 4.243 1 1 0 01-1.415-1.414A3.984 3.984 0 0013 10a3.983 3.983 0 00-1.172-2.828 1 1 0 010-1.415z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 bg-black bg-opacity-50 text-white p-2 sm:p-3 rounded-full hover:bg-opacity-70 transition"
      >
        <svg
          className="w-5 h-5 sm:w-6 sm:h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 sm:bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {items.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full transition ${
              index === currentSlide ? "bg-white" : "bg-white bg-opacity-50"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default MusicHeroCarousel;

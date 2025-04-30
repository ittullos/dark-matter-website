import React, { useState } from "react";
import Hero from "../components/Hero";
import path from "path";
import fs from "fs";

type MediaProps = {
  images: string[];
};

const Media: React.FC<MediaProps> = ({ images }) => {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const [touchStartX, setTouchStartX] = useState<number | null>(null);
  const [touchEndX, setTouchEndX] = useState<number | null>(null);

  const handleNext = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEndX(e.touches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStartX || !touchEndX) return;

    const swipeDistance = touchStartX - touchEndX;

    // Swipe threshold to detect a valid swipe
    const swipeThreshold = 50;

    if (swipeDistance > swipeThreshold) {
      // Swiped left
      handleNext();
    } else if (swipeDistance < -swipeThreshold) {
      // Swiped right
      handlePrev();
    }

    // Reset touch positions
    setTouchStartX(null);
    setTouchEndX(null);
  };

  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        imageSrc="/media.jpg"
        imageAlt="Media Hero Image"
        title="MEDIA"
        style={{ height: "60vh" }} // Limit Hero height to 60% of the viewport
      />

      {/* Photo Gallery */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-4 text-center">PHOTOS</h2>
        {images.length > 0 ? (
          <div className="relative flex flex-col items-center">
            {/* Main Image */}
            <div
              className="w-full max-w-4xl mb-6 relative aspect-w-16 aspect-h-9"
              onTouchStart={handleTouchStart}
              onTouchMove={handleTouchMove}
              onTouchEnd={handleTouchEnd}
            >
              <img
                src={images[selectedImageIndex]}
                alt="Selected"
                className="w-full h-full object-cover rounded-lg shadow-lg"
              />

              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2 left-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75"
                aria-label="Previous Image"
              >
                &#8249;
              </button>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="absolute top-1/2 right-0 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-4 rounded-full hover:bg-opacity-75"
                aria-label="Next Image"
              >
                &#8250;
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-gray-500">No images available.</p>
        )}
      </section>

      {/* YouTube Video Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-center text-3xl font-bold mb-4 justify">
          DSR BRAINWASH MINI MIX
        </h1>
        <div className="flex justify-center">
          <div className="aspect-w-16 aspect-h-9 just">
            <iframe
              width="800px"
              height="450px"
              src="https://www.youtube.com/embed/zDSGQIGlpWg"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export const getStaticProps = async () => {
  const imagesDirectory = path.join(process.cwd(), "public", "RADIANCE_WEB");

  // Check if the directory exists
  if (!fs.existsSync(imagesDirectory)) {
    console.warn("RADIANCE_WEB folder does not exist.");
    return {
      props: {
        images: [],
      },
    };
  }

  // Read files from the directory
  const imageFiles = fs.readdirSync(imagesDirectory);

  // Filter only image files (e.g., .jpg, .png, .jpeg)
  const images = imageFiles
    .filter((file) => /\.(jpg|jpeg|png|gif)$/i.test(file))
    .map((file) => `/RADIANCE_WEB/${file}`);

  return {
    props: {
      images,
    },
  };
};

export default Media;

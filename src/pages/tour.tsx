import React from "react";
import Hero from "../components/Hero";
import BandsintownTour from "../components/BandsintownTour";

const Tour = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        imageSrc="/tour.jpg"
        imageAlt="Tour Hero Image"
        title="TOUR"
        style={{ height: "60vh" }} // Limit Hero height to 60% of the viewport
      />

      {/* Tour Content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Tour</h1>
        <p className="text-lg text-gray-400 mb-6">
          Find out about our upcoming tours and events.
        </p>
        <BandsintownTour
          artistName="DARK MATTER"
          apiKey="bd640387dc2265d035186dde58c99478" // Replace with your Bandsintown API key
        />
      </section>
    </div>
  );
};

export default Tour;

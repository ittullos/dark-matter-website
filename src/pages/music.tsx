import React from "react";
import MusicHeroCarousel from "../components/MusicHeroCarousel";
import MusicItem from "../components/MusicItem";
import { musicData } from "../data/musicData";

const Music = () => {
  // Get the first 4 items for the hero carousel
  const heroItems = musicData.slice(0, 4);
  // Get the remaining items for the main content
  const remainingItems = musicData.slice(4);

  return (
    <div className="w-full">
      {/* Hero Carousel */}
      <MusicHeroCarousel items={heroItems} />

      {/* Music Content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold text-center mb-12">More Music</h2>
        {remainingItems.map((item) => (
          <MusicItem key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
};

export default Music;

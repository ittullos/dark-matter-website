import React from "react";
import MusicHeroCarousel from "../components/MusicHeroCarousel";
import MusicItem from "../components/MusicItem";
import { musicData } from "../data/musicData";

const Music = () => {
  // Get the first 4 items for the hero carousel
  const heroItems = musicData.slice(0, 4);

  return (
    <div className="w-full">
      {/* Hero Carousel */}
      <MusicHeroCarousel items={heroItems} />

      {/* All Music Content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {musicData.map((item) => (
          <MusicItem key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
};

export default Music;

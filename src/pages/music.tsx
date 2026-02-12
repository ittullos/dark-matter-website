import React from "react";
import Hero from "../components/Hero";
import MusicItem from "../components/MusicItem";
import { musicData } from "../data/musicData";

const Music = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        imageSrc="/music.jpg"
        imageAlt="Music Hero Image"
        title="MUSIC"
        style={{ height: "60vh" }}
      />

      {/* Music Content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {musicData.map((item) => (
          <MusicItem key={item.id} item={item} />
        ))}
      </section>
    </div>
  );
};

export default Music;

import * as React from "react";
import HeroCarousel from "../components/HeroCarousel";
import SoundCloudPlayer from "../components/SoundCloudPlayer";
import SoundCloudPlaylistPlayer from "../components/SoundCloudPlaylistPlayer";
import Image from "next/image"; // Import the Image component
import { artistBio } from "../data/bio"; // Import the bio data

const IndexPage = () => {
  const images = [
    { src: "/car1.jpg", alt: "Image 1" },
    { src: "/car2.jpg", alt: "Image 2" },
    { src: "/car3.jpg", alt: "Image 3" },
    { src: "/car4.jpg", alt: "Image 4" },
    { src: "/car5.jpg", alt: "Image 5" },
    { src: "/car6.jpg", alt: "Image 6" },
    { src: "/car7.jpg", alt: "Image 7" },
    { src: "/car8.jpg", alt: "Image 8" },
  ];

  return (
    <div className="w-full">
      <HeroCarousel images={images} logoSrc="/dm-logo-hero.png" />

      {/* About Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Title */}
        <h2 className="text-5xl font-extrabold mb-10 mt-10 text-white text-center">
          About
        </h2>

        {/* Content */}
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-12">
          {/* Image */}
          <div className="flex-shrink-0">
            <div className="w-full h-auto max-w-lg relative">
              <Image
                src="/dark-matter-about.jpg"
                alt="DARK MATTER"
                width={800} // Adjust width to match the original display
                height={600} // Adjust height to match the original display
                className="object-cover rounded-lg shadow-lg"
              />
            </div>
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              <span className="font-extrabold text-white">DARK MATTER</span> -
              Music Producer Duo
            </h3>
            {artistBio.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-lg text-white leading-relaxed mb-4">
                {paragraph}
              </p>
            ))}
            <p className="text-lg text-white leading-relaxed mt-4">
              <strong>Contact:</strong>{" "}
              <a
                href={`mailto:${artistBio.contact.email}`}
                className="text-blue-400 hover:underline"
              >
                {artistBio.contact.email}
              </a>
            </p>
          </div>
        </div>
      </section>

      {/* SoundCloud Playlist Section */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        <h2 className="text-5xl font-extrabold mb-8 mt-4 text-white text-center">
          Music
        </h2>
        <SoundCloudPlaylistPlayer
          playlistUrl="https://soundcloud.com/darkmatterbassmusic/sets/dark-matter-releases-1"
          height={500}
        />

        {/* Follow Us on Spotify Button */}
        <div className="mt-8 text-center">
          <a
            href="https://open.spotify.com/artist/71c783dJDlJ3pqD7cFIOQq?si=zbM_rci3Sou4-LXEOb803A"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-green-500 text-white font-bold py-3 px-6 mt-8 rounded-lg shadow-lg hover:bg-green-600 transition duration-300"
          >
            Follow Us on Spotify
          </a>
        </div>
      </section>
    </div>
  );
};

export default IndexPage;

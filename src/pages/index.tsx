import * as React from "react";
import HeroCarousel from "../components/HeroCarousel";
import SoundCloudPlayer from "../components/SoundCloudPlayer";
import SoundCloudPlaylistPlayer from "../components/SoundCloudPlaylistPlayer";

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
            <img
              src="/dark-matter-about.jpg"
              alt="DARK MATTER"
              className="w-full h-auto max-w-lg object-cover rounded-lg shadow-lg"
            />
          </div>

          {/* Bio */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-white">
              <span className="font-extrabold text-white">DARK MATTER</span> -
              Music Producer Duo
            </h3>
            <p className="text-lg text-white leading-relaxed mb-4">
              DARK MATTER launched their project at the beginning of 2024,
              starting off strong by winning the Circus Records remix contest
              for Flux Pavilion and Conrank’s track “Where You At.” Since then,
              they've been relentless in their pursuit of sonic innovation,
              consistently delivering boundary-pushing tracks that defy
              categorization.
            </p>
            <p className="text-lg text-white leading-relaxed mb-4">
              Recently, DARK MATTER released their single "Brainwash" on
              DirtySnatcha Records, which was played out by Liquid Stranger at
              Cyclops Cove 3. They also made their festival debut at Radiance
              NYE in Chicago, opening for Rezz, Peekaboo, and Truth.
            </p>
            <p className="text-lg text-white leading-relaxed">
              DARK MATTER invites you to experience music in its rawest, most
              unfiltered form as they venture deeper into the uncharted abyss of
              sound.
            </p>
            <p className="text-lg text-white leading-relaxed mt-4">
              <strong>Contact:</strong>{" "}
              <a
                href="mailto:darkmatterbassmusic@gmail.com"
                className="text-blue-400 hover:underline"
              >
                darkmatterbassmusic@gmail.com
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

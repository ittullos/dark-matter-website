import React from "react";
import Hero from "../components/Hero";
import SoundCloudPlaylistPlayer from "../components/SoundCloudPlaylistPlayer";
import SoundCloudPlayer from "../components/SoundCloudPlayer";

const Music = () => {
  return (
    <div className="w-full">
      {/* Hero Section */}
      <Hero
        imageSrc="/music.jpg"
        imageAlt="Music Hero Image"
        title="MUSIC"
        style={{ height: "60vh" }} // Limit Hero height to 60% of the viewport
      />

      {/* Music Content */}
      <section className="max-w-6xl mx-auto px-6 py-12">
        {/* Brainwash EP Section */}
        <div className="mt-8 text-center">
          {/* Album Artwork */}
          <img
            src="/brainwash.jpg" // Replace with the actual path to your album artwork
            alt="Brainwash EP Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">
            Brainwash EP (DirtySnatcha Records)
          </h2>
          {/* Stream Link */}
          <a
            href="https://hypeddit.com/brainwashep" // Replace with the actual stream link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-12"
          >
            Stream
            {/* Spotify Logo */}
            <img
              src="/spotify-icon.png" // Replace with the actual path to your Spotify logo
              alt="Spotify"
              className="w-6 h-6 ml-2" // Adjust size as needed
            />
          </a>
          {/* SoundCloud Player */}
          <SoundCloudPlaylistPlayer
            playlistUrl="https://soundcloud.com/dirtysnatcharecords/sets/darkmatter-brainwashep"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>

        {/* DSR Brainwash Mini Mix Section */}
        <div className="mt-12 text-center">
          {/* Album Artwork */}
          <img
            src="/brainwash_mix.jpg" // Replace with the actual path to your album artwork
            alt="DSR Brainwash Mini Mix Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">
            DSR Brainwash Mini Mix
          </h2>
          {/* SoundCloud Player */}
          <SoundCloudPlayer
            url="https://soundcloud.com/dirtysnatcharecords/dirtysnatcha-records-brainwawsh-minimix"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>

        {/* Darkness Section */}
        <div className="mt-12 text-center">
          {/* Album Artwork */}
          <img
            src="/darkness.jpg" // Replace with the actual path to your album artwork
            alt="Darkness Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">
            DARK MATTER - Darkness
          </h2>
          {/* Stream Link */}
          <a
            href="https://hypeddit.com/darkmatter/darkness-1" // Replace with the actual stream link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-12"
          >
            Stream
            {/* Spotify Logo */}
            <img
              src="/spotify-icon.png" // Replace with the actual path to your Spotify logo
              alt="Spotify"
              className="w-6 h-6 ml-2" // Adjust size as needed
            />
          </a>
          {/* SoundCloud Player */}
          <SoundCloudPlayer
            url="https://soundcloud.com/darkmatterbassmusic/darkness"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>

        {/* Venom Flip */}
        <div className="mt-12 text-center">
          {/* Album Artwork */}
          <img
            src="/venom.jpg" // Replace with the actual path to your album artwork
            alt="Venom Flip Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">
            GHOSTEMANE - VENOM (DARK MATTER FLIP)
          </h2>
          {/* SoundCloud Player */}
          <SoundCloudPlayer
            url="https://soundcloud.com/darkmatterbassmusic/ghostmane-venom-dark-matter"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>

        {/* Brain Tickler Flip */}
        <div className="mt-12 text-center">
          {/* Album Artwork */}
          <img
            src="/brain_tickler.jpg" // Replace with the actual path to your album artwork
            alt="Brain Tickler Remix Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">
            GHOSTEMANE - VENOM (DARK MATTER FLIP)
          </h2>
          {/* SoundCloud Player */}
          <SoundCloudPlayer
            url="https://soundcloud.com/darkmatterbassmusic/ahee-brain-tickler-dark-matter-remix"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>

        {/* Where You At Section */}
        <div className="mt-12 text-center">
          {/* Album Artwork */}
          <img
            src="/wya.jpg" // Replace with the actual path to your album artwork
            alt="Darkness Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">
            Flux Pavilion X Conrank - Where You At (DARK MATTER Remix)
          </h2>
          {/* Stream Link */}
          <a
            href="https://hypeddit.com/fluxpavilionconrankdarkmatter/whereyouatdarkmatterremix" // Replace with the actual stream link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-12"
          >
            Stream
            {/* Spotify Logo */}
            <img
              src="/spotify-icon.png" // Replace with the actual path to your Spotify logo
              alt="Spotify"
              className="w-6 h-6 ml-2" // Adjust size as needed
            />
          </a>
          {/* SoundCloud Player */}
          <SoundCloudPlayer
            url="https://soundcloud.com/darkmatterbassmusic/flux-pavilion-x-conrank-where-you-at-dark-matter-remix"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>

        {/* Snakes Bootleg */}
        <div className="mt-12 text-center">
          {/* Album Artwork */}
          <img
            src="/snakes.jpg" // Replace with the actual path to your album artwork
            alt="Snakes Bootleg Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">
            DISTINCT MOTIVE - SNAKES (DARK MATTER BOOTLEG)
          </h2>
          {/* SoundCloud Player */}
          <SoundCloudPlayer
            url="https://soundcloud.com/darkmatterbassmusic/distinct-motive-snakes-dark-matter-bootleg"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>

        {/* Spaghetti Remix Section */}
        <div className="mt-12 text-center">
          {/* Album Artwork */}
          <img
            src="/noetspag.jpg" // Replace with the actual path to your album artwork
            alt="Noetika Spaghetti Remix Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">
            Noetika - Spaghetti (DARK MATTER Remix)
          </h2>
          {/* Stream Link */}
          <a
            href="https://hypeddit.com/noetikadarkmatter/spaghettidarkmatterremix" // Replace with the actual stream link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-12"
          >
            Stream
            {/* Spotify Logo */}
            <img
              src="/spotify-icon.png" // Replace with the actual path to your Spotify logo
              alt="Spotify"
              className="w-6 h-6 ml-2" // Adjust size as needed
            />
          </a>
          {/* SoundCloud Player */}
          <SoundCloudPlayer
            url="https://soundcloud.com/noetika/spaghetti-dark-matter-remix"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>

        {/* Spaghettified Section */}
        <div className="mt-12 text-center">
          {/* Album Artwork */}
          <img
            src="/spag.jpg" // Replace with the actual path to your album artwork
            alt="Spaghettified Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">
            DARK MATTER - Spaghettified
          </h2>
          {/* Stream Link */}
          <a
            href="https://hypeddit.com/darkmatter/spaghettified-1" // Replace with the actual stream link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-12"
          >
            Stream
            {/* Spotify Logo */}
            <img
              src="/spotify-icon.png" // Replace with the actual path to your Spotify logo
              alt="Spotify"
              className="w-6 h-6 ml-2" // Adjust size as needed
            />
          </a>
          {/* SoundCloud Player */}
          <SoundCloudPlayer
            url="https://soundcloud.com/darkmatterbassmusic/spaghettified"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>

        {/* EVIL Section */}
        <div className="mt-12 text-center">
          {/* Album Artwork */}
          <img
            src="/evil.jpg" // Replace with the actual path to your album artwork
            alt="EVIL Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">
            DARK MATTER - EVIL (MAKE WAVS)
          </h2>
          {/* Stream Link */}
          <a
            href="https://hypeddit.com/darkmatter/evilmakewavs" // Replace with the actual stream link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-12"
          >
            Stream
            {/* Spotify Logo */}
            <img
              src="/spotify-icon.png" // Replace with the actual path to your Spotify logo
              alt="Spotify"
              className="w-6 h-6 ml-2" // Adjust size as needed
            />
          </a>
          {/* SoundCloud Player */}
          <SoundCloudPlayer
            url="https://soundcloud.com/darkmatterbassmusic/sets/dark-matter-evil"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>

        {/* Gunslinger Flip */}
        <div className="mt-12 text-center">
          {/* Album Artwork */}
          <img
            src="/gunslinger.jpg" // Replace with the actual path to your album artwork
            alt="Snakes Bootleg Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">
            Liquid Stranger - Gunslinger (DARK MATTER Flip)
          </h2>
          {/* SoundCloud Player */}
          <SoundCloudPlayer
            url="https://soundcloud.com/darkmatterbassmusic/liquid-stranger-gunslinger-dark-matter-flip"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>

        {/* Action Time */}
        <div className="mt-12 text-center">
          {/* Album Artwork */}
          <img
            src="/actiontime.jpg" // Replace with the actual path to your album artwork
            alt="Action Time Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">
            DARK MATTER & Short CRKT - Action Time
          </h2>
          {/* Stream Link */}
          <a
            href="https://hypeddit.com/darkmattershortcrkt/actiontime-1" // Replace with the actual stream link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-12"
          >
            Stream
            {/* Spotify Logo */}
            <img
              src="/spotify-icon.png" // Replace with the actual path to your Spotify logo
              alt="Spotify"
              className="w-6 h-6 ml-2" // Adjust size as needed
            />
          </a>
          {/* SoundCloud Player */}
          <SoundCloudPlayer
            url="https://soundcloud.com/darkmatterbassmusic/action-time"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>

        {/* How We Do It */}
        <div className="mt-12 text-center">
          {/* Album Artwork */}
          <img
            src="/how.jpg" // Replace with the actual path to your album artwork
            alt="Action Time Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">
            DARK MATTER - How We Do It
          </h2>
          {/* Stream Link */}
          <a
            href="https://hypeddit.com/darkmatter/howwedoit-1" // Replace with the actual stream link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-12"
          >
            Stream
            {/* Spotify Logo */}
            <img
              src="/spotify-icon.png" // Replace with the actual path to your Spotify logo
              alt="Spotify"
              className="w-6 h-6 ml-2" // Adjust size as needed
            />
          </a>
          {/* SoundCloud Player */}
          <SoundCloudPlayer
            url="https://soundcloud.com/darkmatterbassmusic/how-we-do-it"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>

        {/* P.U.T.T. */}
        <div className="mt-12 text-center">
          {/* Album Artwork */}
          <img
            src="/putt.jpg" // Replace with the actual path to your album artwork
            alt="Action Time Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">
            DARK MATTER - P.U.T.T.
          </h2>
          {/* Stream Link */}
          <a
            href="https://hypeddit.com/darkmatter/pullupthetune" // Replace with the actual stream link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-12"
          >
            Stream
            {/* Spotify Logo */}
            <img
              src="/spotify-icon.png" // Replace with the actual path to your Spotify logo
              alt="Spotify"
              className="w-6 h-6 ml-2" // Adjust size as needed
            />
          </a>
          {/* SoundCloud Player */}
          <SoundCloudPlayer
            url="https://soundcloud.com/darkmatterbassmusic/dark-matter-putt"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>

        {/* Big Boi */}
        <div className="mt-12 text-center">
          {/* Album Artwork */}
          <img
            src="/bigboi.jpg" // Replace with the actual path to your album artwork
            alt="Big Boi Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">
            DARK MATTER - P.U.T.T.
          </h2>
          {/* Stream Link */}
          <a
            href="https://hypeddit.com/darkmatter/bigboi-1" // Replace with the actual stream link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-12"
          >
            Stream
            {/* Spotify Logo */}
            <img
              src="/spotify-icon.png" // Replace with the actual path to your Spotify logo
              alt="Spotify"
              className="w-6 h-6 ml-2" // Adjust size as needed
            />
          </a>
          {/* SoundCloud Player */}
          <SoundCloudPlayer
            url="https://soundcloud.com/darkmatterbassmusic/big-boi"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>

        {/* BZ boi */}
        <div className="mt-12 text-center">
          {/* Album Artwork */}
          <img
            src="/bz_boi.jpg" // Replace with the actual path to your album artwork
            alt="BZ boi Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">DARK MATTER - BZ boi</h2>
          {/* Stream Link */}
          <a
            href="https://hypeddit.com/darkmatter/bzboi-1" // Replace with the actual stream link
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-12"
          >
            Stream
            {/* Spotify Logo */}
            <img
              src="/spotify-icon.png" // Replace with the actual path to your Spotify logo
              alt="Spotify"
              className="w-6 h-6 ml-2" // Adjust size as needed
            />
          </a>
          {/* SoundCloud Player */}
          <SoundCloudPlayer
            url="https://soundcloud.com/darkmatterbassmusic/dark-matter-bz-boi"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>

        {/* Like That Flip */}
        <div className="mt-12 text-center">
          {/* Album Artwork */}
          <img
            src="/like.jpg" // Replace with the actual path to your album artwork
            alt="Snakes Bootleg Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">
            PEEKABOO & LYNY - Like That (DARK MATTER Flip)
          </h2>
          {/* SoundCloud Player */}
          <SoundCloudPlayer
            url="https://soundcloud.com/darkmatterbassmusic/peekaboo-lyny-like-that-dark-matter-flip"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>

        {/* Feel Alive Flip */}
        <div className="mt-12 text-center">
          {/* Album Artwork */}
          <img
            src="/alive.jpg" // Replace with the actual path to your album artwork
            alt="Feel Alive Artwork"
            className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-6" // Reduced size to max-w-sm
          />
          {/* Title */}
          <h2 className="text-2xl font-semibold mb-4">
            Stylust- Feel Alive (DARK MATTER Flip)
          </h2>
          {/* SoundCloud Player */}
          <SoundCloudPlayer
            url="https://soundcloud.com/darkmatterbassmusic/stylust-feel-alive-dark-matter-flip"
            width="500px"
          />
        </div>
        <div className="mt-12" style={{ height: "20px" }}></div>
      </section>
    </div>
  );
};

export default Music;

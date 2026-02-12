import React from "react";
import Image from "next/image";
import SoundCloudPlayer from "./SoundCloudPlayer";
import { MusicItem } from "../data/musicData";

interface SingleTrackProps {
  item: MusicItem;
}

const SingleTrack: React.FC<SingleTrackProps> = ({ item }) => {
  return (
    <div className="mt-12 text-center">
      {/* Album Artwork */}
      <div className="w-full max-w-xs mx-auto rounded-lg shadow-lg overflow-hidden mb-8">
        <Image
          src={item.image}
          alt={`${item.title} Artwork`}
          width={400}
          height={400}
        />
      </div>

      {/* Title */}
      <h2 className="text-2xl font-semibold mb-4">{item.title}</h2>

      {/* Stream Link (if available) */}
      {item.streamUrl && (
        <a
          href={item.streamUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center bg-blue-500 text-white font-bold py-3 px-6 rounded-lg shadow-lg hover:bg-blue-600 transition duration-300 mb-12"
        >
          Stream
          {/* Spotify Logo */}
          <div className="w-6 h-6 ml-2">
            <Image
              src="/spotify-icon.png"
              alt="Spotify"
              width={24}
              height={24}
            />
          </div>
        </a>
      )}

      {/* SoundCloud Player */}
      <SoundCloudPlayer url={item.soundcloudUrl} width="500px" />
    </div>
  );
};

export default SingleTrack;

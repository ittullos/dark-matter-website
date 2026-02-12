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
          {/* Speaker Icon */}
          <svg
            className="w-6 h-6 ml-2"
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

      {/* SoundCloud Player */}
      <SoundCloudPlayer url={item.soundcloudUrl} width="500px" />
    </div>
  );
};

export default SingleTrack;

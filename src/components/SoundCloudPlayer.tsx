import React from "react";

type SoundCloudPlayerProps = {
  url: string; // SoundCloud track or playlist URL
  height?: number; // Optional height for the player
  width?: string; // Optional width for the player
};

const SoundCloudPlayer: React.FC<SoundCloudPlayerProps> = ({
  url,
  height = 125, // Standardized height
  width = "70%", // Standardized width
}) => {
  return (
    <div
      className="soundcloud-player"
      style={{ maxWidth: width, margin: "0 auto" }} // Center and limit width
    >
      <iframe
        width="100%"
        height={height}
        scrolling="no"
        frameBorder="no"
        allow="autoplay"
        src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(
          url
        )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true`}
      ></iframe>
    </div>
  );
};

export default SoundCloudPlayer;

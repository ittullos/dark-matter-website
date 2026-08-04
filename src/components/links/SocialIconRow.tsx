import * as React from "react";

import { SocialLink } from "../../types";

const ICON_MAP: Record<string, { src: string; label: string }> = {
  instagram: { src: "/instagram-white-icon.png", label: "Instagram" },
  facebook: { src: "/facebook-app-round-white-icon.png", label: "Facebook" },
  spotify: { src: "/spotify-icon.png", label: "Spotify" },
  soundcloud: { src: "/soundcloud-white-icon.png", label: "SoundCloud" },
};

interface SocialIconRowProps {
  links: SocialLink[];
  size?: "sm" | "lg";
}

const SocialIconRow = ({ links, size = "lg" }: SocialIconRowProps) => {
  const dimension = size === "lg" ? "h-10 w-10" : "h-6 w-6";
  const gap = size === "lg" ? "space-x-6" : "space-x-4";
  const padding = size === "lg" ? "p-2" : "";

  return (
    <div className={`flex justify-center ${gap}`}>
      {links.map((link) => {
        const icon = ICON_MAP[link.platform];
        if (!icon) return null;

        return (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={icon.label}
            className={`hover:opacity-75 transition ${padding}`}
          >
            <img src={icon.src} alt={icon.label} className={dimension} />
          </a>
        );
      })}
    </div>
  );
};

export default SocialIconRow;

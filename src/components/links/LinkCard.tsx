import * as React from "react";
import Image from "next/image";

interface LinkCardProps {
  title: string;
  subtitle?: string;
  url: string;
  image?: string;
  fallbackEmoji?: string;
  priority?: boolean;
}

const LinkCard = ({
  title,
  subtitle,
  url,
  image,
  fallbackEmoji = "🎟️",
  priority = false,
}: LinkCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group block w-full rounded-xl overflow-hidden transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl shadow-lg border border-white/10"
    >
      <div className="relative h-40 bg-gray-900/50">
        {image && (
          <div className="absolute inset-0 opacity-40">
            <Image
              src={image}
              alt={title}
              fill
              priority={priority}
              className="object-cover blur-sm"
            />
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
          <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 shadow-lg mb-3 bg-gray-900 flex items-center justify-center">
            {image ? (
              <Image
                src={image}
                alt={title}
                width={64}
                height={64}
                priority={priority}
                className="object-cover w-full h-full"
              />
            ) : (
              <span className="text-2xl">{fallbackEmoji}</span>
            )}
          </div>
          <div>
            <h3 className="font-bold text-xl text-white drop-shadow-lg mb-1">
              {title}
            </h3>
            {subtitle && (
              <p className="text-gray-200 text-sm drop-shadow-md">
                {subtitle}
              </p>
            )}
          </div>
        </div>
      </div>
    </a>
  );
};

export default LinkCard;

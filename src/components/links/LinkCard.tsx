import * as React from "react";
import Image from "next/image";

interface LinkCardProps {
  title: string;
  subtitle?: string;
  url: string;
  image?: string;
  featured?: boolean;
  fallbackEmoji?: string;
}

const LinkCard = ({
  title,
  subtitle,
  url,
  image,
  featured = false,
  fallbackEmoji = "🎟️",
}: LinkCardProps) => {
  if (featured) {
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
                priority
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
                  priority
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
  }

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-4 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 transition-all duration-200 hover:bg-white/10 hover:border-white/20"
    >
      <div className="w-12 h-12 flex-shrink-0 rounded-lg overflow-hidden bg-gray-900 flex items-center justify-center">
        {image ? (
          <Image
            src={image}
            alt={title}
            width={48}
            height={48}
            className="object-cover w-full h-full"
          />
        ) : (
          <span className="text-xl">{fallbackEmoji}</span>
        )}
      </div>
      <div className="min-w-0 flex-1 text-left">
        <h3 className="font-semibold text-white truncate">{title}</h3>
        {subtitle && (
          <p className="text-gray-400 text-sm truncate">{subtitle}</p>
        )}
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        className="w-4 h-4 flex-shrink-0 text-gray-500 group-hover:text-white group-hover:translate-x-0.5 transition-all"
        fill="currentColor"
      >
        <path fill="none" d="M0 0h24v24H0z" />
        <path d="M16.172 11H4v2h12.172l-5.364 5.364 1.414 1.414L20 12l-7.778-7.778-1.414 1.414z" />
      </svg>
    </a>
  );
};

export default LinkCard;

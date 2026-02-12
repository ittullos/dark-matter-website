import * as React from "react";
import Image from "next/image";
import Head from "next/head";

const LinksPage = () => {
  return (
    <>
      <Head>
        <title>DARK MATTER - Links</title>
        <meta
          name="description"
          content="DARK MATTER official links - Music, social media, and streaming platforms"
        />
      </Head>

      <div className="min-h-screen bg-black text-white">
        {/* Hero Section */}
        <section className="relative py-20 px-6">
          <div className="max-w-lg mx-auto text-center">
            {/* Profile Image */}
            <div className="relative w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden border-4 border-white shadow-lg">
              <Image
                src="/dark-matter-about.jpg"
                alt="DARK MATTER"
                fill
                className="object-cover"
              />
            </div>

            {/* Logo instead of text */}
            <div className="flex justify-center mb-4">
              <img
                src="/logo.png"
                alt="DARK MATTER"
                className="h-16 w-auto max-w-full object-contain"
              />
            </div>

            {/* Tagline */}
            <p className="text-xl text-gray-300 mb-6">Welcome to the Void</p>

            {/* Social Media Links - Bigger and closer */}
            <div className="flex justify-center space-x-6 mb-8">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/darkmatterbassmusic/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-75 transition p-2"
              >
                <img
                  src="/instagram-white-icon.png"
                  alt="Instagram"
                  className="h-10 w-10"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/darkmatterbassmusic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:opacity-75 transition p-2"
              >
                <img
                  src="/facebook-app-round-white-icon.png"
                  alt="Facebook"
                  className="h-10 w-10"
                />
              </a>

              {/* Spotify */}
              <a
                href="https://open.spotify.com/artist/71c783dJDlJ3pqD7cFIOQq?si=r1kWgk6GR5urDLEAUk65GQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify"
                className="hover:opacity-75 transition p-2"
              >
                <img
                  src="/spotify-icon.png"
                  alt="Spotify"
                  className="h-10 w-10"
                />
              </a>

              {/* SoundCloud */}
              <a
                href="https://soundcloud.com/darkmatterbassmusic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SoundCloud"
                className="hover:opacity-75 transition p-2"
              >
                <img
                  src="/soundcloud-white-icon.png"
                  alt="SoundCloud"
                  className="h-10 w-10"
                />
              </a>
            </div>
          </div>
        </section>

        {/* Links Section */}
        <section className="max-w-lg mx-auto px-6 pb-12">
          <div className="space-y-4">
            {/* Latest Release - Darkness */}
            <a
              href="https://open.spotify.com/track/6Yz32ZCnqyYO8rdx3AcKW9?si=6598d373b67e4390"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border border-white/10"
            >
              <div className="relative h-36 bg-gray-900/50">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-40">
                  <Image
                    src="/darkness.jpg"
                    alt="Darkness"
                    fill
                    className="object-cover blur-sm"
                  />
                </div>

                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 shadow-lg mb-3">
                    <Image
                      src="/darkness.jpg"
                      alt="Darkness"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white drop-shadow-lg mb-1">
                      Darkness
                    </h3>
                    <p className="text-gray-200 text-sm drop-shadow-md">
                      Latest Single • 2025
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* Brainwash EP */}
            <a
              href="https://hypeddit.com/brainwashep"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border border-white/10"
            >
              <div className="relative h-36 bg-gray-900/50">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-40">
                  <Image
                    src="/brainwash.jpg"
                    alt="Brainwash EP"
                    fill
                    className="object-cover blur-sm"
                  />
                </div>

                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 shadow-lg mb-3">
                    <Image
                      src="/brainwash.jpg"
                      alt="Brainwash EP"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white drop-shadow-lg mb-1">
                      Brainwash EP
                    </h3>
                    <p className="text-gray-200 text-sm drop-shadow-md">
                      Stream Now
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* How We Do It */}
            <a
              href="https://open.spotify.com/album/7CWeBbDTYEpzDXxTffuns7?si=ZVifmnG8R0ONXrouhXdHNA"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border border-white/10"
            >
              <div className="relative h-36 bg-gray-900/50">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-40">
                  <Image
                    src="/how.jpg"
                    alt="How We Do It"
                    fill
                    className="object-cover blur-sm"
                  />
                </div>

                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 shadow-lg mb-3">
                    <Image
                      src="/how.jpg"
                      alt="How We Do It"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white drop-shadow-lg mb-1">
                      How We Do It
                    </h3>
                    <p className="text-gray-200 text-sm drop-shadow-md">
                      Song • 2024
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* BZ boi */}
            <a
              href="https://open.spotify.com/album/6c1Os1rIdrTnULIQpKUsya?si=q0FWaQqQQo-CD1J2iCl84w"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border border-white/10"
            >
              <div className="relative h-36 bg-gray-900/50">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-40">
                  <Image
                    src="/bz_boi.jpg"
                    alt="BZ boi"
                    fill
                    className="object-cover blur-sm"
                  />
                </div>

                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 shadow-lg mb-3">
                    <Image
                      src="/bz_boi.jpg"
                      alt="BZ boi"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white drop-shadow-lg mb-1">
                      BZ boi
                    </h3>
                    <p className="text-gray-200 text-sm drop-shadow-md">
                      Single • 2024
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* Band4Band Flip */}
            <a
              href="https://soundcloud.com/darkmatterbassmusic/central-cee-lil-baby-band4band-dark-matter-flip"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border border-white/10"
            >
              <div className="relative h-36 bg-gray-900/50">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-40">
                  <Image
                    src="/spag.jpg"
                    alt="Band4Band Flip"
                    fill
                    className="object-cover blur-sm"
                  />
                </div>

                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 shadow-lg mb-3">
                    <Image
                      src="/spag.jpg"
                      alt="Band4Band Flip"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white drop-shadow-lg mb-1">
                      Band4Band (DARK MATTER FLIP)
                    </h3>
                    <p className="text-gray-200 text-sm drop-shadow-md">
                      Central Cee, Lil Baby
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* GHOSTEMANE Flip */}
            <a
              href="https://soundcloud.com/darkmatterbassmusic/ghostmane-venom-dark-matter"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border border-white/10"
            >
              <div className="relative h-36 bg-gray-900/50">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-40">
                  <Image
                    src="/venom.jpg"
                    alt="VENOM FLIP"
                    fill
                    className="object-cover blur-sm"
                  />
                </div>

                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 shadow-lg mb-3">
                    <Image
                      src="/venom.jpg"
                      alt="VENOM FLIP"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white drop-shadow-lg mb-1">
                      VENOM (DARK MATTER FLIP)
                    </h3>
                    <p className="text-gray-200 text-sm drop-shadow-md">
                      GHOSTEMANE
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* Apple Music Playlist */}
            <a
              href="https://music.apple.com/us/playlist/dark-matters-chicago-il-2024-concert-set-list/pl.a31f14b366dd47c3bcd28b2e935d24d4?ls=&at=1000l3bbu&itscg=30200&itsct=music_box_link&app=music"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border border-white/10"
            >
              <div className="relative h-36 bg-gray-900/50">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-40">
                  <Image
                    src="/apple_music.png"
                    alt="Apple Music"
                    fill
                    className="object-cover blur-sm"
                  />
                </div>

                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 shadow-lg mb-3">
                    <Image
                      src="/apple_music.png"
                      alt="Apple Music"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white drop-shadow-lg mb-1">
                      Chicago 2024 Concert Set List
                    </h3>
                    <p className="text-gray-200 text-sm drop-shadow-md">
                      Apple Music Playlist
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* Liquid Stranger Flip */}
            <a
              href="https://soundcloud.com/darkmatterbassmusic/liquid-stranger-gunslinger-dark-matter-flip"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border border-white/10"
            >
              <div className="relative h-36 bg-gray-900/50">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-40">
                  <Image
                    src="/gunslinger.jpg"
                    alt="Gunslinger Flip"
                    fill
                    className="object-cover blur-sm"
                  />
                </div>

                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 shadow-lg mb-3">
                    <Image
                      src="/gunslinger.jpg"
                      alt="Gunslinger Flip"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white drop-shadow-lg mb-1">
                      Gunslinger (DARK MATTER Flip)
                    </h3>
                    <p className="text-gray-200 text-sm drop-shadow-md">
                      Liquid Stranger
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* Stylust Flip */}
            <a
              href="https://soundcloud.com/darkmatterbassmusic/stylust-feel-alive-dark-matter-flip"
              target="_blank"
              rel="noopener noreferrer"
              className="group block w-full rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border border-white/10"
            >
              <div className="relative h-36 bg-gray-900/50">
                {/* Background Image */}
                <div className="absolute inset-0 opacity-40">
                  <Image
                    src="/alive.jpg"
                    alt="Feel Alive Flip"
                    fill
                    className="object-cover blur-sm"
                  />
                </div>

                {/* Glossy overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10"></div>

                {/* Content */}
                <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                  <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 shadow-lg mb-3">
                    <Image
                      src="/alive.jpg"
                      alt="Feel Alive Flip"
                      width={64}
                      height={64}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl text-white drop-shadow-lg mb-1">
                      Feel Alive (DARK MATTER Flip)
                    </h3>
                    <p className="text-gray-200 text-sm drop-shadow-md">
                      Stylust
                    </p>
                  </div>
                </div>
              </div>
            </a>
            {/* Tour/Events Section */}
            <div className="border-t border-gray-700/50 pt-6 mt-8">
              <h2 className="text-2xl font-bold text-center mb-6">
                Upcoming Events
              </h2>

              {/* Synesthesia Festival */}
              <a
                href="https://www.stupidhappycollective.com/event-details/synesthesia-music-and-arts-festival-2025-1"
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border border-white/10 mb-4"
              >
                <div className="relative h-36 bg-gray-900/50">
                  {/* Glossy overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                    <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 shadow-lg mb-3 bg-gray-900 flex items-center justify-center">
                      <span className="text-xl font-bold">🎪</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-white drop-shadow-lg mb-1">
                        Synesthesia Festival 2025
                      </h3>
                      <p className="text-gray-200 text-sm drop-shadow-md">
                        Music & Arts Festival
                      </p>
                    </div>
                  </div>
                </div>
              </a>

              {/* Radiance NYE */}
              <a
                href="https://www.nyeradiance.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="group block w-full rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl shadow-lg border border-white/10"
              >
                <div className="relative h-36 bg-gray-900/50">
                  {/* Glossy overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-white/10"></div>

                  {/* Content */}
                  <div className="relative z-10 flex flex-col items-center justify-center h-full px-6 text-center">
                    <div className="w-16 h-16 rounded-lg overflow-hidden border-2 border-white/30 shadow-lg mb-3 bg-gray-900 flex items-center justify-center">
                      <span className="text-xl font-bold">🎆</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-white drop-shadow-lg mb-1">
                        Radiance NYE
                      </h3>
                      <p className="text-gray-200 text-sm drop-shadow-md">
                        New Year's Event
                      </p>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-white py-8 border-t border-gray-800">
          <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
            {/* Logo Section */}
            <div className="flex items-center mb-4">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-auto max-w-full object-contain"
              />
            </div>

            {/* Social Media Icons */}
            <div className="flex space-x-4 mb-6">
              {/* Instagram */}
              <a
                href="https://www.instagram.com/darkmatterbassmusic/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="hover:opacity-75 transition"
              >
                <img
                  src="/instagram-white-icon.png"
                  alt="Instagram"
                  className="h-6 w-6"
                />
              </a>

              {/* Facebook */}
              <a
                href="https://www.facebook.com/darkmatterbassmusic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
                className="hover:opacity-75 transition"
              >
                <img
                  src="/facebook-app-round-white-icon.png"
                  alt="Facebook"
                  className="h-6 w-6"
                />
              </a>

              {/* Spotify */}
              <a
                href="https://open.spotify.com/artist/71c783dJDlJ3pqD7cFIOQq?si=r1kWgk6GR5urDLEAUk65GQ"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Spotify"
                className="hover:opacity-75 transition"
              >
                <img
                  src="/spotify-icon.png"
                  alt="Spotify"
                  className="h-6 w-6"
                />
              </a>

              {/* SoundCloud */}
              <a
                href="https://soundcloud.com/darkmatterbassmusic"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="SoundCloud"
                className="hover:opacity-75 transition"
              >
                <img
                  src="/soundcloud-white-icon.png"
                  alt="SoundCloud"
                  className="h-6 w-6"
                />
              </a>
            </div>

            <div className="text-center text-sm text-gray-400">
              &copy; {new Date().getFullYear()} DARK MATTER BASS MUSIC LLC. All
              rights reserved.
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LinksPage;

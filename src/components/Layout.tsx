import Link from "next/link";

import useWishlistState from "../hooks/useWishlistState";
import useSnipcartCount from "../hooks/useSnipcartCount";

const Layout = ({ children }) => {
  const { hasItems } = useWishlistState();
  const { cart } = useSnipcartCount();
  const cartHasItems = cart.items.count !== 0;

  const closeMobileMenu = () => {
    const menu = document.getElementById("mobile-menu");
    if (menu) menu.classList.add("hidden");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="bg-black text-white w-screen sticky top-0 z-50">
        <nav className="px-6 py-4 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/" className="flex items-center">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-10 w-auto max-w-full object-contain"
            />
          </Link>

          {/* Hamburger Menu Button */}
          <button
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle navigation"
            onClick={() => {
              const menu = document.getElementById("mobile-menu");
              if (menu) menu.classList.toggle("hidden");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* Navigation Links */}
          <div
            id="mobile-menu"
            className="hidden fixed inset-0 bg-black bg-opacity-90 z-50 flex flex-col items-center justify-center space-y-6 md:relative md:flex md:flex-row md:items-center md:space-y-0 md:space-x-6 md:bg-transparent md:bg-opacity-0"
          >
            {/* Logo in Mobile Menu */}
            <Link
              href="/"
              className="flex items-center md:hidden"
              onClick={closeMobileMenu}
            >
              <img
                src="/logo.png"
                alt="Logo"
                className="h-12 w-auto max-w-full object-contain"
              />
            </Link>

            {/* Social Media Icons */}
            <div className="flex space-x-4 pb-10 md:hidden">
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

            {/* Close Button */}
            <button
              className="absolute top-4 right-4 text-white focus:outline-none md:hidden"
              aria-label="Close navigation"
              onClick={() => {
                const menu = document.getElementById("mobile-menu");
                if (menu) menu.classList.add("hidden");
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            {/* Wishlist and Cart Icons for Mobile */}
            <div className="flex items-center space-x-4 mb-4 md:hidden">
              <Link
                href="/profile"
                className="snipcart-customer-signin text-white hover:text-blue-400 transition"
                aria-label="Profile"
                onClick={closeMobileMenu}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path fill="none" d="M0 0h24V24H0z" />
                  <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
                </svg>
              </Link>
              <Link
                href="/wishlist"
                className="relative text-white hover:text-blue-400 transition"
                onClick={closeMobileMenu}
              >
                {hasItems && (
                  <span className="absolute bg-red-500 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path fill="none" d="M0 0H24V24H0z" />
                  <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
                </svg>
              </Link>
              <button
                className="snipcart-checkout text-white hover:text-blue-400 transition relative"
                aria-label="Cart"
                onClick={closeMobileMenu}
              >
                {cartHasItems && (
                  <span className="absolute bg-blue-500 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
                )}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path fill="none" d="M0 0h24V24H0z" />
                  <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </button>
            </div>

            <Link
              href="/music"
              className="text-lg md:text-sm lg:text-lg text-white hover:text-blue-400 transition"
              onClick={closeMobileMenu}
            >
              Music
            </Link>
            <Link
              href="/merch"
              className="text-lg md:text-sm lg:text-lg text-white hover:text-blue-400 transition"
              onClick={closeMobileMenu}
            >
              Merch
            </Link>
            <Link
              href="/tour"
              className="text-lg md:text-sm lg:text-lg text-white hover:text-blue-400 transition"
              onClick={closeMobileMenu}
            >
              Tour
            </Link>
            <Link
              href="/media"
              className="text-lg md:text-sm lg:text-lg text-white hover:text-blue-400 transition"
              onClick={closeMobileMenu}
            >
              Media
            </Link>
            <Link
              href="/producer_shop"
              className="text-lg md:text-sm lg:text-lg text-white hover:text-blue-400 transition"
              onClick={closeMobileMenu}
            >
              Producer Shop
            </Link>
          </div>

          {/* Wishlist and Cart Section for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            {/* Profile Icon */}
            <Link
              href="/profile"
              className="relative text-white hover:text-blue-400 transition"
              aria-label="Profile"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 lg:h-6 lg:w-6"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24V24H0z" />
                <path d="M4 22a8 8 0 1 1 16 0h-2a6 6 0 1 0-12 0H4zm8-9c-3.315 0-6-2.685-6-6s2.685-6 6-6 6 2.685 6 6-2.685 6-6 6zm0-2c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
              </svg>
            </Link>
            {/* Wishlist Icon */}
            <Link
              href="/wishlist"
              className="relative text-white hover:text-blue-400 transition"
            >
              {hasItems && (
                <span className="absolute bg-red-500 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 lg:h-6 lg:w-6"
                fill="currentColor"
              >
                <path fill="none" d="M0 0H24V24H0z" />
                <path d="M12.001 4.529c2.349-2.109 5.979-2.039 8.242.228 2.262 2.268 2.34 5.88.236 8.236l-8.48 8.492-8.478-8.492c-2.104-2.356-2.025-5.974.236-8.236 2.265-2.264 5.888-2.34 8.244-.228zm6.826 1.641c-1.5-1.502-3.92-1.563-5.49-.153l-1.335 1.198-1.336-1.197c-1.575-1.412-3.99-1.35-5.494.154-1.49 1.49-1.565 3.875-.192 5.451L12 18.654l7.02-7.03c1.374-1.577 1.299-3.959-.193-5.454z" />
              </svg>
            </Link>
            {/* Cart Icon */}
            <button
              className="snipcart-checkout text-white hover:text-blue-400 transition relative"
              aria-label="Cart"
            >
              {cartHasItems && (
                <span className="absolute bg-blue-500 rounded-full w-2 h-2 top-0 right-0 -mt-1 -mr-1"></span>
              )}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="h-5 w-5 lg:h-6 lg:w-6"
                fill="currentColor"
              >
                <path fill="none" d="M0 0h24V24H0z" />
                <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
              </svg>
            </button>
          </div>
        </nav>
      </header>
      <main className="flex-grow w-screen overflow-hidden">
        <div className="w-screen">{children}</div>
      </main>
      {/* Footer Section */}
      <footer className="bg-black text-white py-8">
        <div className="max-w-6xl mx-auto px-6 flex flex-col items-center">
          {/* Logo Section */}
          <Link href="/" className="flex items-center mb-4 md:mb-0">
            <img
              src="/logo.png"
              alt="Logo"
              className="h-12 w-auto max-w-full object-contain"
            />
          </Link>

          {/* Social Media Icons */}
          <div className="flex space-x-4 mb-6 md:mt-4">
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
              <img src="/spotify-icon.png" alt="Spotify" className="h-6 w-6" />
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

          {/* Navigation Links */}
          <nav className="flex flex-wrap justify-center space-x-6">
            <Link
              href="/music"
              className="text-sm text-white hover:text-blue-400 transition"
            >
              Music
            </Link>
            <Link
              href="/merch"
              className="text-sm text-white hover:text-blue-400 transition"
            >
              Merch
            </Link>
            <Link
              href="/tour"
              className="text-sm text-white hover:text-blue-400 transition"
            >
              Tour
            </Link>
            <Link
              href="/media"
              className="text-sm text-white hover:text-blue-400 transition"
            >
              Media
            </Link>
            <Link
              href="/producer_shop"
              className="text-sm text-white hover:text-blue-400 transition"
            >
              Producer Shop
            </Link>
          </nav>
        </div>
        <div className="text-center mt-6 text-sm text-gray-400">
          &copy; {new Date().getFullYear()} DARK MATTER BASS MUSIC LLC. All
          rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;

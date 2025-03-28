import Link from "next/link";

import useWishlistState from "../hooks/useWishlistState";
import useSnipcartCount from "../hooks/useSnipcartCount";

const Layout = ({ children }) => {
  const { hasItems } = useWishlistState();
  const { cart } = useSnipcartCount();
  const cartHasItems = cart.items.count !== 0;

  return (
    <>
      <header className="bg-black text-white">
        <nav className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          {/* Logo Section */}
          <Link href="/">
            <a className="flex items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-8 w-auto mr-3 lg:h-10"
              />
            </a>
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
              <button
                className="snipcart-customer-signin text-white hover:text-blue-400 transition"
                aria-label="User login"
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
              </button>
              <Link href="/wishlist">
                <a className="relative text-white hover:text-blue-400 transition">
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
                </a>
              </Link>
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
                  className="h-6 w-6"
                  fill="currentColor"
                >
                  <path fill="none" d="M0 0h24V24H0z" />
                  <path d="M4 16V4H2V2h3a1 1 0 0 1 1 1v12h12.438l2-8H8V5h13.72a1 1 0 0 1 .97 1.243l-2.5 10a1 1 0 0 1-.97.757H5a1 1 0 0 1-1-1zm2 7a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm12 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" />
                </svg>
              </button>
            </div>

            <Link href="/music">
              <a className="text-lg md:text-sm lg:text-lg text-white hover:text-blue-400 transition">
                Music
              </a>
            </Link>
            <Link href="/merch">
              <a className="text-lg md:text-sm lg:text-lg text-white hover:text-blue-400 transition">
                Merch
              </a>
            </Link>
            <Link href="/tour">
              <a className="text-lg md:text-sm lg:text-lg text-white hover:text-blue-400 transition">
                Tour
              </a>
            </Link>
            <Link href="/media">
              <a className="text-lg md:text-sm lg:text-lg text-white hover:text-blue-400 transition">
                Media
              </a>
            </Link>
            <Link href="/mentoring">
              <a className="text-lg md:text-sm lg:text-lg text-white hover:text-blue-400 transition">
                Mentoring
              </a>
            </Link>
            <Link href="/commissions">
              <a className="text-lg md:text-sm lg:text-lg text-white hover:text-blue-400 transition">
                Commissions
              </a>
            </Link>
          </div>

          {/* Wishlist and Cart Section for Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <button
              className="snipcart-customer-signin text-white hover:text-blue-400 transition"
              aria-label="User login"
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
            </button>
            <Link href="/wishlist">
              <a className="relative text-white hover:text-blue-400 transition">
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
              </a>
            </Link>
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
      <main className="py-6">
        <div className="max-w-6xl mx-auto px-6">{children}</div>
      </main>
      <footer className="bg-black text-white py-4">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <p>
            &copy; {new Date().getFullYear()} DARK MATTER LLC. All rights
            reserved.
          </p>
        </div>
      </footer>
    </>
  );
};

export default Layout;

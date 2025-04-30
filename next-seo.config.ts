const description =
  "Discover DARK MATTER, an EDM producer duo specializing in Dubstep. Explore our music, mentoring programs, exclusive sample packs, and merch for sale. Join the DARK MATTER experience today!";
const title = "DARK MATTER - EDM Producer Duo";
const url = "https://darkmatterbassmusic.com";

const seo = {
  title,
  titleTemplate: "%s",
  description,
  openGraph: {
    description,
    title,
    type: "website",
    url,
  },
  twitter: {
    handle: "@darkmatterbassmusic",
    site: "@darkmatterbassmusic",
  },
};

export { seo as defaultSEO, url as defaultUrl };

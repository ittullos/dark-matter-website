const description =
  "Launch your own fully automated store with Snipcart, Printful, and Next.js";
const title = "DARK MATTER BASS MUSIC";
const url = "https://swag.nextdropshippingstarter.com";

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
    handle: "@notrab",
    site: "@notrab",
  },
};

export { seo as defaultSEO, url as defaultUrl };

module.exports = {
  reactStrictMode: true,
  images: {
    unoptimized: true,
    domains: ["files.cdn.printful.com"],
  },
  // Netlify's static hosting already resolves /admin to /admin/index.html
  // in production with no visible redirect — `next dev` doesn't, so this
  // matches that locally only, without risking any change to prod
  // behavior. Must be a redirect (not a rewrite): Decap resolves
  // config.yml relative to the browser's actual URL, so the address bar
  // needs to show /admin/index.html, not silently serve that content
  // while still showing /admin.
  async redirects() {
    if (process.env.NODE_ENV === "production") return [];

    return [
      {
        source: "/admin",
        destination: "/admin/index.html",
        permanent: false,
      },
    ];
  },
};


import { AppProps } from "next/app";
import { DefaultSeo } from "next-seo";
import { useRouter } from "next/router";

import "tailwindcss/tailwind.css";
import "../styles/app.css";

import { defaultSEO } from "../../next-seo.config";
import { WishlistProvider } from "../context/wishlist";
import Layout from "../components/Layout";

function MyApp({ Component, pageProps }: AppProps) {
  const router = useRouter();
  const isLinksPage = router.pathname === "/links";

  return (
    <WishlistProvider>
      {isLinksPage ? (
        <>
          <DefaultSeo {...defaultSEO} />
          <Component {...pageProps} />
        </>
      ) : (
        <Layout>
          <DefaultSeo {...defaultSEO} />
          <Component {...pageProps} />
        </Layout>
      )}
    </WishlistProvider>
  );
}

export default MyApp;

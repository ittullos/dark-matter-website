import { useState, useEffect } from "react";
import { GetStaticProps } from "next";
import shuffle from "lodash.shuffle";

import { printful } from "../lib/printful-client";
import { formatVariantName } from "../lib/format-variant-name";
import { PrintfulProduct } from "../types";

import ProductGrid from "../components/ProductGrid";

type MerchPageProps = {
  products: PrintfulProduct[];
};

const Merch: React.FC<MerchPageProps> = ({ products }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(false); // Simulate loading completion
  }, []);

  if (isLoading) {
    return (
      <div className="max-w-6xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-4">Merch</h1>
        <p className="text-lg text-gray-400 mb-6">Loading merchandise...</p>
        {/* Add a spinner or skeleton UI here */}
        <div className="animate-pulse">
          <div className="h-6 bg-gray-700 rounded mb-4"></div>
          <div className="h-6 bg-gray-700 rounded mb-4"></div>
          <div className="h-6 bg-gray-700 rounded mb-4"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-6 py-12">
      <h1 className="text-3xl font-bold mb-4">Merch</h1>
      <p className="text-lg text-gray-400 mb-6">
        Browse and purchase our exclusive merchandise.
      </p>
      <ProductGrid products={products} />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { result: productIds } = await printful.get("sync/products");

  const allProducts = await Promise.all(
    productIds.map(async ({ id }) => await printful.get(`sync/products/${id}`))
  );

  const products: PrintfulProduct[] = allProducts.map(
    ({ result: { sync_product, sync_variants } }) => ({
      ...sync_product,
      variants: sync_variants.map(({ name, ...variant }) => ({
        name: formatVariantName(name),
        ...variant,
      })),
    })
  );

  return {
    props: {
      products: shuffle(products),
    },
  };
};

export default Merch;

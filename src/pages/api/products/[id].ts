import type { NextApiRequest, NextApiResponse } from "next";
import { printful } from "../../../lib/printful-client";

type Data = {
  id: string;
  name: string;
  price: number;
  description: string;
  image: string;
  url: string;
};

type Error = {
  errors: { key: string; message: string }[];
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data | Error>
) {
  const { id } = req.query;

  try {
    console.log("API Request ID:", id);

    // Fetch the product variant details from Printful
    const variantUrl = `store/variants/@${id}`;
    console.log("Fetching variant from:", variantUrl);
    const { result } = await printful.get(variantUrl);
    console.log("Variant Result:", result);

    // Extract sync_product_id from the variant response
    const syncProductId = result.sync_product_id;
    if (!syncProductId) {
      console.error("Variant Response Missing sync_product_id:", result);
      throw new Error(
        `sync_product_id is missing in the variant response for ID: ${id}`
      );
    }

    // Fetch the product details (parent product) for additional info
    const productUrl = `store/products/${syncProductId}`;
    console.log("Fetching parent product from:", productUrl);
    const { result: product } = await printful.get(productUrl);
    console.log("Parent Product Result:", product);

    res.setHeader("Cache-Control", "s-maxage=3600, stale-while-revalidate");

    res.status(200).json({
      id: id as string,
      name: result.name,
      price: result.retail_price,
      description: product.description || "No description available",
      image:
        result.files.find((file: any) => file.type === "preview")
          ?.preview_url || "",
      url: `/api/products/${id}`,
    });
  } catch (error) {
    console.error("Error fetching product:", error);

    res.status(404).json({
      errors: [
        {
          key: error?.message || "Unknown Error",
          message: `Failed to fetch product with ID: ${id}`,
        },
      ],
    });
  }
}

export const formatVariantName = (variantName: string): string => {
  // If the variant name contains " - ", take the part after it (original logic)
  if (variantName.includes(" - ")) {
    const [, name] = variantName.split(" - ");
    return name || variantName;
  }

  // If the variant name contains " / ", take the last part (common Printful format)
  if (variantName.includes(" / ")) {
    const parts = variantName.split(" / ");
    return parts[parts.length - 1];
  }

  // If it's just a size/variant name without separators, return it as-is
  // This handles cases like "S", "M", "L", "XL", "Small", "Medium", etc.
  return variantName || "One style";
};

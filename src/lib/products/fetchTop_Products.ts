import { products } from "./placeholderdata";

export async function fetchTop_Products() {
  try {
    // const productsData = products;
    const topProducts = [...products]
      .sort((a, b) => b.totalSold - a.totalSold)
      .slice(0.5);
    // console.log(`productsData is :${productsData}`);
    return topProducts;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all products.");
  }
}

import { products } from "./placeholderdata";

export async function fetchLowStock_Products() {
  try {
    const productsData = products;
    const lowStockProducts = [...products]
      .sort((a, b) => a.stock - b.stock)
      .slice(0, 5);
    // console.log(`productsData is :${productsData}`);
    return lowStockProducts;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all products.");
  }
}

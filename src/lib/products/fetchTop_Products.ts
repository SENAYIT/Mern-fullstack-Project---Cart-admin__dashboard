import { products } from "./placeholderdata";

export async function fetchTop_Products() {
  try {
    const productsData = products;
    // console.log(`productsData is :${productsData}`);
    return productsData;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all products.");
  }
}

import { products } from "./placeholderdata";

export async function fetchProductById(id: string) {
  try {
    const data = products.find((product) => product._id === id);
    // console.log(`success full fetchby id data : ${data}`); // Invoice is an empty array []
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch product.");
  }
}

import { orders } from "./placeholderdata";

export async function fetchOrderById(id: string) {
  try {
    const data = orders.find((order) => order._id === id);
    // here i updated to the handling errors chapter 12 lessons

    // console.log(`success full fetchby id data : ${data}`); // Invoice is an empty array []
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch order.");
  }
}

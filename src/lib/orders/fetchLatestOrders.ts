import { orders } from "./placeholderdata";

export async function fetchLatestOrders() {
  try {
    const ordersData = orders;
    // console.log(`ordersData is :${ordersData}`);
    return ordersData;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch Latest orders.");
  }
}

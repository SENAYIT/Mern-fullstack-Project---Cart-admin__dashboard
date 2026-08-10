import { orders } from "./placeholderdata";
export async function fetchOrders() {
  try {
    const ordersData = orders;

    // console.log(`ordersData is :${ordersData}`);
    // console.log(`orders total pages is is :${totalPages}`);

    return { orders: ordersData };
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all orders.");
  }
}

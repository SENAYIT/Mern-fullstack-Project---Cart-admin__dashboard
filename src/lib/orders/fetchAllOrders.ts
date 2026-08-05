import { orders } from "./placeholderdata";
import { CalcuDataPages } from "../calcuDataPages";
export async function fetchOrders() {
  try {
    const ordersData = orders;
    const totalPages = CalcuDataPages(orders);

    // console.log(`ordersData is :${ordersData}`);
    // console.log(`orders total pages is is :${totalPages}`);

    return { orders: ordersData, total: totalPages };
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all orders.");
  }
}

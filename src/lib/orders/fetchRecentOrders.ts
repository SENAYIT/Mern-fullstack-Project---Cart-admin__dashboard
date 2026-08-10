import { orders } from "./placeholderdata";

export async function fetchRecentOrders() {
  try {
    const RecentOrders = [...orders]
      .sort(
        (a, b) =>
          new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
      )
      .slice(0, 5);

    const RecentData = RecentOrders;
    // console.log(`ordersData is :${ordersData}`);
    return RecentData;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch Latest orders.");
  }
}

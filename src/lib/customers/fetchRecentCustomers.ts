import { customers } from "./placeholder-data";

export async function fetchRecentCustomers() {
  const RecentCustomers = [...customers]
    .sort(
      (a, b) =>
        new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
    )
    .slice(0, 5);

  try {
    return RecentCustomers;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch searched customers.");
  }
}

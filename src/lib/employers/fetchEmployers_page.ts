import { employers } from "./placeholder-data";
import { ITEMS_PER_PAGE } from "./items_per_page";

export async function fetchEmployersPages(query: string) {
  try {
    const data = employers.length;
    console.log(`data:${data}`);
    const totalPages = Math.ceil(Number(data) / ITEMS_PER_PAGE);
    return totalPages;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch total number of employes.");
  }
}

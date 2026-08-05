import { customers } from "./placeholder-data";

export async function fetchCustomers() {
  try {
    const customersData = customers;

    return customersData;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all customers.");
  }
}

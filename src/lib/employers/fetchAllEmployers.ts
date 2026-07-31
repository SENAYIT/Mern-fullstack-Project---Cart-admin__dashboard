import { employers } from "./placeholder-data";

export async function fetchEmployers() {
  try {
    const employersData = employers;
    console.log(`employerData is :${employersData}`);
    return employersData;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch all employees.");
  }
}

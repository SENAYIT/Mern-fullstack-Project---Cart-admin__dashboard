import { customers } from "./placeholder-data";

export async function fetchCustomerById(id: string) {
  try {
    const data = customers.find((customer) => customer._id === id);

    console.log(`successful fetch by id data: ${data}`);

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch customer.");
  }
}

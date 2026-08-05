import { customers } from "./placeholder-data";
import { ITEMS_PER_PAGE } from "../items_per_page";

export async function fetchFilteredCustomers(
  status: string = "",
  query?: string,
  currentPage: number = 1,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    let filteredCustomers = customers;

    // console.log(`status: ${status}`);

    // filter by status
    if (status) {
      filteredCustomers = filteredCustomers.filter(
        (customer) => customer.status.toLowerCase() === status,
      );
    }

    // search query
    if (query) {
      filteredCustomers = filteredCustomers.filter(
        (customer) =>
          customer.name.toLowerCase().includes(query.toLowerCase()) ||
          customer.email.toLowerCase().includes(query.toLowerCase()) ||
          customer.phoneNumber.includes(query),
      );
    }

    const dataLength = filteredCustomers.length;
    const totalPages = Number(Math.ceil(Number(dataLength) / ITEMS_PER_PAGE));

    // pagination
    const paginatedCustomers = filteredCustomers.slice(
      offset,
      offset + ITEMS_PER_PAGE,
    );

    return {
      totalPages,
      customersData: paginatedCustomers,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch searched customers.");
  }
}

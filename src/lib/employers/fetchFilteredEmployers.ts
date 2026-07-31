import { employers } from "./placeholder-data";
import { ITEMS_PER_PAGE } from "./items_per_page";

export async function fetchFilteredEmployers(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    // const response = await fetch("http://localhost:4000/api/customers/");
    // const response = await fetch(`${BASE_URL}/api/customers/`);

    // const resdata = await response.json();

    // console.log(resdata?.data);
    // const employers = resdata?.data;

    const employees = employers.filter((employee) =>
      query
        ? employee.email.toLowerCase().includes(query.toLowerCase()) ||
          employee.name.toLowerCase().includes(query.toLowerCase()) ||
          employee.phoneNumber.includes(query)
        : true,
    );

    console.log(`offset at the fetchfiltered page:${offset}`);
    console.log(`employees list at the fetchfilterd page ${employees}`);
    return employees;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch searched employees.");
  }
}

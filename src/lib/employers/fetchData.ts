import { employers } from "./placeholder-data";
// import { baseURL } from "./baseUrl";

const ITEMS_PER_PAGE = 6;
export async function fetchFilteredEmployers(
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    // // const response = await fetch("http://localhost:4000/api/customers/");
    // const response = await fetch(`${baseURL}/api/customers/`);

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
// updating at the handling errors chapter 12 lessons
export async function fetchEmployeeById(id: string) {
  try {
    const data = employers.find((empoyee) => empoyee._id === id);
    // here i updated to the handling errors chapter 12 lessons

    console.log(`success full fetchby id data : ${data}`); // Invoice is an empty array []
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch employee.");
  }
}

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

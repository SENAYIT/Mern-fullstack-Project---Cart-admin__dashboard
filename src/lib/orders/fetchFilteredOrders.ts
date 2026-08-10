import { orders } from "./placeholderdata";
import { ITEMS_PER_PAGE } from "../items_per_page";

export async function fetchFilteredOrders(
  status: string,
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    let filteredOrders = orders;

    console.log(`status: ${status}`);

    // filter by status
    if (status) {
      filteredOrders = filteredOrders.filter(
        (order) => order.status.toLowerCase() === status,
      );
    }

    // search query
    if (query) {
      filteredOrders = filteredOrders.filter(
        (order) =>
          order.customer.toLowerCase().includes(query.toLowerCase()) ||
          order.payment.toLowerCase().includes(query.toLowerCase()) ||
          order.status.toLowerCase().includes(query.toLowerCase()) ||
          order._id.includes(query),
      );
    }
    const dataLength = filteredOrders.length;
    const totalPages = Number(Math.ceil(Number(dataLength) / ITEMS_PER_PAGE));

    // pagination
    const paginatedOrders = filteredOrders.slice(
      offset,
      offset + ITEMS_PER_PAGE,
    );

    // console.log(`items per page: ${ITEMS_PER_PAGE}`);
    return {
      totalPages,
      orders: paginatedOrders,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch searched orders.");
  }
}

// const response = await fetch("http://localhost:4000/api/customers/");
// const response = await fetch(`${BASE_URL}/api/customers/`);

// const resdata = await response.json();

// console.log(resdata?.data);
// const employers = resdata?.data;

/////////

// const filteredOrders = orders.filter((order) =>
//   status && query
//     ? order.status.toLowerCase().includes(status.toLowerCase()) &&
//       order.customer.toLowerCase().includes(query.toLowerCase())
//     : status
//       ? order.status.toLowerCase().includes(status.toLowerCase())
//       : query
//         ? order.customer.toLowerCase().includes(query.toLowerCase())
//         : true,
// );
// const filteredOrders = orders.filter((order) => {
//   const matchesStatus = status
//     ? order.status.toLowerCase().includes(status.toLowerCase())
//     : true;

//   const matchesCustomer = query
//     ? order.customer.toLowerCase().includes(query.toLowerCase())
//     : true;

//   return matchesStatus && matchesCustomer;
// });

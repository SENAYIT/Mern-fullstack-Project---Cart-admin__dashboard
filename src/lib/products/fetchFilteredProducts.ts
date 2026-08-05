import { products } from "./placeholderdata";
import { ITEMS_PER_PAGE } from "../items_per_page";

export async function fetchFilteredProducts(
  status = "",
  query: string,
  currentPage: number,
) {
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  try {
    let filteredProducts = products;

    // console.log(`status: ${status}`);

    // filter by status
    if (status) {
      filteredProducts = filteredProducts.filter(
        (product) => product.status.toLowerCase() === status,
      );
    }

    // search query
    if (query) {
      filteredProducts = filteredProducts.filter(
        (product) =>
          product.name.toLowerCase().includes(query.toLowerCase()) ||
          product.description.toLowerCase().includes(query.toLowerCase()) ||
          product.status.includes(query),
      );
    }

    const dataLength = filteredProducts.length;
    const totalPages = Number(Math.ceil(Number(dataLength) / ITEMS_PER_PAGE));

    // pagination
    const paginatedProducts = filteredProducts.slice(
      offset,
      offset + ITEMS_PER_PAGE,
    );

    return {
      totalPages: totalPages,
      productData: paginatedProducts,
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch searched products.");
  }
}

// const response = await fetch("http://localhost:4000/api/product/all");
// const response = await fetch(`${BASE_URL}/api/product/all`);

// const resdata = await response.json();

// console.log(resdata?.data);
// const products = resdata?.data;

// const filteredProducts = products.filter((product) => {
//   const matchesStatus = status
//     ? product.status.toLowerCase().includes(status.toLowerCase())
//     : true;

//   const matchesProduct = query
//     ? product.name.toLowerCase().includes(query.toLowerCase()) ||
//       product.description.toLowerCase().includes(query.toLowerCase()) ||
//       product.status.includes(query)
//     : true;

//   return matchesStatus && matchesProduct;
// });

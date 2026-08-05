import {
  revenuesReport,
  ordersReport,
  customersReport,
  productsReport,
  revenue_data_perMonth,
} from "./overallReports_placeholderData";

export async function fetch_revenues_monthly_data() {
  try {
    const revenuesData = revenue_data_perMonth;
    // console.log(`revenuesData is :${revenuesData}`);
    return revenuesData;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch revenues report data.");
  }
}

export async function fetch_revenuesReport() {
  try {
    const revenuesData = revenuesReport;
    // console.log(`revenuesData is :${revenuesData}`);
    return revenuesData;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch revenues report data.");
  }
}

export async function fetch_ordersReport() {
  try {
    const ordersData = ordersReport;
    // console.log(`ordersData is :${ordersData}`);
    return ordersData;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch orders data report");
  }
}

export async function fetch_customersReport() {
  try {
    const customersData = customersReport;
    // console.log(`customersData is :${customersData}`);
    return customersData;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch Customers Report data");
  }
}

export async function fetch_productsReport() {
  try {
    const productsData = productsReport;
    // console.log(`productsData is :${productsData}`);
    return productsData;
  } catch (err) {
    console.error("Database Error:", err);
    throw new Error("Failed to fetch Products report Data");
  }
}

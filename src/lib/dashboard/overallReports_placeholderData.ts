import { Report, Report_per_month } from "./overallReports_definitions";

export const revenue_data_perMonth: Report_per_month[] = [
  { month: "Jan", value: 2000 },
  { month: "Feb", value: 1800 },
  { month: "Mar", value: 2200 },
  { month: "Apr", value: 2500 },
  { month: "May", value: 2300 },
  { month: "Jun", value: 3200 },
  { month: "Jul", value: 3500 },
  { month: "Aug", value: 3700 },
  { month: "Sep", value: 2500 },
  { month: "Oct", value: 2800 },
  { month: "Nov", value: 3000 },
  { month: "Dec", value: 4800 },
];

export const revenuesReport: Report = {
  title: "Revenue",
  total: "1,250",
  newToday: "+25",
  growth: "+12%",
};

export const customersReport: Report = {
  title: "Customers",
  total: "1,250",
  newToday: "+25",
  growth: "+12%",
};

export const ordersReport: Report = {
  title: "Orders",
  total: "1,250",
  newToday: "+25",
  growth: "+12%",
};

export const productsReport: Report = {
  title: "Products",
  total: "1,250",
  newToday: "+25",
  growth: "+12%",
};

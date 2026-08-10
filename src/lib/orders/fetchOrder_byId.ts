import { fetchExternalImage } from "next/dist/server/image-optimizer";
import { orders } from "./placeholderdata";

export async function fetchOrderById(id: string) {
  try {
    const data = orders.find((order) => order._id === id);
    // here i updated to the handling errors chapter 12 lessons
    // console.log(`success full fetchby id data : ${data}`); // Invoice is an empty array []
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch order.");
  }
}

// total orders , and each order status total ,,
// OrderStatus = "new" | "pending" | "completed" | "cancelled";
export async function fetchOrderByCustomerId(id: string) {
  try {
    const customerId = id;
    // console.log(
    //   `customer id that matches the input id result is : ${customerId}`,
    // );
    const all_ordersData = orders.filter(
      (order) => order.customer === customerId,
    );

    // for all status of order show
    const newOrders = all_ordersData?.filter((order) => order.status === "new");
    const pendingOrders = all_ordersData?.filter(
      (order) => order.status === "pending",
    );
    const completedOrders = all_ordersData?.filter(
      (order) => order.status === "completed",
    );
    const cancelledOrders = all_ordersData?.filter(
      (order) => order.status === "cancelled",
    );

    const customerOrdersData = [
      {
        type: "all_orders",
        data: all_ordersData,
        total: all_ordersData.length,
      },
      {
        type: "new_Orders",
        data: newOrders,
        total: newOrders.length,
      },
      {
        type: "pending_orders",
        data: pendingOrders,
        total: pendingOrders.length,
      },
      {
        type: "completed_orders",
        data: completedOrders,
        total: completedOrders.length,
      },

      {
        type: "cancelled_orders",
        data: cancelledOrders,
        total: cancelledOrders.length,
      },
    ];

    // console.log(
    //   `customer id that matches the input id result is : ${JSON.stringify(customerOrdersData)}`,
    // );

    return customerOrdersData;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch order.");
  }
}

///// for  payment total , for each status
// ///////////////////
// export type  orders PaymentStatus = "Pending" | "Not Paid" | "Paid";
export async function fetchOrderPaymentByCustomerId(id: string) {
  try {
    const customerId = id;
    // console.log(
    //   `customer id that matches the input id result is : ${customerId}`,
    // );
    const all_ordersData = orders.filter(
      (order) => order.customer === customerId,
    );
    // for all status of order show
    const pendingPayment = all_ordersData?.filter(
      (order) => order.payment === "Pending",
    );
    const paidPayment = all_ordersData?.filter(
      (order) => order.payment === "Paid",
    );
    const not_paidPayment = all_ordersData?.filter(
      (order) => order.payment === "Not Paid",
    );

    const customerOrdersPaymentData = [
      { all_orders: { data: all_ordersData, total: all_ordersData.length } },
      { paid_Orders_payment: { data: paidPayment, total: paidPayment.length } },
      {
        pending_orders_payment: {
          data: pendingPayment,
          total: pendingPayment.length,
        },
      },
      {
        notPayed_orders_payment: {
          data: not_paidPayment,
          total: not_paidPayment.length,
        },
      },
    ];

    // console.log(
    //   `fetch customer's order by customers payemnte statemen is : ${JSON.stringify(customerOrdersPaymentData)}`,
    // );

    return customerOrdersPaymentData;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch order.");
  }
}

// for calculations
export async function fetchTotalPaymentByCustomerId(id: string) {
  try {
    const customerId = id;
    // console.log(
    //   `customer id that matches the input id result is : ${customerId}`,
    // );

    const data = await fetchOrderPaymentByCustomerId(id);
    // console.log(
    //   `fetch total payment status in orders : ${JSON.stringify(data)}`,
    // );

    const paidBalance = 300;
    const pendingBalance = 100;
    const notPaidBalance = 200;
    const customerPaymentData = [
      { paid_payment: paidBalance },
      {
        pending_payment: pendingBalance,
      },
      {
        notPayed_payment: notPaidBalance,
      },
    ];

    // console.log(
    //   `fetch customers total payment status in orders Payment : ${JSON.stringify(customerPaymentData)}`,
    // );
    return customerPaymentData;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch Customers Payment Data.");
  }
}

// await fetchOrderByCustomerId("cust-001");
// await fetchOrderPaymentByCustomerId("cust-001");
// await fetchTotalPaymentByCustomerId("cust-001");

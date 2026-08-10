import DetailLayout from "../common/detail/detailLayout";
import DetailHeader from "../common/detail/detailHeader";
import InfoCard from "../common/detail/infoCard";
// import StatsCard from "../common/detail/statsCard";
import Timeline from "../common/detail/timeline";
import { Customer } from "@/lib/customers/definitions";
import { fetchOrderByCustomerId } from "@/lib/orders/fetchOrder_byId";
// import DataTable from "../common/detail/dataTable";
import DetailDataShow from "./detailDatashow";
import ActionButtons from "../common/detail/actionButtons";

import {
  UpdateCustomer,
  DeleteCustomer,
  CreateCustomer,
} from "@/ui/customers/actionButtons";

export type CustomerDetailProps = {
  customer: Customer;
};
// for getting the customers orders and payments
export async function GetCustomerOrders(cust_id: string) {
  const orders = await fetchOrderByCustomerId(cust_id);
  let totalOrders = 0;
  let message = "";
  let totalPayment = 1200;
  const payment = `$ ${totalPayment}`;

  if (!orders) {
    message = "There is no Orders";
    totalOrders = 0;
    return { message, totalOrders, payment };
  }
  const all_Orders = orders[0] || null;
  totalOrders = all_Orders.total || 0;

  const orderstotal = {
    total: totalOrders,
    new: orders[1].total,
    pending: orders[2].total,
    completed: orders[3].total,
    canceled: orders[4].total,
  };
  return { message, all_Orders, orderstotal, payment };
}

export default async function CustomerDetail({
  customer,
}: CustomerDetailProps) {
  const { _id, name, status, email, phoneNumber } = customer;
  const { message, all_Orders, orderstotal, payment } =
    await GetCustomerOrders(_id);
  return (
    <DetailLayout>
      <DetailHeader
        title={name}
        subtitle={`Customer ID: ${_id}`}
        status={status}
        editUrl={`/dashboard/customers/${_id}/edit`}
      />

      <InfoCard
        title="Customer Information"
        items={[
          {
            label: "Email",
            value: email,
          },
          {
            label: "Phone",
            value: phoneNumber,
          },
        ]}
      />
      <InfoCard
        title="Orders"
        items={[
          {
            label: "Total",
            value: Number(orderstotal?.total),
          },
          {
            label: "New",
            value: Number(orderstotal?.new),
          },
          {
            label: "Pending",
            value: Number(orderstotal?.pending),
          },
          {
            label: "Completed",
            value: Number(orderstotal?.completed),
          },
          {
            label: "Canceled",
            value: Number(orderstotal?.canceled),
          },
        ]}
      />

      {!all_Orders && <p>{message}</p>}
      {all_Orders && <DetailDataShow orders={all_Orders.data} />}

      <Timeline items={["Account Created", "First Order"]} />
      <ActionButtons>
        <CreateCustomer />
        <UpdateCustomer id={customer._id} />
        <DeleteCustomer id={customer._id} />
      </ActionButtons>
    </DetailLayout>
  );
}

//  <DetailLayout>

// <DetailHeader {...customerHeader}/>

// <InfoCard {...customerInfo}/>

// <StatsCard {...customerStats}/>

// <DataTable {...orders}/>

// <Timeline {...timeline}/>

// <ActionButtons {...actions}/>

// </DetailLayout>

//    const columnsName = [
//     {
//       header: "Order ID",
//       accessor: "_id",
//     },
//     {
//       header: "Customer",
//       accessor: "customer",
//     },
//     {
//       header: "Total",
//       accessor: "totalPrice",
//     },
//     {
//       header: "Payment",
//       accessor: "payment",
//     },
//     {
//       header: "Status",
//       accessor: "status",
//     },
//   ] as const;

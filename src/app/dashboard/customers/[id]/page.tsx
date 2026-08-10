import { Order } from "@/lib/orders/definitions";
import { fetchCustomerById } from "@/lib/customers/fetchCustomer_byId";
import { notFound } from "next/navigation";

import CustomerDetail from "@/components/customer/customerDetail";
import { fetchOrderByCustomerId } from "@/lib/orders/fetchOrder_byId";

export default async function DetailHomePage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const customer_id = params.id;
  const id = customer_id;

  const customer = await fetchCustomerById(id);

  if (!customer_id || !customer) {
    return notFound();
  }

  // for the specific customer order fetch by id from the orders
  const order: Order[] = [
    {
      _id: "ord-001",
      customer: "John Smith (cust-001)",
      products: [
        { product: "prod-001", quantity: 2 },
        { product: "prod-002", quantity: 1 },
      ],
      totalPrice: 159.97,
      payment: "Pending",
      status: "pending",
      createdAt: "2026-07-31T10:00:00.000Z",
      updatedAt: "2026-07-31T10:00:00.000Z",
    },
  ];

  const customerOrders = order;
  return (
    <main>
      <CustomerDetail
        customer={customer}
        // orders={customerOrders}
        // totalOrders={20}
        // totalPayment={200}
      />
    </main>
  );
}

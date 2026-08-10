import { fetchOrderById } from "@/lib/orders/fetchOrder_byId";
import { notFound } from "next/navigation";
import OrderDetail from "@/components/order/orderDetail";
// import { fetchCustomerById } from "@/lib/customers/fetchCustomer_byId";

export default async function DetailHomePage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const paramsValue = await params;
  const order_id = paramsValue.id;
  const id = order_id;
  const order = await fetchOrderById(id);
  if (!order_id || !order) {
    return notFound();
  }
  // const customerId = order?.customer;
  // const customer = await fetchCustomerById(customerId);
  // const products = order?.products;

  return (
    <main>
      {/* <p>orders detail page for the order Id -{order._id}</p> */}
      <OrderDetail order={order} />
      {/* <OrderDetail order={order} customer={customer} products={products} /> */}
    </main>
  );
}

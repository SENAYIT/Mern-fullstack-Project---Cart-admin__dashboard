import EditOrderForm from "@/ui/orders/edit-form";
import { fetchOrderById } from "@/lib/orders/fetchOrder_byId";
import { notFound } from "next/navigation";

export default async function EditOrderPage({
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
  return (
    <main>
      <h1> Orders edit Page </h1>
      <div>
        <h2>Editing order: {order._id}</h2>
        <p>Order Id: {order._id}</p>
        <p>Customer: {order.customer}</p>
      </div>
      <EditOrderForm order={order} />
    </main>
  );
}

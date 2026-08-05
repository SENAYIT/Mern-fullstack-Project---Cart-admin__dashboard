import { fetchOrderById } from "@/lib/orders/fetchOrder_byId";
import { notFound } from "next/navigation";

export default async function DetailHomePage(props: {
  params: Promise<{ id: string }>;
}) {
  const params = await props.params;
  const order_id = params.id;
  const id = order_id;
  const order = await fetchOrderById(id);

  if (!order_id || !order) {
    return notFound();
  }

  return (
    <main>
      <p>orders detail page</p>
    </main>
  );
}

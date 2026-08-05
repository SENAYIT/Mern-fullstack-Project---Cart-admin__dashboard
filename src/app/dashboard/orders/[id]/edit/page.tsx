import { fetchOrderById } from "@/lib/orders/fetchOrder_byId";
import { notFound } from "next/navigation";
import EditOrderForm from "@/ui/orders/edit-form";

export default async function EditOrderPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(`edited id is:${id} `);

  const order = await fetchOrderById(id);

  if (!id || !order) {
    return notFound();
  }

  return (
    <main>
      <h1> Orders edit Page </h1>
      <div>Editing order: {id}</div>

      <EditOrderForm order={order} />
    </main>
  );
}

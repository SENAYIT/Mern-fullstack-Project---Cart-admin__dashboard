import { deleteOrder } from "@/lib/orders/delete_action";
import {
  Create,
  DeleteButton,
  Detail,
  Update,
} from "@/ui/commonForAll/editActionButtons_link";

export function CreateOrder() {
  return <Create href="/dashboard/orders/create" text={"Create Order"} />;
}

export function DetailOrder({ id }: { id: string }) {
  return <Detail href={`/dashboard/orders/${id}`} />;
}

export function UpdateOrder({ id }: { id: string }) {
  return <Update href={`/dashboard/orders/${id}/edit`} />;
}

export function DeleteOrder({ id }: { id: string }) {
  const deleteOrderWithId = deleteOrder.bind(null, id);

  return (
    <form action={deleteOrderWithId}>
      <DeleteButton />
    </form>
  );
}

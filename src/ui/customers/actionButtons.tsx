import {
  Create,
  Detail,
  Update,
  DeleteButton,
} from "@/ui/commonForAll/editActionButtons_link";

import { deleteCustomer } from "@/lib/customers/delete_action";

export function CreateCustomer() {
  const href = "/dashboard/customers/create";
  return <Create href={href} text="Create Customer" />;
}

export function DetailCustomer({ id }: { id: string }) {
  return <Detail href={`/dashboard/customers/${id}`} />;
}

export function UpdateCustomer({ id }: { id: string }) {
  return <Update href={`/dashboard/customers/${id}/edit`} />;
}

export function DeleteCustomer({ id }: { id: string }) {
  const deleteCustomerWithId = deleteCustomer.bind(null, id);

  return (
    <form action={deleteCustomerWithId}>
      <DeleteButton />
    </form>
  );
}

import {
  Create,
  Detail,
  Update,
} from "@/ui/commonForAll/editActionButtons_link";

import DeleteForm from "./delete-form";

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
  return <DeleteForm id={id} />;
}

import EditCustomerForm from "@/ui/customers/edit-form";
import { fetchCustomerById } from "@/lib/customers/fetchCustomer_byId";
import { notFound } from "next/navigation";

export default async function EditCustomerPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  console.log(`edited customer id is: ${id}`);

  const customer = await fetchCustomerById(id);

  if (!id || !customer) {
    return notFound();
  }

  return (
    <main>
      <h1>Customer Edit Page</h1>
      <div>Editing customer: {id}</div>

      <EditCustomerForm customer={customer} />
    </main>
  );
}

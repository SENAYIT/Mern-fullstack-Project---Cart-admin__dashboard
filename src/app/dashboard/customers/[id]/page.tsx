import { fetchCustomerById } from "@/lib/customers/fetchCustomer_byId";
import { notFound } from "next/navigation";
import CustomerDetails from "./customerDetail";

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

  return (
    <main>
      <CustomerDetails />
    </main>
  );
}

import { fetchCustomerById } from "@/lib/customers/fetchCustomer_byId";

// a function for getting the customerr name by order customerId
export default async function GetOrderCustomerName({
  orderCustId,
}: {
  orderCustId: string;
}) {
  let custName = "";
  const data = await fetchCustomerById(orderCustId);
  if (data) {
    custName = data.name;
    return data.name;
  }
  custName = "Unknown";
  return <span>{custName}</span>;
}

import { fetchFilteredCustomers } from "@/lib/customers/fetchFilteredCustomers";
import MobileCustomerCard from "./mobileCustomerCard";
import CustomersTable from "./customersTable";
import Container from "@/ui/commonForAll/container";
export default async function CustomersList({
  status = "",
  query,
  currentPage,
}: {
  status: string;
  query: string;
  currentPage: number;
}) {
  const data = await fetchFilteredCustomers(status, query, currentPage);
  const customers = data.customersData;

  if (!customers || customers.length === 0) {
    return (
      <div className="h-72 flex items-center justify-center">
        <p>No employees</p>
      </div>
    );
  }

  return (
    <Container>
      <div className="md:hidden">
        {customers?.map((customer) => (
          <div
            key={customer._id}
            className="mb-2 w-full rounded-md bg-white p-4"
          >
            <MobileCustomerCard customer={customer} />
          </div>
        ))}
      </div>
      {customers && <CustomersTable customers={customers} />}
    </Container>
  );
}

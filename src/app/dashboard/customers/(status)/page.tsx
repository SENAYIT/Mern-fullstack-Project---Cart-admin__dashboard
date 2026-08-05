import { Suspense } from "react";
import Loading from "../loading";
import CustomersList from "@/ui/customers/customersList";

import { fetchFilteredCustomers } from "@/lib/customers/fetchFilteredCustomers";
import Pagination from "@/ui/commonForAll/pagination";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const status = "";
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;

  const data = await fetchFilteredCustomers(status, query, currentPage);

  const totalPages = Number(data.totalPages);

  return (
    <main>
      <div className="w-full flex flex-col gap-2 items-center justify-center">
        <Suspense fallback={<Loading text="fetching customers Loading..." />}>
          <CustomersList
            status={status}
            currentPage={currentPage}
            query={query}
          />
        </Suspense>
        <Suspense fallback={<Loading text="page Loading..." />}>
          <Pagination totalPages={totalPages} />
        </Suspense>
      </div>
    </main>
  );
}

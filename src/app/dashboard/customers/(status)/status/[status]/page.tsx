import { Suspense } from "react";
import Loading from "@/app/dashboard/customers/loading";
import Pagination from "@/ui/commonForAll/pagination";
import CustomersList from "@/ui/customers/customersList";
import { fetchFilteredCustomers } from "@/lib/customers/fetchFilteredCustomers";

export default async function Page(props: {
  params: Promise<{ status: string }>;
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const status = (await props.params).status.toLowerCase();
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const data = await fetchFilteredCustomers(status, query, currentPage);
  const totalPages = Number(data.totalPages);

  return (
    <main>
      <div className="w-full flex flex-col gap-2 items-center justify-center">
        <Suspense fallback={<Loading text="fetching all orders Loading..." />}>
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

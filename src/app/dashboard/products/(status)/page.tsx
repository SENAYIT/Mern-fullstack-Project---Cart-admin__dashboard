import { Suspense } from "react";
import Loading from "../loading";

import { fetchFilteredProducts } from "@/lib/products/fetchFilteredProducts";
import ProductsList from "@/ui/products/productsList";

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
  const data = await fetchFilteredProducts(status, query, currentPage);
  const totalPages = Number(data.totalPages);

  return (
    <main>
      <div className="w-full flex flex-col gap-2 items-center justify-center">
        <Suspense fallback={<Loading text="fetching products Loading..." />}>
          <ProductsList
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

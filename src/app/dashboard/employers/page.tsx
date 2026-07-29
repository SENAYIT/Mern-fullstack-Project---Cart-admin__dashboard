import { Suspense } from "react";
import Search from "@/ui/search";
import { CreateEmployer } from "@/ui/employers/buttons";
import Loading from "./loading";
import EmployersTable from "@/ui/employers/table";

import { fetchEmployersPages } from "@/lib/employers/fetchData";
import { lusitana } from "@/ui/fonts";

import Pagination from "@/ui/pagination";

export default async function Page(props: {
  searchParams?: Promise<{
    query?: string;
    page?: string;
  }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query || "";
  const currentPage = Number(searchParams?.page) || 1;
  const totalPages = await fetchEmployersPages(query);

  return (
    <main>
      <div className="w-full flex flex-col gap-2 items-center justify-center">
        <h1 className={`${lusitana.className} mb-8 text-xl md:text-2xl`}>
          Employers
        </h1>
        <div className="flex gap-4 w-full md:max-w-3/4">
          <CreateEmployer />
          <Suspense
            fallback={<Loading text="Searching employers Loading..." />}
          >
            <Search placeholder="Search Employers..." />
          </Suspense>
        </div>

        <Suspense fallback={<Loading text="fetching employers Loading..." />}>
          <EmployersTable currentPage={currentPage} query={query} />
        </Suspense>
        <Suspense fallback={<Loading text="page Loading..." />}>
          <Pagination totalPages={totalPages} />
        </Suspense>
      </div>
    </main>
  );
}

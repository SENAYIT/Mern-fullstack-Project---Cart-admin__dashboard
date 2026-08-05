// for the filter -
"use client";

import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { useDebouncedCallback } from "use-debounce";

export default function Filter({ placeholder }: { placeholder: string }) {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();

  // function handlefilter(term: string) {
  const handleFilter = useDebouncedCallback((term) => {
    // console.log(`Searching... ${term}`);
    const params = new URLSearchParams(searchParams);
    params.set("page", "1");
    if (term) {
      params.set("query", term);
    } else {
      params.delete("query");
    }
    replace(`${pathname}?${params.toString()}`);
  }, 300);

  return (
    <form
      action={handleFilter}
      className="w-full rounded-xl border border-gray-200 bg-white p-4 shadow-sm"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:justify-between lg:items-end">
        {/* flter by orderId*/}
        <div className="flex-1">
          <label
            htmlFor="orderId"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Order Id
          </label>

          <input
            id="orderId"
            name="orderId"
            type="text"
            placeholder="Order ID"
            defaultValue={searchParams.get("orderId")?.toString()}
            onChange={(e) => handleFilter(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
        {/* search by Customer */}
        <div className="flex-1">
          <label
            htmlFor="customer"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Customer
          </label>

          <input
            id="customer"
            name="customer"
            type="text"
            placeholder={placeholder}
            defaultValue={searchParams.get("customer")?.toString()}
            onChange={(e) => handleFilter(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
        {/* search by Product */}
        <div className="flex-1">
          <label
            htmlFor="product"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Product
          </label>

          <input
            id="product"
            name="product"
            type="text"
            placeholder="Product Name"
            defaultValue={searchParams.get("product")?.toString()}
            onChange={(e) => handleFilter(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>
        {/* search by payment */}
        <div className="flex-1">
          <label
            htmlFor="payment"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            Payment
          </label>

          <input
            id="payment"
            name="payment"
            type="text"
            placeholder="Payment Status"
            defaultValue={searchParams.get("payment")?.toString()}
            onChange={(e) => handleFilter(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Start Date */}
        <div className="w-full lg:w-52">
          <label
            htmlFor="start_date"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            From
          </label>

          <input
            id="start_date"
            name="start_date"
            type="date"
            defaultValue={searchParams.get("start_date")?.toString()}
            onChange={(e) => handleFilter(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* End Date */}
        <div className="w-full lg:w-52">
          <label
            htmlFor="end_date"
            className="mb-2 block text-sm font-medium text-gray-700"
          >
            To
          </label>

          <input
            id="end_date"
            name="end_date"
            type="date"
            defaultValue={searchParams.get("end_date")?.toString()}
            onChange={(e) => handleFilter(e.target.value)}
            className="w-full rounded-lg border border-gray-300 px-4 py-2.5 text-sm outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
          />
        </div>

        {/* Button */}
        <button
          type="submit"
          className="w-full rounded-lg bg-blue-600 px-6 py-2.5 text-sm font-medium text-white transition hover:bg-blue-700 lg:w-auto"
        >
          Filter
        </button>
      </div>
    </form>
  );
}

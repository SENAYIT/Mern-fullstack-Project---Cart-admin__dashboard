import { ArrowPathIcon, UserIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { lusitana } from "@/ui/fonts";
import Image from "next/image";
import SectionHeader from "./sectionHeader";
import { fetchRecentCustomers } from "@/lib/customers/fetchRecentCustomers";

export default async function RecentCustomers() {
  const recentCustomers = await fetchRecentCustomers();
  if (!recentCustomers) {
    return;
  }
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <SectionHeader
          title="Recent Customers"
          viewAllLink="/dashboard/customers"
        />

        <div className="bg-white px-6">
          {recentCustomers?.map((customer, i) => {
            return (
              <div
                key={customer._id}
                className={clsx(
                  "flex flex-row items-center justify-between py-4",
                  {
                    "border-t border-t-gray-200": i !== 0,
                  },
                )}
              >
                <div className="flex items-center max-w-3/4 mr-1">
                  {customer.profile_photo ? (
                    <Image
                      src={customer.profile_photo}
                      alt={`${customer.name}'s profile picture`}
                      className="mr-4 rounded-full"
                      width={32}
                      height={32}
                    />
                  ) : (
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-100">
                      <UserIcon className="h-6 w-6 text-gray-500" />
                    </div>
                  )}
                  <div className="max-w-3/4">
                    <p className="truncate text-sm font-semibold md:text-base">
                      {customer.name}
                    </p>
                    <p className="hidden text-sm text-gray-500 sm:block">
                      {customer.email}
                    </p>
                  </div>
                </div>

                <p
                  className={`${lusitana.className} truncate rounded-full px-2.5 py-1 text-xs font-medium md:text-sm ${
                    customer.status === "Active"
                      ? "bg-green-100 text-green-700"
                      : customer.status === "Inactive"
                        ? "bg-yellow-100 text-yellow-700"
                        : customer.status === "Blocked"
                          ? "bg-red-100 text-red-700"
                          : customer.status === "Not-Blocked"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {customer.status}
                </p>
              </div>
            );
          })}
        </div>
        <div className="flex items-center pb-2 pt-6">
          <ArrowPathIcon className="h-5 w-5 text-gray-500" />
          <h3 className="ml-2 text-sm text-gray-500 ">Updated just now</h3>
        </div>
      </div>
    </div>
  );
}

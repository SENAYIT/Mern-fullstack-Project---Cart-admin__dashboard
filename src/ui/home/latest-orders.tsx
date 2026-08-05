import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { lusitana } from "@/ui/fonts";
import { fetchLatestOrders } from "@/lib/orders/fetchLatestOrders";

export default async function LatestOrders() {
  const latestOrders = await fetchLatestOrders();
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <h2 className={`${lusitana.className} mb-4 text-xl md:text-2xl`}>
        Latest Orders
      </h2>
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <div className="bg-white px-6">
          {latestOrders.map((order, i) => {
            return (
              <div
                key={order._id}
                className={clsx(
                  "flex flex-row items-center justify-between py-4",
                  {
                    "border-t": i !== 0,
                  },
                )}
              >
                <p className="truncate text-sm font-semibold md:text-base">
                  {order.customer}
                </p>
                <p className="hidden text-sm text-gray-500 sm:block">
                  products
                </p>

                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {order.totalPrice}
                </p>
                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  {order.status}
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

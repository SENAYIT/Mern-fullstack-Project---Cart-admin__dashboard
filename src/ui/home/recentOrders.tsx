import { ArrowPathIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import { lusitana } from "@/ui/fonts";
import { fetchRecentOrders } from "@/lib/orders/fetchRecentOrders";
import { fetchCustomerById } from "@/lib/customers/fetchCustomer_byId";
import SectionHeader from "./sectionHeader";

export default async function RecentOrders() {
  const recentOrders = await fetchRecentOrders();

  // a function for getting the customerr name by order customerId
  const customerName = async (orderCustId: string) => {
    let custName = "";
    const data = await fetchCustomerById(orderCustId);
    if (data) {
      custName = data.name;
      return data.name;
    }
    custName = "Unknown";
    return custName;
  };
  return (
    <div className="flex w-full flex-col md:col-span-4">
      <div className="flex grow flex-col justify-between rounded-xl bg-gray-50 p-4">
        <SectionHeader title="Recent Orders" viewAllLink="/dashboard/orders" />
        <div className="bg-white px-6">
          {recentOrders.map((order, i) => {
            return (
              <div
                key={order._id}
                className={clsx(
                  "flex flex-row items-center justify-between py-4",
                  {
                    "border-t border-t-gray-200": i !== 0,
                  },
                )}
              >
                <div className="max-w-1/3 mr-0.5">
                  <p className="truncate text-sm font-semibold md:text-base">
                    {order._id}
                  </p>
                  <p className="truncate text-sm md:text-base">
                    {customerName(order.customer)}
                  </p>
                </div>

                <p
                  className={`${lusitana.className} truncate text-sm font-medium md:text-base`}
                >
                  ${order.totalPrice}
                </p>

                <p
                  className={`${lusitana.className} truncate rounded-full px-2.5 py-1 text-xs md:text-sm ${
                    order.status === "completed"
                      ? "bg-green-100 text-green-700"
                      : order.status === "cancelled"
                        ? "bg-red-100 text-red-700"
                        : order.status === "pending"
                          ? "bg-blue-100 text-blue-700"
                          : order.status === "new"
                            ? "bg-purple-100 text-purple-700"
                            : "bg-gray-100 text-gray-600"
                  }`}
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

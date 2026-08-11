import { formatDateTime } from "@/lib/utils";
import { DetailOrder, UpdateOrder, DeleteOrder } from "./buttons";
import { Order } from "@/lib/orders/definitions";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import GetOrderCustomerName from "./getOrderCustomerName";
import GetOrderProducts from "./getOrderProduct";
export default function OrdersTable({ orders }: { orders: Order[] }) {
  return (
    <table className="hidden min-w-full rounded-md text-gray-900 md:table">
      <thead className="rounded-md bg-gray-50 text-left text-sm font-normal">
        <tr>
          <th scope="col" className="px-4 py-5 font-medium sm:pl-6">
            Order ID
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Customer
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Products
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            Total Price
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            payment
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            status
          </th>
          {/* <th scope="col" className="px-3 py-5 font-medium">
            Created Date
          </th> */}
          <th scope="col" className="px-3 py-5 font-medium">
            Updated Date
          </th>
          <th scope="col" className="px-3 py-5 font-medium">
            edit
          </th>
        </tr>
      </thead>

      <tbody className="divide-y divide-gray-200 text-gray-900">
        {orders.map((order) => (
          <tr key={order._id} className="group">
            <td className="whitespace-nowrap bg-white py-5 pl-4 pr-3 text-sm text-black group-first-of-type:rounded-md group-last-of-type:rounded-md sm:pl-6">
              <div className="flex items-center gap-3">
                <ShoppingCartIcon className="h-6 w-6" />
                <p>{order._id}</p>
              </div>
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              <GetOrderCustomerName orderCustId={order.customer} />
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {/* {order.products} */}
              <div className="flex flex-col items-start gap-0.5">
                <GetOrderProducts order={order} />
              </div>
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {order.totalPrice}
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium md:text-sm ${
                  order.payment === "Paid"
                    ? "bg-green-100 text-green-700"
                    : order.payment === "Not Paid"
                      ? "bg-red-100 text-red-700"
                      : order.payment === "Pending"
                        ? "bg-blue-100 text-blue-700"
                        : "bg-gray-100 text-gray-600"
                }`}
              >
                {order.payment}
              </span>
            </td>

            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              <span
                className={`rounded-full px-2.5 py-1 text-xs font-medium md:text-sm ${
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
              </span>
            </td>
            {/* <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {formatDateTime(order.createdAt)}
            </td> */}
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {formatDateTime(order.updatedAt)}
            </td>

            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              <div className="flex gap-1 items-center">
                <DetailOrder id={order._id} />
                <UpdateOrder id={order._id} />
                <DeleteOrder id={order._id} />
              </div>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

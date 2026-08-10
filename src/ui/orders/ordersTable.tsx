import { formatDateTime } from "@/lib/utils";
import { DetailOrder, UpdateOrder, DeleteOrder } from "./buttons";
import { Order } from "@/lib/orders/definitions";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

import { fetchCustomerById } from "@/lib/customers/fetchCustomer_byId";

export default function OrdersTable({ orders }: { orders: Order[] }) {
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
              {customerName(order.customer)}
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {/* {order.products} */}
              <div className="flex flex-col gap-0.5">
                <p> product 1</p>
                <p> product 2</p>
                <p> ... </p>
              </div>
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {order.totalPrice}
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {order.payment}
            </td>
            <td className="whitespace-nowrap bg-white px-4 py-5 text-sm">
              {order.status}
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

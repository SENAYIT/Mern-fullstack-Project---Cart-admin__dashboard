import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { DeleteOrder, DetailOrder, UpdateOrder } from "./buttons";
import { Order } from "@/lib/orders/definitions";
import GetOrderProducts from "./getOrderProduct";
import GetCustomerName from "./getOrderCustomerName";

export default function MobileOrderCard({ order }: { order: Order }) {
  return (
    <div className="flex flex-col items-start justify-between border-b pb-4">
      <div className="mb-2">
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="flex items-center gap-3">
            <ShoppingCartIcon className="h-6 w-6" />
            <p>Order - {order._id}</p>
            <span
              className={`flex w-fit items-center self-end rounded-full px-2.5 py-1 text-xs font-medium ${
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
            </span>{" "}
          </div>

          <div className="flex flex-col items-start justify-center gap-3">
            <p className="text-sm text-gray-500">
              Customer - <GetCustomerName orderCustId={order.customer} />
            </p>
            <div className="flex text-sm text-gray-500">
              Products -
              <span className="pl-2 text-sm text-gray-500">
                <GetOrderProducts order={order} />
              </span>
            </div>
            <p className="text-sm text-gray-500">
              Total Price - {order.totalPrice}
            </p>
            <p className="text-sm text-gray-500">
              Payment -{" "}
              <span
                className={`rounded-full px-2 py-1 text-xs font-medium ${
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
            </p>{" "}
          </div>
        </div>
      </div>

      <div className="flex flex-row gap-1 items-center self-end">
        <DetailOrder id={order._id} />
        <UpdateOrder id={order._id} />
        <DeleteOrder id={order._id} />
      </div>
    </div>
  );
}

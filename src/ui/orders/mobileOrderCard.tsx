import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { DeleteOrder, DetailOrder, UpdateOrder } from "./buttons";

export default function MobileOrderCard({ order }: { order: any }) {
  return (
    <div className="flex flex-col items-start justify-between border-b pb-4">
      <div className="mb-2">
        <div className="flex flex-col items-start justify-center gap-2">
          <div className="flex items-center gap-3">
            <ShoppingCartIcon className="h-6 w-6" />
            <p>Order - {order._id}</p>
            <span className="flex items-center self-end">{order.status}</span>
          </div>

          <div className="flex flex-col items-start justify-center gap-3">
            <p className="text-sm text-gray-500">Customer - {order.customer}</p>
            <p className="text-sm text-gray-500">products - </p>
            <p className="text-sm text-gray-500">
              Total Price - {order.totalPrice}
            </p>
            <p className="text-sm text-gray-500">Payment - {order.payment}</p>
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

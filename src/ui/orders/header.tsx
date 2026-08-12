import { CreateOrder } from "./buttons";
import Cart from "../dashboard/cart";

export default function OrderHeader() {
  return (
    <div className="flex flex-row items-center justify-between md:block ">
      <h1 className="font-bold">Orders</h1>
      <div className="flex gap-2 self-end">
        <Cart />
        <CreateOrder />
      </div>
    </div>
  );
}

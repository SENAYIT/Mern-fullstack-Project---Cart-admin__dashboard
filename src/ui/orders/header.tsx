import { CreateOrder } from "./buttons";

export default function OrderHeader() {
  return (
    <div className="flex flex-row items-center justify-between md:block ">
      <h1 className="font-bold">Orders</h1>
      <div className="flex self-end">
        <CreateOrder />
      </div>
    </div>
  );
}

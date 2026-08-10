import { CreateCustomer } from "./actionButtons";

export default function CustomerHeader() {
  return (
    <div className="flex items-center justify-between">
      <h1 className="font-bold">Customers</h1>

      <div className="flex self-end">
        <CreateCustomer />
      </div>
    </div>
  );
}

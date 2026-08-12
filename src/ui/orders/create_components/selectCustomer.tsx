import { State } from "@/lib/orders/definitions";
import SpanStar from "@/ui/commonForAll/spanStar";

import { customers } from "@/lib/customers/placeholder-data";
export default function SelectCustomer({ state }: { state: State }) {
  // const customers = [
  //   { _id: "cust-1", name: "John Smith" },
  //   { _id: "cust-2", name: "Emma JohnSon" },
  // ];

  return (
    <div className="mb-6">
      <label id="customer" className="mb-2 font-semibold">
        Customer
        <SpanStar />
      </label>
      <select
        id="customer"
        name="customer"
        defaultValue={state.values?.customer ?? ""}
        className="w-full rounded-md border p-2"
        aria-describedby="customer-error"
      >
        <option value={""}>Select Customer</option>
        {customers.map((customer) => (
          <option key={customer._id} value={customer._id ?? ""}>
            {customer.name ?? "Select Customer"}
          </option>
        ))}
      </select>

      <div id="customer-error" aria-live="polite" aria-atomic="true">
        {state.errors?.customer &&
          state.errors.customer.map((error: string) => (
            <p className="mt-2 text-sm text-red-500" key={error}>
              {error}
            </p>
          ))}
      </div>
    </div>
  );
}

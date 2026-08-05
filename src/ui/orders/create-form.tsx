"use client";
import Link from "next/link";
import { Button } from "@/ui/commonForAll/button";
import SpanStar from "@/ui/commonForAll/spanStar";
import { useActionState } from "react";
import { createOrder } from "@/lib/orders/create_action";
import { State } from "@/lib/orders/definitions";
import ConfirmationModal from "../commonForAll/confirmationModal";

export default function Form() {
  const initialState: State = {
    success: false,
    message: null,
    errors: {},
    values: {},
  };
  const [state, formAction] = useActionState<State, FormData>(
    createOrder,
    initialState,
  );

  // console.log(`state from order- create form : ${JSON.stringify(state)}`);
  // console.log(
  //   `status from order- create form : ${JSON.stringify(state.values?.status)}`,
  // );

  return (
    <form key={JSON.stringify(state.values)} action={formAction}>
      <div
        id="form"
        aria-describedby="form-error"
        className="w-full rounded-md bg-gray-50 p-4 md:p-6"
      >
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Customer Name
            <SpanStar />
          </label>
          <div className="relative">
            <input
              id="customer"
              name="customer"
              type="text"
              defaultValue={state.values?.customer ?? ""}
              placeholder="please enter customer name"
              className="peer block w-full md:max-w-3/4 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="customer-error"
            />
          </div>

          <div id="customer-error" aria-live="polite" aria-atomic="true">
            {state.errors?.customer &&
              state.errors.customer.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Product Price */}
        <div className="mb-4">
          <label
            htmlFor="totalPrice"
            className="mb-2 block text-sm font-medium"
          >
            Total Price
            <SpanStar />
          </label>
          <div className="relative">
            <input
              id="totalPrice"
              name="totalPrice"
              type="number"
              defaultValue={state.values?.totalPrice ?? ""}
              placeholder="please enter total price"
              className="peer block w-full md:max-w-3/4 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="totalPrice-error"
            />
          </div>
          <div id="totalPrice-error" aria-live="polite" aria-atomic="true">
            {state.errors?.totalPrice &&
              state.errors.totalPrice.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* Order Status */}
        <div className="mb-4">
          <label htmlFor="status" className="mb-2 block text-sm font-medium">
            Status
            <SpanStar />
          </label>
          <div className="relative">
            <select
              id="status"
              name="status"
              // value={state.values?.status ?? ""}
              defaultValue={state.values?.status ?? ""}
              className="peer block w-full md:max-w-3/4 rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500"
              aria-describedby="status-error"
            >
              <option value="">Select Status</option>
              <option value="new">new</option>
              <option value="pending">pending</option>
              <option value="completed">completed</option>
              <option value="cancelled">cancelled</option>
            </select>
          </div>
          <div id="status-error" aria-live="polite" aria-atomic="true">
            {state.errors?.status &&
              state.errors.status.map((error: string) => (
                <p className="mt-2 text-sm text-red-500" key={error}>
                  {error}
                </p>
              ))}
          </div>
        </div>

        {/* overall form error */}
        <div id="form-error" aria-live="polite" aria-atomic="true">
          {state.message && (
            <p className="mt-2 text-sm text-red-500">{state.message}</p>
          )}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <Link
          href="/dashboard/orders"
          className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200"
        >
          Cancel
        </Link>
        <Button type="submit">Create Order</Button>
      </div>

      {state.success && (
        <ConfirmationModal
          text={state.message ?? "Successfully Created Order"}
          // next_href="/orders"
        />
      )}
    </form>
  );
}

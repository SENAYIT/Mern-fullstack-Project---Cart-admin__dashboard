"use client";
import {
  FormCancelLink,
  FormSubmitButton,
} from "@/ui/commonForAll/formButtons";
import FormErrorMessage from "@/ui/commonForAll/formErrorMessage";
import SpanStar from "@/ui/commonForAll/spanStar";
import { useActionState } from "react";

import {
  Order,
  OrderStatusValues,
  OrderStatusState,
} from "@/lib/orders/definitions";

import { updateOrder } from "@/lib/orders/update_action";
import ConfirmationModal from "@/ui/commonForAll/confirmationModal";

export default function EditOrderStatusForm({ order }: { order: Order }) {
  const { status } = order;
  const initialOrderValue: OrderStatusValues = {
    // orderId: _id,
    // customer: customer,
    status: status,
  };
  const initialState: OrderStatusState = {
    success: false,
    message: null,
    errors: {},
    values: initialOrderValue,
  };

  const updateOrderWithId = updateOrder.bind(null, order._id);

  const [state, formAction] = useActionState<OrderStatusState, FormData>(
    updateOrderWithId,
    initialState,
  );

  return (
    <form key={JSON.stringify(state.values)} action={formAction}>
      <div
        id="form"
        aria-describedby="form-error"
        className="w-full rounded-md bg-gray-50 p-4 md:p-6"
      >
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
          {state.message && <FormErrorMessage text={state.message} />}
        </div>
      </div>

      <div className="mt-6 flex justify-end gap-4">
        <FormCancelLink href="/dashboard/orders">Cancel</FormCancelLink>
        <FormSubmitButton type="submit">Update Order</FormSubmitButton>
      </div>

      {state.success && (
        <ConfirmationModal
          text={state.message ?? "Successfully Updated The Order State"}
          // next_href="/orders"
        />
      )}
    </form>
  );
}

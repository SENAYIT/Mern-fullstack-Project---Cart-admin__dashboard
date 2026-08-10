"use client";
import {
  FormCancelLink,
  // FormSubmitButton,
} from "@/ui/commonForAll/formButtons";
import FormErrorMessage from "@/ui/commonForAll/formErrorMessage";
import { useActionState, useContext } from "react";
import { createOrder } from "@/lib/orders/create_action";
import { State } from "@/lib/orders/definitions";
import ConfirmationModal from "../commonForAll/confirmationModal";
// for now
import SelectCustomer from "./create_components/selectCustomer";
import Cart from "./create_components/cart";
import { CartContext } from "@/store/shopping-cart-context";

export default function Form() {
  const initialState: State = {
    success: false,
    message: null,
    errors: {},
    values: {},
  };

  const { cartItems } = useContext(CartContext);

  const [state, formAction, isPending] = useActionState<State, FormData>(
    createOrder,
    initialState,
  );

  // console.log(`items from order- create form : ${JSON.stringify(cartItems)}`);
  // console.log(`state from order- create form : ${JSON.stringify(state)}`);

  return (
    <form key={JSON.stringify(state.values)} action={formAction}>
      <div
        id="form"
        aria-describedby="form-error"
        className="mx-auto max-w-3xl rounded-lg bg-white p-6 shadow"
      >
        <SelectCustomer state={state} />

        <Cart />

        <input
          type="hidden"
          name="cartItems"
          value={JSON.stringify(cartItems)}
        />
        {state.errors?.cartItems && (
          <FormErrorMessage text={state.errors.cartItems[0]} />
        )}

        <div className="mt-6 flex justify-end gap-4">
          <FormCancelLink href="/dashboard/orders">Cancel</FormCancelLink>
          <button type="submit" disabled={isPending}>
            {isPending ? "Crreating .... " : "Create Order"}
          </button>
        </div>

        {state.success && (
          <ConfirmationModal
            text={state.message ?? "Successfully Created Order"}
            // next_href="/orders"
          />
        )}
      </div>
    </form>
  );
}

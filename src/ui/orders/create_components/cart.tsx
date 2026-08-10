"use client";
import AddCart from "./addCart";
import GotoLink from "@/components/common/gotoLink";
import CartItems from "./cartItems";

export default function Cart() {
  return (
    <div className="flex flex-col gap-3">
      <h2 className="font-semibold">Cart</h2>

      <AddCart />

      <GotoLink href="/" styles="">
        Click here to see more Products
      </GotoLink>

      <CartItems />
    </div>
  );
}

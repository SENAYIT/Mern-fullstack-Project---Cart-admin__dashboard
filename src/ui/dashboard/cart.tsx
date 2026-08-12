"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import GoToLink from "@/ui/commonForAll/gotoLink";
import { useContext } from "react";
import { CartContext } from "@/store/shopping-cart-context";

export default function Cart() {
  const { cartItems } = useContext(CartContext);
  const totalCartItems = cartItems.length;
  return (
    <GoToLink href={`/dashboard/orders/create`} className="">
      <ShoppingCartIcon className="w-6" />
      <div className="md:flex md:gap-1">
        <span className="hidden md:block">Cart</span>
        {totalCartItems !== 0 && (
          <sup className="ml-1 text-xs text-red-500">{totalCartItems}</sup>
        )}
      </div>
    </GoToLink>
  );
}

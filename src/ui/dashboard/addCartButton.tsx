"use client";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { useContext } from "react";
import { CartContext } from "@/store/shopping-cart-context";

export default function AddCartButton({
  productId,
  quantity,
}: {
  productId: string;
  quantity: number;
}) {
  const { addItemToCart } = useContext(CartContext);
  return (
    <button
      onClick={() => addItemToCart(productId, (quantity = 1))}
      className="p-3 flex items-center hover:bg-emerald-400 hover:rounded-xl"
    >
      <div className="md:flex md:items-center md:gap-1">
        <ShoppingCartIcon className="w-6" />
        <span className="hidden md:block">Add to Cart</span>
      </div>
    </button>
  );
}

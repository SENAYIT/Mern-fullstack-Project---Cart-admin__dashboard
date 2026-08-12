import { useContext } from "react";
import { CartContext } from "@/store/shopping-cart-context";

export default function CartItems() {
  const { cartItems, updateItemQuantity, deleteItem } = useContext(CartContext);

  let itemsMessage;
  if (!cartItems || cartItems.length === 0) {
    // how to show this ???
    itemsMessage = "There is no items in the cart Please add Items";
    return;
  }
  const totalCartPrice = cartItems?.reduce(
    (sum: number, item) => sum + item?.totalPrice,
    0,
  );

  return (
    <div>
      <p className="text-red-600">{itemsMessage}</p>
      <div className="flex flex-col gap-4 mb-6">
        {/* Cart Items */}
        <div>
          <h2 className="mb-2 font-semibold">Cart Items</h2>
          <div className="divide-y rounded-md border">
            {cartItems?.map((item) => (
              <div
                key={item.productId}
                className="flex items-center justify-between p-3"
              >
                <div className="flex flex-col items-start gap-2 md:flex-row md:items-center md:gap-4 md:justify-between">
                  <span>{item.name}</span>
                  <span>${item.totalPrice}</span>
                </div>

                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => updateItemQuantity(item.productId, -1)}
                    className="text-red text-base"
                  >
                    -
                  </button>
                  <span>x{item.quantity}</span>
                  <button
                    type="button"
                    onClick={() => updateItemQuantity(item.productId, +1)}
                    className="text-blue-700 text-base"
                  >
                    +
                  </button>
                </div>
                <button
                  type="button"
                  onClick={() => deleteItem(item.productId)}
                  className="text-red-500"
                >
                  🗑
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Cart Total Price*/}
        <div className="flex justify-between text-lg font-bold">
          <span>Total:</span>
          <span>${totalCartPrice}</span>
        </div>
      </div>
    </div>
  );
}

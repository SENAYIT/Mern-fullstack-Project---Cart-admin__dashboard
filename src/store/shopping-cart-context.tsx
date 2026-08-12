"use client";
import React from "react";
import { createContext, useReducer } from "react";
import { CartItem, CartState, CartAction } from "./shoppingCartType";
import { products } from "@/lib/products/placeholderdata";
// import { Product } from "@/lib/products/definitions";
// export const products: Product[] = [
//   { _id: "pro-1", name: "laptop", price: 25 },
//   { _id: "pro-2", name: "key board", price: 50 },
// ];

type CartContextType = {
  cartItems: CartItem[];
  addItemToCart: (productId: string, quantity?: number) => void;
  updateItemQuantity: (productId: string, quantity?: number) => void;
  deleteItem: (productId: string) => void;
};

export const CartContext = createContext<CartContextType>({
  cartItems: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
  deleteItem: () => {},
});

// fuctiont that handles add button and update buttons
// add button (add item from the selected product and quantity )and
// update buttons (existing items increase and decrease quantity )
// state={items[] } , action = {type , payload:{ selectedproductId , selelected quantity  }}

function shoppingCartReducer(state: CartState, action: CartAction): CartState {
  if (action.type === "ADD_ITEM") {
    const cartItems = [...state.cartItems];

    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.productId === action.payload.id,
    );

    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];

      const updatedQuantity = existingCartItem.quantity + action.payload.amount;

      const updatedItem = {
        ...existingCartItem,
        quantity: updatedQuantity,
        totalPrice: Number(
          (updatedQuantity * existingCartItem.price).toFixed(2),
        ),
      };

      cartItems[existingCartItemIndex] = updatedItem;
    } else {
      const product = products.find(
        (product) => product._id === action.payload.id,
      );

      if (!product) {
        return state;
      }

      const newQuantity = action.payload.amount;

      const newCartItem: CartItem = {
        productId: product._id,
        name: product.name,
        price: product.price,
        quantity: newQuantity,
        totalPrice: Number((product.price * newQuantity).toFixed(2)),
      };

      cartItems.push(newCartItem);
    }

    return {
      ...state,
      cartItems: cartItems,
    };
  }

  if (action.type === "UPDATE_ITEM") {
    const cartItems = [...state.cartItems];

    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.productId === action.payload.id,
    );

    if (existingCartItemIndex !== -1) {
      const existingCartItem = cartItems[existingCartItemIndex];

      const updatedQuantity = existingCartItem.quantity + action.payload.amount;

      if (updatedQuantity <= 0) {
        cartItems.splice(existingCartItemIndex, 1);
      } else {
        const updatedItem: CartItem = {
          ...existingCartItem,
          quantity: updatedQuantity,
          totalPrice: Number(
            (existingCartItem.price * updatedQuantity).toFixed(2),
          ),
        };

        cartItems[existingCartItemIndex] = updatedItem;
      }
    }

    return {
      ...state,
      cartItems: cartItems,
    };
  }
  if (action.type === "DELETE_ITEM") {
    const cartItems = [...state.cartItems];

    const existingCartItemIndex = cartItems.findIndex(
      (cartItem) => cartItem.productId === action.payload.id,
    );

    if (existingCartItemIndex !== -1) {
      cartItems.splice(existingCartItemIndex, 1);
    }

    return {
      ...state,
      cartItems: cartItems,
    };
  }

  return state;
}

export default function CartContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const initialState: CartState = {
    cartItems: [],
  };
  const [shoppingCartState, shoppingCartDispatch] = useReducer(
    shoppingCartReducer,
    initialState,
  );

  function handleAddItemToCart(productId: string, quantity: number = 1) {
    shoppingCartDispatch({
      type: "ADD_ITEM",
      payload: {
        id: productId,
        amount: quantity,
      },
    });
  }

  function handleUpdateCartItemQuantity(
    productId: string,
    quantity: number = 1,
  ) {
    shoppingCartDispatch({
      type: "UPDATE_ITEM",
      payload: {
        id: productId,
        amount: quantity,
      },
    });
  }

  function handleDeleteCartItem(productId: string) {
    shoppingCartDispatch({
      type: "DELETE_ITEM",
      payload: {
        id: productId,
        amount: 0,
      },
    });
  }
  const ctxValue = {
    cartItems: shoppingCartState.cartItems,
    addItemToCart: handleAddItemToCart,
    updateItemQuantity: handleUpdateCartItemQuantity,
    deleteItem: handleDeleteCartItem,
  };

  return (
    <CartContext.Provider value={ctxValue}>{children}</CartContext.Provider>
  );
}

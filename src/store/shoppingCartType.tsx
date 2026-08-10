export type Product = {
  _id: string;
  name: string;
  price: number;
};

export type CartItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  totalPrice: number;
};

export type CartState = {
  cartItems: CartItem[];
};

export type Payload = {
  id: string;
  amount: number;
};

export type CartAction =
  | {
      type: "ADD_ITEM";
      payload: Payload;
    }
  | {
      type: "UPDATE_ITEM";
      payload: Payload;
    }
  | {
      type: "DELETE_ITEM";
      payload: Payload;
    };

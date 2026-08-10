// all needed for table  and dashboard
export type OrderStatus = "new" | "pending" | "completed" | "cancelled";

export type PaymentStatus = "Pending" | "Not Paid" | "Paid";

export type OrderProduct = {
  product: string; // Product ObjectId
  quantity: number;
};

export type Order = {
  _id: string;
  customer: string; // Customer ObjectId
  products: OrderProduct[];
  totalPrice: number;
  payment: PaymentStatus;
  status: OrderStatus;
  createdAt: string;
  updatedAt: string;
};

export type LatestOrder = {
  _id: string;
  customer: string; // Customer ObjectId
  products: OrderProduct[];
  totalPrice: number;
  status: OrderStatus;
};

// for admin create order now with cart
import { CartItem } from "@/store/shoppingCartType";

export type OrderValues = {
  customer?: string;
  cartItems?: CartItem[];
};

export type OrderErrors = {
  customer?: string[];
  cartItems?: string[];
};

export type State = {
  success?: boolean;
  message?: string | null;
  values?: OrderValues;
  errors?: OrderErrors;
};

// for updating the order status
export type OrderStatusValues = {
  // orderId?: string;
  // customer?: string;
  status?: OrderStatus;
};

export type OrderStatusErrors = {
  // orderId?: string[];
  // customer?: string[];
  status?: string[];
};

export type OrderStatusState = {
  success?: boolean;
  message?: string | null;
  values?: OrderStatusValues;
  errors?: OrderStatusErrors;
};

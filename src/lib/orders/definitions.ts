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

export type OrderValues = {
  customer?: string;
  // products?: OrderProduct[];
  totalPrice?: number;
  status?: OrderStatus;
};
export type OrderErrors = {
  customer?: string[];
  // products?: string[];
  totalPrice?: string[];
  status?: string[];
};

export type State = {
  success?: boolean;
  message?: string | null;
  values?: OrderValues;
  errors?: OrderErrors;
};

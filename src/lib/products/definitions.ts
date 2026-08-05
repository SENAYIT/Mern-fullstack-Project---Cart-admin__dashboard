export type ProductStatus = "active" | "inactive" | "new" | "low-stock";

export type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  stock: number;
  totalSold: number;
  image: string;
  status: ProductStatus;
  createdAt: string;
  updatedAt: string;
};
export type Top_Product = {
  _id: string;
  name: string;
  price: number;
  stock: number;
  image: string;
  status: ProductStatus;
};

export type ProductValues = {
  name?: string;
  description?: string;
  price?: number;
  stock?: number;
  // image?: File | null;
  status?: ProductStatus;
};
export type ProductErrors = {
  name?: string[];
  description?: string[];
  price?: string[];
  stock?: string[];
  image?: string[];
  status?: string[];
};

export type State = {
  success?: boolean;
  message?: string | null;
  values?: ProductValues;
  errors?: ProductErrors;
};

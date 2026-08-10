// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
export type UserRole = "admin" | "customer";
export type UserStatus = "active" | "inactive" | "blocked";

export type User = {
  id: string;
  name: string;
  email: string;
  address: string;
  phoneNumber: string;
  password: string;
  role: UserRole;
  status: UserStatus;
};

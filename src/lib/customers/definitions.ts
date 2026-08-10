// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// for Customer placeholder list show case

export type CustomerStatus = "Active" | "Inactive" | "Blocked";

export type Customer = {
  _id: string;
  name: string;
  profile_photo: string;
  email: string;
  password: string;
  phoneNumber: string;
  createdAt: string;
  updatedAt: string;
  status: CustomerStatus;
};

export type CustomerValues = {
  name?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
};

export type CustomerErrors = {
  name?: string[];
  profile_photo?: string[];
  email?: string[];
  phoneNumber?: string[];
  password?: string[];
};

export type State = {
  success?: boolean;
  message?: string | null;
  values?: CustomerValues;
  errors?: CustomerErrors;
};

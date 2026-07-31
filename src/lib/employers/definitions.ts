// This file contains type definitions for your data.
// It describes the shape of the data, and what data type each property should accept.
// forEmployee placeholder list show case
export type Employer = {
  _id: string;
  name: string;
  profile_photo: string;
  email: string;
  password: string;
  phoneNumber: string;
};

export type EmployeeValues = {
  name?: string;
  email?: string;
  phoneNumber?: string;
  password?: string;
};
export type EmployeeErrors = {
  name?: string[];
  profile_photo?: string[];
  email?: string[];
  phoneNumber?: string[];
  password?: string[];
};

export type State = {
  success?: boolean;
  message?: string | null;
  values?: EmployeeValues;
  errors?: EmployeeErrors;
};

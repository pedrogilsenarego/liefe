export const roles = {
  ADMIN: "admin",
  USER: "user",
};

export interface Bussiness {
  businessName: string;
  businessDocId: string;
}

export type CurrentUser = {
  username: string;
  email: string;
  features?: string[];
  business?: Bussiness[];
  role: (typeof roles)[keyof typeof roles][];
  phone: string;
  fullName: string;
  address1: string;
  address2: string;
  city: string;
  postalCode: string;
  country: string;
  docId: string;
};

export type CreateUser = {
  username: string;
  password: string;
  confirmPassword: string;
  email: string;
  phone?: string;
  fullName?: string;
  address1?: string;
  address2?: string;
  city?: string;
  postalCode?: string;
  country?: string;
};

export type Login = {
  email: string;
  password: string;
};

export type RecoverPassword = {
  email: string;
};

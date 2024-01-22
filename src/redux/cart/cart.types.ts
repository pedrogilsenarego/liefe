import { Product } from "../../types/product";

export const cartTypes = {
  ADD_PRODUCT_TO_CART: "ADD_PRODUCT_TO_CART",
  CLEAR_CART: "CLEAR_CART",
  UPDATE_CART: "UPDATE_CART",
  DELETE_PRODUCT: "DELETE_PRODUCT",
};

export interface CartProduct {
  product: Product;
  value: number;
}

export interface CartState {
  cartItems: CartProduct[];
}

export default cartTypes;

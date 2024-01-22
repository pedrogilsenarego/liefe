import cartTypes, { CartState } from "./cart.types";
import { handleAddToCart } from "./cart.utils";

const INITIAL_STATE: CartState = {
  cartItems: [],
};

interface Action {
  type: string;
  payload: any;
}

const cartReducer = (state = INITIAL_STATE, action: Action) => {
  switch (action.type) {
    case cartTypes.ADD_PRODUCT_TO_CART:
      return {
        ...state,
        cartItems: handleAddToCart({
          prevCartItems: state.cartItems,
          nextCartItems: action.payload,
        }),
      };
    case cartTypes.DELETE_PRODUCT:
      return {
        ...state,
        cartItems: state.cartItems.filter(
          (item, id) => item.product.id !== action.payload
        ),
      };
    case cartTypes.UPDATE_CART:
      const { id, value } = action.payload;

      // Check if the value is less than or equal to 0
      if (value <= 0) {
        return {
          ...state,
          cartItems: state.cartItems.filter((item) => item.product.id !== id),
        };
      }

      return {
        ...state,
        cartItems: state.cartItems.map((item) => {
          if (item.product.id === id) {
            // Return a new object with the updated value property
            return {
              ...item,
              value: value,
            };
          }
          return item;
        }),
      };

    case cartTypes.CLEAR_CART:
      return {
        ...state,
        cartItems: [],
      };

    default:
      return state;
  }
};

export default cartReducer;

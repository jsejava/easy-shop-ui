import {
  ADD_TO_CART,
  CLEAR_CART,
  REMOVE_FROM_CART,
} from "../Reducers/contants";

export const addToCard = (payload) => {
  return {
    type: ADD_TO_CART,
    payload,
  };
};
export const removeFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload,
  };
};
export const clearCart = () => {
  return {
    type: CLEAR_CART,
  };
};

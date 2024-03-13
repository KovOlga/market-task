import { TProductCounted } from "../types/data";
import {
  DELETE_PRODUCT_ITEM,
  GET_CARTS_FAILED,
  GET_CARTS_REQUEST,
  GET_CARTS_SUCCESS,
  TCartsActions,
} from "./actions";

export interface IInitialState {
  products: TProductCounted[];
  totalPrice: number;
  reqInProccess: boolean;
  reqFailed: boolean;
}

const initialState: IInitialState = {
  products: [],
  totalPrice: 0,
  reqInProccess: false,
  reqFailed: false,
};

export const cartsReducer = (
  state = initialState,
  action: TCartsActions
): IInitialState => {
  switch (action.type) {
    case GET_CARTS_REQUEST: {
      return {
        ...state,
        reqInProccess: true,
        products: [],
        reqFailed: false,
      };
    }
    case GET_CARTS_SUCCESS: {
      return {
        ...state,
        reqInProccess: false,
        reqFailed: false,
        products: action.products.map((item) => {
          return { ...item, counter: 0 };
        }),
      };
    }
    case GET_CARTS_FAILED: {
      return { ...state, reqFailed: true, reqInProccess: false };
    }
    case DELETE_PRODUCT_ITEM: {
      return {
        ...state,
        products: [...state.products].filter(
          (item) => item.id !== action.itemId
        ),
      };
    }
    default:
      return state;
  }
};

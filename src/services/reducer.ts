import { TProductCounted } from "../types/data";
import {
  DECREASE_PRODUCT_COUNTER,
  DELETE_PRODUCT_ITEM,
  GET_CARTS_FAILED,
  GET_CARTS_REQUEST,
  GET_CARTS_SUCCESS,
  INCREASE_PRODUCT_COUNTER,
  TCartsActions,
  UPDATE_TOTAL_PRICE,
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
          return { ...item, counter: 1, price: Math.ceil(item.price) };
        }),
      };
    }
    case GET_CARTS_FAILED: {
      return { ...state, reqFailed: true, reqInProccess: false };
    }
    case INCREASE_PRODUCT_COUNTER: {
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.itemId) {
            return {
              ...product,
              counter: product.counter + 1,
            };
          } else {
            return product;
          }
        }),
      };
    }
    case DECREASE_PRODUCT_COUNTER: {
      return {
        ...state,
        products: state.products.map((product) => {
          if (product.id === action.itemId) {
            return {
              ...product,
              counter: product.counter - 1,
            };
          } else {
            return product;
          }
        }),
      };
    }
    case UPDATE_TOTAL_PRICE: {
      let totalPrice = 0;
      console.log("1", totalPrice);
      state.products.forEach((product) => {
        totalPrice = totalPrice + product.price * product.counter;
      });
      console.log("end", totalPrice);
      return {
        ...state,
        totalPrice: totalPrice,
      };
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

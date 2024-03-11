import {
  GET_CARTS_FAILED,
  GET_CARTS_REQUEST,
  GET_CARTS_SUCCESS,
  TCartsActions,
} from "./actions";

export interface IInitialState {
  carts: any[];
  reqInProccess: boolean;
  reqFailed: boolean;
}

const initialState: IInitialState = {
  carts: [],
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
        carts: [],
        reqFailed: false,
      };
    }
    case GET_CARTS_SUCCESS: {
      return {
        ...state,
        reqInProccess: false,
        reqFailed: false,
        carts: action.carts,
      };
    }
    case GET_CARTS_FAILED: {
      return { ...state, reqFailed: true, reqInProccess: false };
    }
    default:
      return state;
  }
};

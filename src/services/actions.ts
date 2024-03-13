import { AppDispatch, AppThunk } from "../types";
import { TProduct } from "../types/data";
import { getCartsList } from "./api";

export const GET_CARTS_REQUEST = "GET_CARTS_REQUEST";
export const GET_CARTS_SUCCESS = "GET_CARTS_SUCCESS";
export const GET_CARTS_FAILED = "GET_CARTS_FAILED";
export const UPDATE_TOTAL_PRICE = "UPDATE_TOTAL_PRICE";
export const DELETE_PRODUCT_ITEM = "DELETE_PRODUCT_ITEM";
export const INCREASE_PRODUCT_COUNTER = "INCREASE_PRODUCT_COUNTER";
export const DECREASE_PRODUCT_COUNTER = "DECREASE_PRODUCT_COUNTER";

interface IGetCartsRequest {
  readonly type: typeof GET_CARTS_REQUEST;
}

interface IGetCartsSuccess {
  readonly type: typeof GET_CARTS_SUCCESS;
  products: TProduct[];
}

interface IGetCartsFailed {
  readonly type: typeof GET_CARTS_FAILED;
}

interface IUpdateTotalPriceAction {
  readonly type: typeof UPDATE_TOTAL_PRICE;
}

interface IDeleteProductItemAction {
  readonly type: typeof DELETE_PRODUCT_ITEM;
  readonly itemId: number;
}

interface IIncreaseProductCounterAction {
  readonly type: typeof INCREASE_PRODUCT_COUNTER;
  readonly itemId: number;
}

interface IDecreaseProductCounterAction {
  readonly type: typeof DECREASE_PRODUCT_COUNTER;
  readonly itemId: number;
}

export type TCartsActions =
  | IGetCartsRequest
  | IGetCartsSuccess
  | IGetCartsFailed
  | IUpdateTotalPriceAction
  | IDeleteProductItemAction
  | IIncreaseProductCounterAction
  | IDecreaseProductCounterAction;

export const getCartsRequestAction = (): IGetCartsRequest => ({
  type: GET_CARTS_REQUEST,
});

export const getCartsSuccessAction = (
  products: TProduct[]
): IGetCartsSuccess => ({
  type: GET_CARTS_SUCCESS,
  products,
});

export const getCartsFailedAction = (): IGetCartsFailed => ({
  type: GET_CARTS_FAILED,
});

export const updateTotalPriceAction = (): IUpdateTotalPriceAction => ({
  type: UPDATE_TOTAL_PRICE,
});

export const deleteProductItemAction = (
  itemId: number
): IDeleteProductItemAction => ({
  type: DELETE_PRODUCT_ITEM,
  itemId,
});

export const increaseProductCounterAction = (
  itemId: number
): IIncreaseProductCounterAction => ({
  type: INCREASE_PRODUCT_COUNTER,
  itemId,
});

export const decreaseProductCounterAction = (
  itemId: number
): IDecreaseProductCounterAction => ({
  type: DECREASE_PRODUCT_COUNTER,
  itemId,
});

export const getCarts: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch(getCartsRequestAction());
    return getCartsList()
      .then((products) => {
        console.log("products", products);
        dispatch(getCartsSuccessAction(products));
      })
      .catch(() => {
        dispatch(getCartsFailedAction());
      });
  };
};

export const deleteProductItemThunk: AppThunk = (itemId: number) => {
  return function (dispatch: AppDispatch) {
    dispatch(deleteProductItemAction(itemId));
  };
};

export const increaseProductCounterThunk: AppThunk = (itemId: number) => {
  return function (dispatch: AppDispatch) {
    dispatch(increaseProductCounterAction(itemId));
  };
};

export const decreaseProductCounterThunk: AppThunk = (itemId: number) => {
  return function (dispatch: AppDispatch) {
    dispatch(decreaseProductCounterAction(itemId));
  };
};

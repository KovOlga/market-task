import { AppDispatch, AppThunk } from "../types";
import { TProduct } from "../types/data";
import { getProductsList } from "./api";

export const GET_PRODUCTS_REQUEST = "GET_PRODUCTS_REQUEST";
export const GET_PRODUCTS_SUCCESS = "GET_PRODUCTS_SUCCESS";
export const GET_PRODUCTS_FAILED = "GET_PRODUCTS_FAILED";
export const UPDATE_TOTAL_PRICE = "UPDATE_TOTAL_PRICE";
export const DELETE_PRODUCT_ITEM = "DELETE_PRODUCT_ITEM";
export const INCREASE_PRODUCT_COUNTER = "INCREASE_PRODUCT_COUNTER";
export const DECREASE_PRODUCT_COUNTER = "DECREASE_PRODUCT_COUNTER";

interface IGetProductsRequest {
  readonly type: typeof GET_PRODUCTS_REQUEST;
}

interface IGetProductsSuccess {
  readonly type: typeof GET_PRODUCTS_SUCCESS;
  products: TProduct[];
}

interface IGetProductsFailed {
  readonly type: typeof GET_PRODUCTS_FAILED;
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

export type TProductsActions =
  | IGetProductsRequest
  | IGetProductsSuccess
  | IGetProductsFailed
  | IUpdateTotalPriceAction
  | IDeleteProductItemAction
  | IIncreaseProductCounterAction
  | IDecreaseProductCounterAction;

export const getProductsRequestAction = (): IGetProductsRequest => ({
  type: GET_PRODUCTS_REQUEST,
});

export const getProductsSuccessAction = (
  products: TProduct[]
): IGetProductsSuccess => ({
  type: GET_PRODUCTS_SUCCESS,
  products,
});

export const getProductsFailedAction = (): IGetProductsFailed => ({
  type: GET_PRODUCTS_FAILED,
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

export const getProductsThunk: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch(getProductsRequestAction());
    return getProductsList()
      .then((products) => {
        dispatch(getProductsSuccessAction(products));
      })
      .catch(() => {
        dispatch(getProductsFailedAction());
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

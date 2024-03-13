import { AppDispatch, AppThunk } from "../types";
import { TProduct } from "../types/data";
import { getCartsList } from "./api";

export const GET_CARTS_REQUEST = "GET_CARTS_REQUEST";
export const GET_CARTS_SUCCESS = "GET_CARTS_SUCCESS";
export const GET_CARTS_FAILED = "GET_CARTS_FAILED";
export const UPDATE_TOTAL_PRICE = "UPDATE_TOTAL_PRICE";
export const DELETE_PRODUCT_ITEM = "DELETE_PRODUCT_ITEM";

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

export type TCartsActions =
  | IGetCartsRequest
  | IGetCartsSuccess
  | IGetCartsFailed
  | IUpdateTotalPriceAction
  | IDeleteProductItemAction;

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

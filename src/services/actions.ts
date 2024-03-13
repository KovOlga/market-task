import { AppDispatch, AppThunk } from "../types";
import { IProduct } from "../types/data";
import { getCartsList } from "./api";

export const GET_CARTS_REQUEST = "GET_CARTS_REQUEST";
export const GET_CARTS_SUCCESS = "GET_CARTS_SUCCESS";
export const GET_CARTS_FAILED = "GET_CARTS_FAILED";

interface IGetCartsRequest {
  readonly type: typeof GET_CARTS_REQUEST;
}

interface IGetCartsSuccess {
  readonly type: typeof GET_CARTS_SUCCESS;
  products: IProduct[];
}

interface IGetCartsFailed {
  readonly type: typeof GET_CARTS_FAILED;
}

export type TCartsActions =
  | IGetCartsRequest
  | IGetCartsSuccess
  | IGetCartsFailed;

export const getCartsRequestAction = (): IGetCartsRequest => ({
  type: GET_CARTS_REQUEST,
});

export const getCartsSuccessAction = (products: IProduct[]): IGetCartsSuccess => ({
  type: GET_CARTS_SUCCESS,
  products
});

export const getCartsFailedAction = (): IGetCartsFailed => ({
  type: GET_CARTS_FAILED,
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

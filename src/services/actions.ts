import { AppDispatch, AppThunk } from "../types";

export const GET_CARTS_REQUEST = "GET_CARTS_REQUEST";
export const GET_CARTS_SUCCESS = "GET_CARTS_SUCCESS";
export const GET_CARTS_FAILED = "GET_CARTS_FAILED";

interface IGetCartsRequest {
  readonly type: typeof GET_CARTS_REQUEST;
}

interface IGetCartsSuccess {
  readonly type: typeof GET_CARTS_SUCCESS;
  carts: any[];
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

export const getCartsSuccessAction = (carts: any[]): IGetCartsSuccess => ({
  type: GET_CARTS_SUCCESS,
  carts,
});

export const getCartsFailedAction = (): IGetCartsFailed => ({
  type: GET_CARTS_FAILED,
});

export const getCarts: AppThunk = () => {
  return function (dispatch: AppDispatch) {
    dispatch(getCartsRequestAction());
    return getCartsList()
      .then((carts) => {
        dispatch(getCartsSuccessAction(carts));
      })
      .catch((err) => {
        dispatch(getCartsFailedAction());
      });
  };
};

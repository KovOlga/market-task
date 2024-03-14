import { TProduct } from "../types/data";
import { productsEndPoint } from "../utils/constants";

interface IOptions {
  method: string;
  headers: {
    "Content-Type": "application/json";
    Authorization?: string;
  };
  body?: string;
}

const getResponse = async (res: Response) => {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(await res.json());
};

const request = (url: string, options: IOptions) => {
  return fetch(url, options).then(getResponse);
};

export const getProductsList = (): Promise<TProduct[]> => {
  return request(`${productsEndPoint}?limit=6`, {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};

interface IOptions {
  method: string;
  headers: {
    "Content-Type": "application/json";
    Authorization?: string;
  };
  body?: string;
}

const getResponse = async (res: Response) => {
  console.log("res", res);
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(await res.json());
};

const request = (url: string, options: IOptions) => {
  return fetch(url, options).then(getResponse);
};

export const getCartsList = (): Promise<any> => {
  return request("https://fakestoreapi.com/products?limit=5", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
  });
};

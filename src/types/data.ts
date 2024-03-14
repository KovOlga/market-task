export type TProduct = {
  id: number;
  title: string;
  price: number;
  image: string;
  description: string;
};

export type TProductCounted = TProduct & {
  counter: number;
};

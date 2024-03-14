import { Div, Group, Spinner } from "@vkontakte/vkui";
import { FC, useEffect } from "react";
import ProductListItem from "../product-list-item";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";
import { updateTotalPriceAction } from "../../services/actions";

const ProductList: FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector(
    (store: RootState) => store.products.products
  );
  const loading = useAppSelector(
    (store: RootState) => store.products.reqInProccess
  );
  const error = useAppSelector((store: RootState) => store.products.reqFailed);

  useEffect(() => {
    dispatch(updateTotalPriceAction());
  }, [products, dispatch]);

  return (
    <Div>
      {loading && !error && <Spinner size="large" />}
      {!loading && error && (
        <Div>Произошла ошибка. Здесь должна быть ее обработка</Div>
      )}
      {!loading &&
        !error &&
        products.length > 0 &&
        products.map((product) => {
          return (
            <Group key={product.id}>
              <ProductListItem product={product} />
            </Group>
          );
        })}
      {!loading && !error && products.length === 0 && <Div>Корзина пуста</Div>}
    </Div>
  );
};

export default ProductList;

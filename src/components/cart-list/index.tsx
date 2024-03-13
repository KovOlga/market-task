import { Group, Spacing, Spinner } from "@vkontakte/vkui";
import { FC } from "react";
import CartListItem from "../cart-list-item";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";

const CartList: FC = () => {
  const products = useAppSelector((store: RootState) => store.carts.products);
  const loading = useAppSelector(
    (store: RootState) => store.carts.reqInProccess
  );
  const error = useAppSelector((store: RootState) => store.carts.reqFailed);
  return (
    <>
      {loading && !error && <Spinner size="large" />}
      {products.length > 0 &&
        products.map((product) => {
          return (
            <div key={product.id}>
              <Group>
                <Spacing size={16} />
                <CartListItem product={product} />
              </Group>
            </div>
          );
        })}
    </>
  );
};

export default CartList;

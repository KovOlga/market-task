import { Group, Spacing, Spinner } from "@vkontakte/vkui";
import { FC, useEffect } from "react";
import CartListItem from "../cart-list-item";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";
import { updateTotalPriceAction } from "../../services/actions";

const CartList: FC = () => {
  const dispatch = useAppDispatch();
  const products = useAppSelector((store: RootState) => store.carts.products);
  const loading = useAppSelector(
    (store: RootState) => store.carts.reqInProccess
  );
  const error = useAppSelector((store: RootState) => store.carts.reqFailed);

  useEffect(() => {
    dispatch(updateTotalPriceAction());
  }, [products]);
  
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

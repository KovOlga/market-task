import { Group, Spacing } from "@vkontakte/vkui";
import { FC } from "react";
import CartListItem from "../cart-list-item";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";

const CartList: FC = () => {
  const products = useAppSelector((store: RootState) => store.carts.products);
  return (
    <Group>
      {products.map((product) => {
        return (
          <div key={product.id}>
            <Spacing size={16} />
            <CartListItem product={product} />
          </div>
        );
      })}
    </Group>
  );
};

export default CartList;

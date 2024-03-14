import { Icon16Add, Icon16Minus, Icon24Delete } from "@vkontakte/icons";
import {
  Button,
  ButtonGroup,
  IconButton,
  Image,
  RichCell,
} from "@vkontakte/vkui";
import { FC } from "react";
import { TProductCounted } from "../../types/data";
import { useAppDispatch } from "../../hooks/hooks";
import {
  decreaseProductCounterThunk,
  deleteProductItemThunk,
  increaseProductCounterThunk,
} from "../../services/actions";

const CartListItem: FC<{ product: TProductCounted }> = ({ product }) => {
  const dispatch = useAppDispatch();

  const increaseCounter = (id: number) => {
    dispatch(increaseProductCounterThunk(id));
  };
  const decreaseCounter = (id: number) => {
    dispatch(decreaseProductCounterThunk(id));
  };

  const handleDelete = (id: number) => {
    dispatch(deleteProductItemThunk(id));
  };

  return (
    <RichCell
      before={<Image size={96} src={product.image} />}
      multiline
      caption={product.description}
      bottom={`${product.price} руб.`}
      actions={
        <ButtonGroup
          style={{ alignItems: "center", justifyContent: "space-between" }}
          mode="horizontal"
          gap="s"
          stretched
        >
          <ButtonGroup style={{ alignItems: "center" }}>
            <IconButton
              onClick={() => decreaseCounter(product.id)}
              hasHover
              label="minus"
              disabled={product.counter === 1}
              style={{
                margin: "0px",
              }}
            >
              <Icon16Minus />
            </IconButton>
            {product.counter}
            <IconButton
              onClick={() => increaseCounter(product.id)}
              hasHover
              label="add"
              disabled={product.counter === 10}
            >
              <Icon16Add />
            </IconButton>
          </ButtonGroup>
          <Button
            onClick={() => handleDelete(product.id)}
            mode="link"
            before={<Icon24Delete />}
          >
            Удалить товар
          </Button>
        </ButtonGroup>
      }
    >
      {product.title}
    </RichCell>
  );
};

export default CartListItem;

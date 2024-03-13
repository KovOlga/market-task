import { Icon16Add, Icon16Minus, Icon24Delete } from "@vkontakte/icons";
import {
  Button,
  ButtonGroup,
  IconButton,
  Image,
  RichCell,
} from "@vkontakte/vkui";
import { FC } from "react";
import { IProduct } from "../../types/data";

const CartListItem: FC<{ product: IProduct }> = ({ product }) => {
  return (
    <RichCell
      before={<Image size={96} src={product.image} />}
      multiline
      caption={product.description}
      bottom={product.price}
      actions={
        <ButtonGroup
          style={{ alignItems: "center", justifyContent: "space-between" }}
          mode="horizontal"
          gap="s"
          stretched
        >
          <ButtonGroup style={{ alignItems: "center" }}>
            <IconButton hasHover label="add">
              <Icon16Add />
            </IconButton>
            1
            <IconButton hasHover label="minus">
              <Icon16Minus />
            </IconButton>
          </ButtonGroup>
          <Button mode="link" before={<Icon24Delete />}>
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

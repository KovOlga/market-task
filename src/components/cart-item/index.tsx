import {
  Icon16Add,
  Icon16Minus,
  Icon24Delete,
} from "@vkontakte/icons";
import {
  Button,
  ButtonGroup,
  IconButton,
  Image,
  RichCell,
} from "@vkontakte/vkui";
import { FC } from "react";

const CartItem: FC = () => {
  return (
    <RichCell
      before={
        <Image
          size={96}
          src={"https://cdn.dummyjson.com/product-images/59/thumbnail.jpg"}
        />
      }
      multiline
      caption="Команда ВКонтакте, Санкт-ПетербурККоманда ВКонтакте, Санкт-ПетербургКоманда ВКонтакте, Санкт-Петербургоманда ВКонтакте, Санкт-Петербургг"
      bottom={"cost"}
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
      Илья Гришин
    </RichCell>
  );
};

export default CartItem;

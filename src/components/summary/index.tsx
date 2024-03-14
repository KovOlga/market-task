import { Div, Text } from "@vkontakte/vkui";
import { FC } from "react";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../types";

const Summary: FC = () => {
  const total = useAppSelector((store: RootState) => store.products.totalPrice);
  return (
    <Div>
      <Text>{`Итого: ${total} руб.`}</Text>
    </Div>
  );
};

export default Summary;

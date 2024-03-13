import {
  AppRoot,
  SplitLayout,
  SplitCol,
  View,
  Panel,
  PanelHeader,
  usePlatform,
  Group,
  Header,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import Summary from "./components/summary";
import { useEffect } from "react";
import { useAppDispatch } from "./hooks/hooks";
import { getCarts } from "./services/actions";
import CartList from "./components/cart-list";

export default function App() {
  const platform = usePlatform();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getCarts());
  }, []);

  return (
    <AppRoot>
      <SplitLayout
        header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
      >
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>Корзина</PanelHeader>
              <Group header={<Header mode="primary">Список товаров:</Header>}>
                <SplitLayout>
                  <SplitCol>
                    <CartList />
                  </SplitCol>
                  <SplitCol maxWidth={500}>
                    <Summary />
                  </SplitCol>
                </SplitLayout>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

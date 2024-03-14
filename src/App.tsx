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
import ProductList from "./components/product-list";
import { useAppDispatch } from "./hooks/hooks";
import { getProductsThunk } from "./services/actions";
import { useEffect } from "react";

export default function App() {
  const platform = usePlatform();
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getProductsThunk());
  }, [dispatch]);

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
                <SplitLayout
                  style={{
                    display: "grid",
                    gridTemplateColumns: "3fr 1fr",
                    gridTemplateRows: "auto",
                    alignItems: "start",
                    justifyItems: "stretch",
                  }}
                >
                  <SplitCol width="100%">
                    <ProductList />
                  </SplitCol>
                  <SplitCol width="100%">
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

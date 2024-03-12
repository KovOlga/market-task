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
  Spacing,
} from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";
import CartItem from "./components/cart-item";

export default function App() {
  const platform = usePlatform();

  return (
    <AppRoot>
      <SplitLayout
        header={platform !== "vkcom" && <PanelHeader delimiter="none" />}
      >
        <SplitCol autoSpaced>
          <View activePanel="main">
            <Panel id="main">
              <PanelHeader>VKUI</PanelHeader>
              <Group header={<Header mode="secondary">Корзина:</Header>}>
                <SplitLayout>
                  <SplitCol>
                    <Spacing size={16} />
                    <Group>
                      <CartItem />
                    </Group>
                    <Spacing size={16} />
                    <Group>
                      <CartItem />
                    </Group>
                  </SplitCol>
                  <SplitCol maxWidth={300}>ffffrfr</SplitCol>
                </SplitLayout>
              </Group>
            </Panel>
          </View>
        </SplitCol>
      </SplitLayout>
    </AppRoot>
  );
}

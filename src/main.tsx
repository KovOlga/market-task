import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import { AdaptivityProvider, ConfigProvider } from "@vkontakte/vkui";
import { initStore } from "./services/store.ts";
import { Provider } from "react-redux";

export const store = initStore();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <ConfigProvider>
        <AdaptivityProvider>
          <App />
        </AdaptivityProvider>
      </ConfigProvider>
    </Provider>
  </React.StrictMode>
);

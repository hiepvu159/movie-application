import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import NavigationAuth from "./src/navigations/NavigationAuth";
import { Provider } from "react-redux";
import { store } from "./redux/store";

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <NavigationAuth />
      </NavigationContainer>
    </Provider>
  );
}

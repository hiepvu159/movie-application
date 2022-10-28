import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import Home from "../screens/Home";
import InfoMovie from "../screens/InfoMovie";
import Profile from "../screens/Profile";
import SignUp from "../screens/SignUp";
import Watch from "../screens/Watch";
import BottomTabs from "./BottomTabs";

const Stack = createStackNavigator();
export default function NavigationAuth() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="BottomTabs"
        component={BottomTabs}
        options={{ headerShown: false }}
      />
      <Stack.Screen name="InfoMovie" component={InfoMovie} />
      {/* <Stack.Screen name="SignUp" component={SignUp} /> */}
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Watch" component={Watch} />
      <Stack.Screen name="Profile" component={Profile} />
    </Stack.Navigator>
  );
}

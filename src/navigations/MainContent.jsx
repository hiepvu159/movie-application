import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Ionicons from "react-native-vector-icons/Ionicons";
import Home from "../screens/Home";
import Search from "../screens/Search";
import Filter from "../screens/Filter";
import Login from "../screens/Login";

const Tab = createBottomTabNavigator();

const homeName = "Home";
const searchName = "Search";
const filterName = "Filter";
const loginName = "Login";

export default function MainContent() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName={homeName}
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            let rn = route.name;

            if (rn === homeName) {
              iconName = focused ? "home" : "home-outline";
            } else if (rn === searchName) {
              iconName = focused ? "md-search" : "md-search-outline";
            } else if (rn === filterName) {
              iconName = focused ? "list" : "list-outline";
            } else iconName = focused ? "md-person" : "md-person-outline";

            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "black",
          tabBarInactiveTintColor: "grey",
          tabBarLabelStyle: { paddingBottom: 10, fontsize: 10 },
        })}
      >
        <Tab.Screen name={homeName} component={Home} />
        <Tab.Screen name={searchName} component={Search} />
        <Tab.Screen name={filterName} component={Filter} />
        <Tab.Screen name={loginName} component={Login} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

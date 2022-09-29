import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { View } from "react-native";
import MainContent from "./src/navigations/MainContent";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import InfoMovie from "./src/screens/InfoMovie";

export default function App() {
  return (
    <SafeAreaProvider>
<<<<<<< HEAD
      <MainContent />
=======
      <InfoMovie />
>>>>>>> ab02e70bd7ad021c669f57e0f05c92caf8474b41
    </SafeAreaProvider>
  );
}

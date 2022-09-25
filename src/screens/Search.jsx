import React, { useState } from "react";
import { View, StyleSheet } from "react-native";
import { SearchBar } from "@rneui/themed";
export default function Search({ navigation }) {
  const [value, setValue] = useState("");
  const updateSearch = (search) => {
    setSearch(search);
  };
  return (
    <View>
      <SearchBar
        platform="android"
        onChangeText={(newVal) => setValue(newVal)}
        onClearText={() => console.log(onClearText())}
        placeholder="Type query here..."
        placeholderTextColor="#888"
        cancelButtonTitle="Cancel"
        cancelButtonProps={{}}
        value={value}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },
});

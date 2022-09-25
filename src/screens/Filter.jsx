import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import SelectList from "react-native-dropdown-select-list";

export default function Filter({ navigation }) {
  const [selected, setSelected] = useState("");

  const data = [{ key: "1", value: "Jammu & Kashmir" }];
  return (
    <View>
      <SelectList
        style={styles.filter}
        setSelected={setSelected}
        data={data}
        onSelect={() => console.log(selected)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  filter: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },
});

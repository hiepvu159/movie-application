import React from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
export default function Login({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 26 }}>Login</Text>
      <TextInput style={styles.textInput} placeholder="Email" />
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder="Password"
      />
      <Button size="md" title="Submit" buttonStyle={styles.sumbitLogin}>
        Sumbit
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  sumbitLogin: {
    backgroundColor: "#333",
    borderRadius: 10,
  },
  textInput: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
});

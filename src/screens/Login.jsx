import React, { useState } from "react";
import { View, Text, TextInput, StyleSheet } from "react-native";
import { Button } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import { loginUser } from "../services/auth";

export default function Login() {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [userName, setUserName] = useState("");
  const [passWord, setPassWord] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);

  const handleLogin = async () => {
    // navigation.navigate("Profile");
    const userLogin = {
      username: userName,
      password: passWord,
    };
    await loginUser(userLogin, dispatch, navigation, setErrorMessage);
  };

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text style={{ fontSize: 26, marginBottom: 20 }}>Đăng nhập</Text>
      <TextInput
        style={styles.textInput}
        placeholder="Tên đăng nhập"
        onChangeText={(text) => setUserName(text)}
      />
      <TextInput
        style={styles.textInput}
        secureTextEntry={true}
        placeholder="Mật khẩu"
        onChangeText={(text) => setPassWord(text)}
      />
      {errorMessage && (
        <View>
          <Text>{errorMessage}</Text>
        </View>
      )}
      <View
        style={{
          width: 300,
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <Button
          size="md"
          title="Submit"
          buttonStyle={styles.sumbitLogin}
          onPress={handleLogin}
        >
          Đăng nhập
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  sumbitLogin: {
    backgroundColor: "#333",
    borderRadius: 10,
  },
  textInput: {
    width: 300,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    marginBottom: 10,
  },
});

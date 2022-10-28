import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "react-native";
import { Image } from "react-native";
import { View } from "react-native";
import { Button } from "@rneui/themed";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../services/auth";
import { useNavigation } from "@react-navigation/native";

export default function Profile() {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const navigaiton = useNavigation();
  const dispatch = useDispatch();
  const handleLogOut = async () => {
    await logoutUser(dispatch, navigaiton);
  };
  return (
    <View>
      <View
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
      >
        <View>
          <View
            style={{
              backgroundColor: "#EDF0F4",
            }}
          >
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                margin: 10,
              }}
            >
              <Image
                style={{ height: 50, width: 50, borderRadius: 30 }}
                source={{
                  uri:
                    `${currentUser?.avatar}` ||
                    "https://ephoto360.com/uploads/effect-data/ephoto360.com/1362b22eb/t5e787cba70ec8.jpg",
                }}
              />
              <Text style={{ fontSize: 20, marginLeft: 10, marginTop: 10 }}>
                {currentUser?.name}
              </Text>
            </View>
          </View>
          <View>
            <View>
              <Text style={styles.textItem}>Email: {currentUser?.email}</Text>
            </View>
            <View>
              <Text style={styles.textItem}>Ngày sinh: {currentUser?.dob}</Text>
            </View>
            <View>
              <Text style={styles.textItem}>
                Giới tính: {currentUser?.gender}
              </Text>
            </View>
            <View>
              <Text style={styles.textItem}>
                Địa chỉ: {currentUser?.address}
              </Text>
            </View>
            <View>
              <Text style={styles.textItem}>
                Số điện thoại: {currentUser?.phone}
              </Text>
            </View>
          </View>
        </View>
        <View style={{ marginTop: 30 }}>
          <Button
            size="md"
            title="Submit"
            buttonStyle={styles.btnLogOut}
            onPress={handleLogOut}
          >
            Đăng xuất
          </Button>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  textItem: {
    margin: 10,
    fontSize: 16,
  },
  btnLogOut: {
    marginHorizontal: 100,
    backgroundColor: "#333",
    borderRadius: 10,
  },
});

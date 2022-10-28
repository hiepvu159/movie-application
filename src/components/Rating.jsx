import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { useSelector } from "react-redux";
import { getUserById } from "../services/user";

export default function Rating({ data, id }) {
  const currentUser = useSelector((state) => state.auth.currentUser);
  const [user, setUser] = useState([]);
  useEffect(() => {
    getUserById(setUser, id);
  }, []);
  return (
    <View>
      <View
        style={{ display: "flex", flexDirection: "row", marginVertical: 10 }}
      >
        <View>
          <Image
            style={{ width: 40, height: 40, borderRadius: 20 }}
            source={{
              uri:
                user?.avatar ||
                "https://thumbs.dreamstime.com/b/default-avatar-profile-icon-vector-social-media-user-portrait-176256935.jpg",
            }}
          />
        </View>
        <View style={{ marginLeft: 10 }}>
          <Text style={{ fontWeight: "500", fontSize: 16 }}>{user?.name}</Text>
          <Text>Đã đánh giá {data?.rating}/10</Text>
        </View>
      </View>
    </View>
  );
}

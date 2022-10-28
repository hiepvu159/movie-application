import { useNavigation } from "@react-navigation/native";
import React from "react";
import { Image, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import InfoMovie from "../screens/InfoMovie";

export default function Card({ data }) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("InfoMovie", {
          data,
        })
      }
    >
      <View>
        <Image
          source={{
            uri:
              data.poster_url ||
              "https://ih1.redbubble.net/image.2947377023.5715/fposter,small,wall_texture,product,750x1000.jpg",
          }}
          style={styles.poster}
        />
        <View>
          <Text style={styles.name}>{data.name}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  poster: {
    width: 120,
    height: 170,
    objectFit: "cover",
  },
  name: {
    width: 120,
  },
});

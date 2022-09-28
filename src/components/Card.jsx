import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

export default function Card(props) {
  const { data } = props;
  return (
    <View>
      <Image source={{ uri: data.poster_url }} style={styles.poster} />
      <View>
        <Text style={styles.name}>{data.name}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  poster: {
    width: 160,
    height: 220,
    objectFit: "cover",
  },
  name: {
    width: 160,
  },
});

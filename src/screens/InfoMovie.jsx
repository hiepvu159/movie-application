import * as React from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { Text } from "@rneui/themed";
import { useNavigation, useRoute } from "@react-navigation/native";

export default function InfoMovie() {
  const [status, setStatus] = React.useState({});
  const navigation = useNavigation();
  const {
    params: { data },
  } = useRoute();
  return (
    <View>
      {/* <StatusBar hidden /> */}
      <Image
        source={{
          uri: `${data?.thumb_url}`,
        }}
        style={styles.thumbnail}
      />
      <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
        <Text h3 h3Style={{ fontSize: 30 }}>
          {data?.name}
        </Text>
        <Text h4 h4Style={{ fontSize: 16 }}>
          {data?.origin_name} {""} ({data?.year})
        </Text>
        <Text h4 h4Style={{ fontSize: 16 }}>
          Thể loại: {data?.category}
        </Text>
        <Text h4 h4Style={{ fontSize: 16 }}>
          Danh mục: {data?.type}
        </Text>
        <View>
          <Text h4 h4Style={{ fontSize: 16 }}>
            Đạo diễn: {data?.director}
          </Text>
          <Text h4 h4Style={{ fontSize: 16 }}>
            Diễn viên: {data?.actor}
          </Text>
          <Text h4 h4Style={{ fontSize: 16 }}>
            Nội Dung: {`${data?.content}`}
          </Text>
        </View>
        <Button
          size="md"
          buttonStyle={{ width: "30%", marginTop: 15, backgroundColor: "red" }}
          onPress={() => navigation.navigate("Watch", { data })}
        >
          Xem phim
        </Button>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "row",
  },
  thumbnail: {
    height: 230,
    objectFit: "cover",
  },
  poster: {
    height: 150,
    width: 90,
  },
});

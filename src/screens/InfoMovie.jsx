import * as React from "react";
import { View, StyleSheet, Button, Image } from "react-native";
import { Video, AVPlaybackStatus } from "expo-av";
import { StatusBar } from "expo-status-bar";
import { Text } from "@rneui/themed";

export default function App() {
  const video = React.useRef(null);
  const [status, setStatus] = React.useState({});
  return (
    <View>
      <StatusBar hidden />
      <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
        <Text h3 h3Style={{ fontSize: 30 }}>
          Thor: Tình yêu và sấm sét
        </Text>
        <Text h4 h4Style={{ fontSize: 16 }}>
          Thor: Love and Thunder
        </Text>
        <Text h4 h4Style={{ fontSize: 16 }}>
          2022
        </Text>
      </View>
      <Image
        source={{
          uri: "https://tiepthigiadinh.vn/wp-content/uploads/2015/08/20150825-phim-rap-49-ngay-thumbnail.jpg",
        }}
        style={styles.thumbnail}
      />
      <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
        <View style={styles.container}>
          <Image
            style={styles.poster}
            source={{
              uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
            }}
          />
          <View style={{ marginLeft: 5 }}>
            <View
              style={{
                maxWidth: 320,
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                wordWrap: "break-word",
              }}
            >
              <Text
                h4
                h4Style={{
                  borderWidth: 2,
                  fontSize: 14,
                  borderRadius: 5,
                  marginRight: 2,
                  paddingHorizontal: 5,
                  textAlign: "center",
                }}
              >
                Hanh Dong
              </Text>
              <Text
                h4
                h4Style={{
                  borderWidth: 2,
                  fontSize: 14,
                  borderRadius: 5,
                  marginRight: 2,
                  paddingHorizontal: 5,
                  textAlign: "center",
                }}
              >
                Hanh Dong
              </Text>
              <Text
                h4
                h4Style={{
                  borderWidth: 2,
                  fontSize: 14,
                  borderRadius: 5,
                  marginRight: 2,
                  paddingHorizontal: 5,
                  textAlign: "center",
                }}
              >
                Hanh Dong
              </Text>
              <Text
                h4
                h4Style={{
                  borderWidth: 2,
                  fontSize: 14,
                  borderRadius: 5,
                  marginRight: 2,
                  paddingHorizontal: 5,
                  textAlign: "center",
                }}
              >
                Hanh Dong
              </Text>
              <Text
                h4
                h4Style={{
                  borderWidth: 2,
                  fontSize: 14,
                  borderRadius: 5,
                  marginRight: 2,
                  paddingHorizontal: 5,
                  textAlign: "center",
                }}
              >
                Hanh Dong
              </Text>
            </View>
            <Text h4 h4Style={{ fontSize: 16 }}>
              Danh muc: Feng宝
            </Text>
          </View>
        </View>
      </View>
      <View>
        <Text h4 h4Style={{ fontSize: 16 }}>
          Dao dien: Feng宝
        </Text>
        <Text h4 h4Style={{ fontSize: 16 }}>
          Dien vien: Feng宝
        </Text>
        <Text h4 h4Style={{ fontSize: 16 }}>
          Noi Dung: Feng宝
        </Text>
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

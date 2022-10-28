import React, { useEffect, useRef, useState } from "react";
import { View, StyleSheet, Image } from "react-native";
import { Button } from "@rneui/themed";
import { StatusBar } from "expo-status-bar";
import { Text } from "@rneui/themed";
import { Video } from "expo-av";
import Comment from "../components/Comment";
import Rating from "../components/Rating";
import { useNavigation, useRoute } from "@react-navigation/native";
import { useSelector } from "react-redux";
import { getMovieById } from "../services/movie";
import { TextInput } from "react-native";
import { ScrollView } from "react-native";
import { addComments } from "../services/comment";
import { addRating } from "../services/rating";
import { Dimensions } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

export default function Watch() {
  const currentUser = useSelector((s) => s.auth.currentUser);
  const [movie, setMovie] = useState([]);
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState("");
  const [load, setLoad] = useState(false);
  const videoRef = useRef(null);
  const {
    params: { data },
  } = useRoute();

  useEffect(() => {
    getMovieById(data?._id, setMovie);
  }, [load]);

  const handleComment = async (e) => {
    e.preventDefault();
    await addComments(comment, movie?._id, currentUser?.accessToken);
    setLoad(!load);
    setComment("");
  };

  const handleRating = async (e) => {
    e.preventDefault();
    await addRating(rating, movie?._id, currentUser?.accessToken);
    setLoad(!load);
    setRating("");
  };

  const setOrientation = () => {
    if (Dimensions.get("window").height > Dimensions.get("window").width) {
      //Device is in portrait mode, rotate to landscape mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE);
    } else {
      //Device is in landscape mode, rotate to portrait mode.
      ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT);
    }
  };
  return (
    <ScrollView>
      <View>
        {/* <StatusBar hidden /> */}
        <Video
          source={{
            uri: `${data?.episodes}`,
          }}
          volume={1.0}
          isMuted={false}
          resizeMode="cover"
          shouldPlay
          useNativeControls
          style={{ width: Dimensions.get("window").width, height: 200 }}
          onFullscreenUpdate={setOrientation}
        />
        <View style={{ marginHorizontal: 10, marginVertical: 5 }}>
          <View style={{ marginBottom: 20 }}>
            <Text h3 h3Style={{ fontSize: 30 }}>
              {data?.name} {""} ({data?.year})
            </Text>
            <Text h4 h4Style={{ fontSize: 16 }}>
              Thể loại: {data?.category}
            </Text>
            <Text h4 h4Style={{ fontSize: 16 }}>
              Danh mục: {data?.type}
            </Text>
          </View>
          <View>
            <Text
              h3
              h3Style={{ fontSize: 20, fontWeight: "800", marginBottom: 10 }}
            >
              Đánh giá
            </Text>
            {currentUser ? (
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                  source={{ uri: currentUser?.avatar }}
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: 10,
                  }}
                >
                  <TextInput
                    style={styles.textInput}
                    placeholder="Nhập số điểm đánh giá"
                    keyboardType="numeric"
                    onChangeText={(text) => setRating(text)}
                  />
                  <Button
                    size="md"
                    title="Submit"
                    buttonStyle={styles.sumbitLogin}
                    onPress={handleRating}
                  >
                    Đánh giá
                  </Button>
                </View>
              </View>
            ) : (
              <View>
                <Text>Vui lòng đăng nhập để bình luận</Text>
              </View>
            )}
            <View>
              {movie?.ratings?.map((item) => (
                <View key={item._id} style={styles.itemList}>
                  <Rating data={item} id={item?.postedBy} />
                </View>
              ))}
            </View>
          </View>
          <View>
            <Text
              h3
              h3Style={{ fontSize: 20, fontWeight: "800", marginBottom: 10 }}
            >
              Bình luận
            </Text>
            {currentUser ? (
              <View style={{ display: "flex", flexDirection: "row" }}>
                <Image
                  style={{ width: 40, height: 40, borderRadius: 20 }}
                  source={{ uri: currentUser?.avatar }}
                />
                <View
                  style={{
                    display: "flex",
                    flexDirection: "row",
                    marginLeft: 10,
                  }}
                >
                  <TextInput
                    style={styles.textInput}
                    placeholder="Nhập bình luận"
                    onChangeText={(text) => setComment(text)}
                  />
                  <Button
                    size="md"
                    title="Submit"
                    buttonStyle={styles.sumbitLogin}
                    onPress={handleComment}
                  >
                    Bình luận
                  </Button>
                </View>
              </View>
            ) : (
              <View>
                <Text>Vui lòng đăng nhập để bình luận</Text>
              </View>
            )}
            <View>
              {movie?.comments?.map((item) => (
                <View key={item._id} style={styles.itemList}>
                  <Comment data={item} id={item?.postedBy} />
                </View>
              ))}
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  video: {
    alignSelf: "center",
    width: "100%",
    height: 230,
  },
  itemList: {
    marginBottom: 5,
  },
  textInput: {
    width: 250,
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    marginBottom: 10,
  },
  sumbitLogin: {
    backgroundColor: "#333",
    borderRadius: 5,
  },
});

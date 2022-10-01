import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  View,
  SafeAreaView,
  Text,
  ScrollView,
  Image,
  FlatList,
} from "react-native";
import Swiper from "react-native-swiper/src";
import { getMovies } from "../services/movie";
import Card from "../components/Card";
export default function Home() {
  const [movies, setMovie] = useState([]);
  const renderItem = ({ item }) => (
    <View style={{ flex: 1, paddingHorizontal: 20, marginBottom: 10 }}>
      <Card data={item} />
    </View>
  );
  useEffect(() => {
    getMovies(setMovie);
  }, []);
  return (
    <View>
      <ScrollView>
        <View>
          <Swiper style={styles.wrapper} showsButtons={true} autoplay loop>
            <View style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
        </View>
        <View>
          <View>
            <Text style={styles.title}>Phim Moi</Text>
          </View>
          <View style={styles.slideMovie}>
            <FlatList
              data={movies}
              renderItem={renderItem}
              keyExtractor={(item, index) => index.toString()}
              numColumns={2}
              nestedScrollEnabled
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 250,
  },
  slide1: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#9DD6EB",
  },
  slide2: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#97CAE5",
  },
  slide3: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#92BBD9",
  },
  text: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
  },
  title: {
    color: "#000",
    fontSize: 20,
    fontWeight: "bold",
  },
  poster: {
    height: 110,
    width: 80,
    objectFit: "cover",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 5,
  },
});

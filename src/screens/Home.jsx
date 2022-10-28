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
import {
  getMovieByCategory,
  getMovies,
  getMoviesSeries,
  getMoviesSingle,
  getNewMovie,
} from "../services/movie";
import Card from "../components/Card";

export default function Home() {
  // const [movies, setMovie] = useState([]);
  const [movieSingle, setMovieSingle] = useState([]);
  const [movieSeries, setMovieSeries] = useState([]);
  const [newMovie, setNewMovie] = useState([]);
  const [movieActions, setMovieActions] = useState([]);
  const [movieScience, setMovieScience] = useState([]);
  const [movieFiction, setmovieFiction] = useState([]);
  const [moviePL, setMoviePL] = useState([]);
  const action = "Hành-Động";
  const science = "Tâm-Lý";
  const plieu = "Phiêu-Lưu";
  const fiction = "Viễn-Tưởng";
  useEffect(() => {
    // getMovies(setMovie);
    getMoviesSeries(setMovieSeries);
    getMoviesSingle(setMovieSingle);
    getNewMovie(setNewMovie);
    getMovieByCategory(setMovieActions, action);
    getMovieByCategory(setMovieScience, science);
    getMovieByCategory(setmovieFiction, fiction);
    getMovieByCategory(setMoviePL, plieu);
  }, []);
  return (
    <View>
      <ScrollView>
        <View>
          <Swiper
            style={styles.wrapper}
            autoplay
            loop
            loadMinimal
            loadMinimalSize={1}
          >
            {newMovie?.map((movie) => (
              <View key={movie._id}>
                <Image
                  source={{ uri: movie.thumb_url }}
                  style={styles.slide1}
                />
              </View>
            ))}
          </Swiper>
        </View>
        <View>
          <View style={{ paddingHorizontal: 5 }}>
            <View>
              <Text style={styles.title}>Phim Mới</Text>
            </View>
            <View>
              <ScrollView horizontal>
                <View style={styles.slideMovie}>
                  {newMovie?.map((movie) => (
                    <View
                      style={{ marginBottom: 10, marginRight: 20 }}
                      key={movie._id}
                    >
                      <Card data={movie} />
                    </View>
                  ))}
                </View>
              </ScrollView>
            </View>
            <View style={{ paddingHorizontal: 5 }}>
              <View>
                <Text style={styles.title}>Phim viễn tưởng</Text>
              </View>
              <View>
                <ScrollView horizontal>
                  <View style={styles.slideMovie}>
                    {movieFiction.slice(0, 9).map((movie) => (
                      <View
                        style={{ marginBottom: 10, marginRight: 20 }}
                        key={movie._id}
                      >
                        <Card data={movie} />
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </View>
            </View>
            <View style={{ paddingHorizontal: 5 }}>
              <View>
                <Text style={styles.title}>Phim hành động</Text>
              </View>
              <View>
                <ScrollView horizontal>
                  <View style={styles.slideMovie}>
                    {movieActions.slice(0, 9)?.map((movie) => (
                      <View
                        style={{ marginBottom: 10, marginRight: 20 }}
                        key={movie._id}
                      >
                        <Card data={movie} />
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </View>
            </View>
            <View style={{ paddingHorizontal: 5 }}>
              <View>
                <Text style={styles.title}>Phim phiêu lưu</Text>
              </View>
              <View>
                <ScrollView horizontal>
                  <View style={styles.slideMovie}>
                    {moviePL.slice(0, 9)?.map((movie) => (
                      <View
                        style={{ marginBottom: 10, marginRight: 20 }}
                        key={movie._id}
                      >
                        <Card data={movie} />
                      </View>
                    ))}
                  </View>
                </ScrollView>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 250,
    backgroundColor: "#333",
    marginBottom: 20,
  },
  slide1: {
    width: "auto",
    height: 250,
    objectFit: "cover",
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
    marginBottom: 10,
  },
  poster: {
    height: 110,
    width: 80,
    objectFit: "cover",
    marginTop: 10,
    marginBottom: 10,
    marginHorizontal: 5,
  },
  slideMovie: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
  },
});

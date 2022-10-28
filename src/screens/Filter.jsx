import React, { useEffect, useState } from "react";
import {
  View,
  TextInput,
  StyleSheet,
  ScrollView,
  FlatList,
} from "react-native";
import SelectList from "react-native-dropdown-select-list";
import Ionicons from "react-native-vector-icons/Ionicons";
import { options } from "../../options";
import Card from "../components/Card";
import { filterMovie, getMovies } from "../services/movie";

export default function Filter() {
  const [movies, setMovies] = useState([]);
  const [filterResults, setFilterResults] = useState([]);
  const [selected, setSelected] = useState("");
  const params = selected.replace(" ", "-");
  const renderItem = ({ item }) => (
    <View
      style={{
        flex: 1,
        paddingHorizontal: 30,
        marginTop: 10,
        marginBottom: 10,
      }}
    >
      <Card data={item} />
    </View>
  );
  useEffect(() => {
    getMovies(setMovies);
  }, []);
  useEffect(() => {
    filterMovie(params, setFilterResults);
  }, [params]);

  return (
    <View style={{ paddingHorizontal: 5, marginBottom: 20 }}>
      <SelectList
        style={styles.filter}
        setSelected={setSelected}
        data={options}
        placeholder={"Chọn thể loại phim"}
        arrowicon={<Ionicons name={"chevron-down"} size={16} color={"black"} />}
      />
      <View
        style={{
          marginBottom: 95,
          marginHorizontal: 20,
        }}
      >
        <FlatList
          data={filterResults}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  filter: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
    zIndex: 3,
  },
});

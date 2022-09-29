<<<<<<< HEAD
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
    <View style={{ flex: 1, paddingHorizontal: 20, marginBottom: 10 }}>
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
    <View style={{ paddingHorizontal: 5 }}>
      <SelectList
        style={styles.filter}
        setSelected={setSelected}
        data={options}
        arrowicon={<Ionicons name={"chevron-down"} size={16} color={"black"} />}
      />
      <View
        style={{
          marginBottom: 95,
        }}
      >
        <FlatList
          data={filterResults}
          renderItem={renderItem}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
        />
      </View>
=======
import React, { useState } from "react";
import { View, TextInput, StyleSheet } from "react-native";
import SelectList from "react-native-dropdown-select-list";

export default function Filter({ navigation }) {
  const [selected, setSelected] = useState("");

  const data = [{ key: "1", value: "Jammu & Kashmir" }];
  return (
    <View>
      <SelectList
        style={styles.filter}
        setSelected={setSelected}
        data={data}
        onSelect={() => console.log(selected)}
      />
>>>>>>> ab02e70bd7ad021c669f57e0f05c92caf8474b41
    </View>
  );
}

const styles = StyleSheet.create({
  filter: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
<<<<<<< HEAD
    zIndex: 3,
=======
>>>>>>> ab02e70bd7ad021c669f57e0f05c92caf8474b41
  },
});

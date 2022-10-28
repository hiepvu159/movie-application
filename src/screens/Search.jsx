import React, { useEffect, useState } from "react";
import { View, StyleSheet, ScrollView, FlatList } from "react-native";
import { SearchBar } from "@rneui/themed";
import { getMovies, searchMovie } from "../services/movie";
import Card from "../components/Card";
export default function Search({ navigation }) {
  const [movies, setMovies] = useState([]);
  const [searchResults, setSearchResults] = useState([]);
  const [value, setValue] = useState("");
  const renderItem = ({ item }) => (
    <View style={{ flex: 1, marginHorizontal: 40, marginVertical: 10 }}>
      <Card data={item} />
    </View>
  );

  useEffect(() => {
    searchMovie(value, setSearchResults);
  }, [value]);

  return (
    <View>
      <SearchBar
        platform="android"
        onChangeText={(newVal) => setValue(newVal)}
        onClearText={() => console.log(onClearText())}
        placeholder="Nhập tên cần tìm kiếm"
        placeholderTextColor="#888"
        cancelButtonTitle="Cancel"
        cancelButtonProps={{}}
        value={value}
      />
      <View style={{ paddingHorizontal: 5, marginBottom: 120 }}>
        {value.length === 0 ? (
          <></>
        ) : (
          <FlatList
            data={searchResults}
            renderItem={renderItem}
            keyExtractor={(item, index) => index.toString()}
            numColumns={2}
          />
        )}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  search: {
    borderStyle: "solid",
    borderWidth: 1,
    borderRadius: 15,
    padding: 10,
  },
});

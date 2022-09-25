import React from "react";
import { StyleSheet, View, SafeAreaView, Text, ScrollView } from "react-native";
import Swiper from "react-native-swiper/src";
import { Image } from "@rneui/themed";
export default function Home() {
  return (
    <ScrollView style={{ flex: 1 }}>
      <SafeAreaView>
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
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.title}>Phim Moi</Text>

          <View style={styles.slideMovie}>
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.title}>Phim Moi</Text>

          <View style={styles.slideMovie}>
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
          </View>
        </View>
        <View>
          <Text style={styles.title}>Phim Moi</Text>
          <View style={styles.slideMovie}>
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
            <Image
              style={styles.poster}
              source={{
                uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDU3HLM6oq00XZWhfUSP22hpIyS5pLxugG6kOjjRet&s",
              }}
            />
          </View>
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  wrapper: {
    height: 300,
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
  slideMovie: {
    display: "flex",
    flexDirection: "row",
    overflowX: "scroll",
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

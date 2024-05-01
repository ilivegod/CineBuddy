import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../hook/UseFetch";

const SeeAllPage = ({ route, navigation }) => {
  const [result, setResult] = useState([1, 2, 3, 4, 5]);

  const { item } = route.params;

  useEffect(() => {
    if (item === "trending") {
      getTrendingMovies();
    } else if (item === "topRated") {
      getTopRatedMoves();
    } else {
      getUpcomingMoves();
    }
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    if (data && data?.results) setResult(data.results);
  };

  const getTopRatedMoves = async () => {
    const data = await fetchTopRatedMovies();
    if (data && data?.results) setResult(data.results);
  };

  const getUpcomingMoves = async () => {
    const data = await fetchUpcomingMovies();
    if (data && data?.results) setResult(data.results);
  };
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111010" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <Text style={{ color: "white", fontWeight: "600", fontSize: 25 }}>
          {item === "trending"
            ? "Trending Now"
            : item === "topRated"
            ? "Top Rated Movies"
            : "Upcoming Movies"}
        </Text>
      </View>
      <ScrollView style={{ marginTop: 20 }}>
        <View showsVerticalScrollIndicator={false}>
          <View
            style={{
              flexWrap: "wrap",
              flexDirection: "row",

              justifyContent: "center",
            }}
          >
            {/* Enable wrapping for multiple rows */}
            {result?.map((item, index) => {
              return (
                <TouchableOpacity
                  key={index}
                  style={{ paddingHorizontal: 10, paddingVertical: 15 }}
                  onPress={() =>
                    navigation.navigate("MovieDetail", { item: item.id })
                  }
                >
                  <MovieCard data={item} />
                </TouchableOpacity>
              );
            })}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SeeAllPage;

const styles = StyleSheet.create({});

import {
  View,
  Text,
  TouchableOpacity,
  Image,
  ScrollView,
  TouchableWithoutFeedback,
} from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useState, useEffect } from "react";
import MovieCard from "../components/MovieCard";
import MovieDetail from "./MovieDetail";
import {
  fetchTopRatedMovies,
  fetchTrendingMovies,
  fetchUpcomingMovies,
} from "../hook/UseFetch";

const Home = ({ navigation }) => {
  const [trending, setTrending] = useState([]);
  const [topRated, setTopRated] = useState([]);
  const [upcoming, setUpcoming] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    getTrendingMovies();
    getTopRatedMoves();
    getUpcomingMoves();
  }, []);

  const getTrendingMovies = async () => {
    const data = await fetchTrendingMovies();
    if (data && data?.results) setTrending(data.results);
  };

  const getTopRatedMoves = async () => {
    const data = await fetchTopRatedMovies();
    if (data && data?.results) setTopRated(data.results);
  };

  const getUpcomingMoves = async () => {
    const data = await fetchUpcomingMovies();
    if (data && data?.results) setUpcoming(data.results);
  };

  return (
    // backgroundColor: "#111010"
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111010" }}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 20,
        }}
      >
        <TouchableOpacity onPress={() => navigation.navigate("MovieDetail")}>
          <Image
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              borderWidth: 1,
              borderColor: "gray",
            }}
            source={require("../assets/profile.jpg")}
          />
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => navigation.navigate("SearchPage")}
          style={{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: "gray",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Feather name="search" size={20} color="white" />
        </TouchableOpacity>
      </View>
      <ScrollView style={{ paddingHorizontal: 20 }}>
        {/* --------------Trending Now---------------- */}
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "white", fontWeight: "600", fontSize: 25 }}>
              Trending Now
            </Text>

            <TouchableOpacity>
              <Text style={{ color: "gray" }}>See all</Text>
            </TouchableOpacity>
          </View>

          <ScrollView
            horizontal
            style={{ marginTop: 20, flexDirection: "row" }}
            showsHorizontalScrollIndicator={false}
          >
            {trending.map((item, index) => {
              //console.log(item);
              return (
                <TouchableOpacity
                  key={index}
                  style={{ color: "white", paddingRight: 20 }}
                  onPress={() =>
                    navigation.navigate("MovieDetail", { item: item.id })
                  }
                >
                  {trending.length > 0 && <MovieCard data={item} />}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        {/* --------------Top Rated---------------- */}
        <View style={{ marginTop: 0 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "white", fontWeight: "600", fontSize: 25 }}>
              Top Rated Movies
            </Text>

            <TouchableOpacity>
              <Text style={{ color: "gray" }}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            style={{ marginTop: 20, flexDirection: "row" }}
            showsHorizontalScrollIndicator={false}
          >
            {topRated.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("MovieDetail", { item: item.id })
                  }
                  key={index}
                  style={{ color: "white", paddingRight: 15 }}
                >
                  {topRated.length > 0 && <MovieCard data={item} />}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        {/* --------------Upcoming---------------- */}
        <View style={{ marginTop: 20 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "white", fontWeight: "600", fontSize: 25 }}>
              Upcoming movies
            </Text>

            <TouchableOpacity>
              <Text style={{ color: "gray" }}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            style={{ marginTop: 20, flexDirection: "row" }}
            showsHorizontalScrollIndicator={false}
          >
            {upcoming.map((item, index) => {
              return (
                <TouchableOpacity
                  onPress={() =>
                    navigation.navigate("MovieDetail", { item: item.id })
                  }
                  key={index}
                  style={{ color: "white", paddingRight: 15 }}
                >
                  {upcoming.length > 0 && <MovieCard data={item} />}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

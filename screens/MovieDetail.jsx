import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer, useRoute } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useEffect, useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CastCard from "../components/CastCard";
import MovieCard from "../components/MovieCard";
import {
  fetchCredits,
  fetchMovieDetails,
  fetchSimilar,
} from "../hook/UseFetch";

const MovieDetail = ({ route, navigation }) => {
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([1, 2]);
  const [loading, setLoading] = useState(true);
  //const { params: item } = useRoute;
  const { item } = route.params;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    getMovieDetails(item);
    getCredit(item);
    getSimilarMovies(item);
    const timeout = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timeout);
  }, [item]);

  const getMovieDetails = async (movieId) => {
    const data = await fetchMovieDetails(movieId);
    if (data) setMovie(data);
  };

  const getCredit = async (movieId) => {
    const data = await fetchCredits(movieId);
    if (data && data.cast) setCast(data.cast);
  };

  const getSimilarMovies = async (movieId) => {
    const data = await fetchSimilar(movieId);

    if (data && data.results) setSimilarMovies(data.results);
  };

  let backdropPath = movie?.backdrop_path;

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111010" }}>
      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            paddingHorizontal: 20,
            zIndex: 3, // works on ios
            elevation: 3, // works on android
          }}
        >
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "#80808080",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              left: 15,
              top: 10,
            }}
          >
            <Ionicons name="chevron-back" size={24} color="white" />
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => navigation.navigate("CastDetail")}
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "#80808080",
              alignItems: "center",
              justifyContent: "center",
              position: "absolute",
              right: 15,
              top: 10,
            }}
          >
            <Ionicons name="menu-outline" size={24} color="white" />
          </TouchableOpacity>
        </View>
        <View>
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${backdropPath}` }}
            style={{
              height: 250,
              width: "100%",
            }}
          />
        </View>
        {/* ---------------title info----------------- */}
        <View
          style={{
            justifyContent: "space-between",
            gap: 10,
            marginTop: 20,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
            {movie?.title}
          </Text>
          <Text style={{ color: "gray" }}>
            {movie?.release_date?.split("-")[0]} {movie?.runtime} min{"  "}
            {movie?.genres?.map((item, index) => {
              return <Text key={index}>{item.name} </Text>;
            })}
          </Text>
        </View>
        {/* ---------------sypnosis area----------------- */}
        <View
          style={{
            justifyContent: "space-between",
            gap: 10,
            marginTop: 40,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
            Synopsis
          </Text>
          <Text style={{ color: "gray", lineHeight: 20 }}>
            {movie?.overview}
          </Text>
        </View>
        {/* ---------------top cast area----------------- */}
        <View
          style={{
            justifyContent: "space-between",
            gap: 10,
            marginTop: 40,
            paddingHorizontal: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "white", fontWeight: "600", fontSize: 20 }}>
              Top Cast
            </Text>

            <TouchableOpacity>
              <Text style={{ color: "gray" }}>See all</Text>
            </TouchableOpacity>
          </View>
          <ScrollView
            horizontal
            style={{ marginTop: 10, flexDirection: "row" }}
            showsHorizontalScrollIndicator={false}
          >
            {cast?.slice(0, 8).map((item, index) => {
              let idd = item.id;

              return (
                <TouchableOpacity
                  key={index}
                  style={{ paddingRight: 14 }}
                  onPress={() =>
                    navigation.navigate("CastDetail", { item: idd })
                  }
                >
                  <CastCard data={item} />
                  {/* <Text style={{ color: "white" }}>{item?.character}</Text> */}
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
        {/* ---------------Similar movies area----------------- */}
        <View
          style={{
            justifyContent: "space-between",
            gap: 10,
            marginTop: 40,
            paddingHorizontal: 20,
          }}
        >
          <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
            Similar Movies
          </Text>
          <ScrollView
            horizontal
            style={{ marginTop: 10, flexDirection: "row" }}
            showsHorizontalScrollIndicator={false}
          >
            {similarMovies?.map((item, index) => {
              return (
                <TouchableOpacity key={index} style={{ paddingRight: 13 }}>
                  <MovieCard data={item} />
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({});

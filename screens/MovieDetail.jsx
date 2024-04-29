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
import { fetchCredits, fetchMovieDetails } from "../hook/UseFetch";

const MovieDetail = ({ route, navigation }) => {
  const [cast, setCast] = useState([]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4]);
  const [loading, setLoading] = useState(false);
  //const { params: item } = useRoute;
  const { item } = route.params;
  const [movie, setMovie] = useState({});

  useEffect(() => {
    setLoading(true);
    getMovieDetails(item);
    getCredit(item);
  }, [item]);

  const getMovieDetails = async (movieId) => {
    const data = await fetchMovieDetails(movieId);
    if (data) setMovie(data);
  };

  const getCredit = async (movieId) => {
    const data = await fetchCredits(movieId);
    //console.log(data);
    if (data && data.cast) setCast(data.cast);
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
              backgroundColor: "gray",
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
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "gray",
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
          <Text style={{ color: "gray" }}>{movie?.overview}</Text>
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
          <Text style={{ color: "white", fontWeight: "700", fontSize: 20 }}>
            Top Cast
          </Text>
          <ScrollView
            horizontal
            style={{ marginTop: 10, flexDirection: "row" }}
            showsHorizontalScrollIndicator={false}
          >
            {cast?.map((item, index) => {
              return (
                <View key={index} style={{ paddingRight: 13 }}>
                  <CastCard data={item} />
                  {/* <Text style={{ color: "white" }}>{item?.character}</Text> */}
                </View>
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
                <View key={index} style={{ paddingRight: 13 }}>
                  <MovieCard />
                </View>
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

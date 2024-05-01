import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import MovieCard from "../components/MovieCard";
import { useState, useEffect } from "react";
import { fetchCastMovies, fetchPersonDetails } from "../hook/UseFetch";
import { LinearGradient } from "expo-linear-gradient";

const CastDetail = ({ route, navigation }) => {
  const { item } = route.params;

  const [person, setPerson] = useState({});
  const [otherMovies, setOtherMovies] = useState([]);

  useEffect(() => {
    getPersonDetails(item);
    getPersonMovies(item);
  }, [item]);

  const getPersonDetails = async (item) => {
    const data = await fetchPersonDetails(item);
    setPerson(data);
  };

  const getPersonMovies = async (item) => {
    const data = await fetchCastMovies(item);

    if (data && data.cast) setOtherMovies(data.cast);
  };

  const personPicture = person?.profile_path;
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#111010", paddingBottom: 20 }}
    >
      <View>
        <Image
          source={{ uri: `https://image.tmdb.org/t/p/w500${personPicture}` }}
          style={{
            height: 450,
            width: "100%",
          }}
        />
        <LinearGradient
          colors={["#111010", "transparent"]}
          start={{ x: 0.5, y: 1 }}
          end={{ x: 0.5, y: 0 }}
          style={{
            position: "absolute",
            bottom: 0,
            height: 50,
            width: "100%",
          }}
        />
      </View>
      <View style={{ paddingHorizontal: 20 }}>
        <Text
          style={{
            color: "white",
            fontWeight: "700",
            fontSize: 20,
            textAlign: "left",
            marginTop: 10,
          }}
        >
          {person?.name}
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text style={{ color: "gray", fontSize: 20, marginTop: 10 }}>
            {person?.gender === 1
              ? "Female"
              : person?.gender === 2
              ? "Male"
              : ""}
          </Text>
          <Text style={{ color: "gray", fontSize: 20, marginTop: 10 }}>
            {person?.birthday}
          </Text>
        </View>
        <View>
          <Text
            style={{
              color: "white",
              fontWeight: "700",
              fontSize: 20,
              marginTop: 30,
            }}
          >
            Biography
          </Text>
          <Text style={{ color: "gray", marginTop: 10, lineHeight: 21 }}>
            {person?.biography}
          </Text>
        </View>
        {/* -------Movies Area---------- */}
        <Text
          style={{
            color: "white",
            fontWeight: "700",
            fontSize: 20,
            marginTop: 30,
          }}
        >
          Movies
        </Text>
        <ScrollView horizontal style={{ marginTop: 20 }}>
          {otherMovies?.map((item, index) => {
            return (
              <TouchableOpacity
                key={index}
                style={{ paddingRight: 15 }}
                onPress={() =>
                  navigation.navigate("MovieDetail", { item: item.id })
                }
              >
                <MovieCard data={item} />
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default CastDetail;

const styles = StyleSheet.create({});

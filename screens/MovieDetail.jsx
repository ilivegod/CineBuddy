import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import CastCard from "../components/CastCard";
import MovieCard from "../components/MovieCard";

const MovieDetail = ({ navigation }) => {
  const [cast, setCast] = useState([1, 2, 3, 4]);
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4]);

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
        <View
          style={{
            height: 240,
            width: "100%",
            borderWidth: 1,
            borderColor: "gray",
          }}
        ></View>
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
            Title
          </Text>
          <Text style={{ color: "gray" }}>2023 2h 43m Action-thriller</Text>
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
            Sypnosis
          </Text>
          <Text style={{ color: "gray" }}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
            tenetur quasi iste necessitatibus sit asperiores quos, ratione
            dignissimos ex mollitia consectetur ducimus harum omnis optio
            laborum. Debitis nostrum, voluptate quo at accusantium ex
            voluptatibus vel reprehenderit? Quaerat eaque ut ipsa molestias et
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
                  <CastCard />
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

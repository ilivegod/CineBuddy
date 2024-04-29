import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableWithoutFeedback,
} from "react-native";
import React from "react";
import { Image500 } from "../hook/UseFetch";

const MovieCard = ({ data }) => {
  let posterPath = data?.poster_path;
  return (
    <View>
      <View>
        {posterPath ? (
          <Image
            source={{ uri: `https://image.tmdb.org/t/p/w500${posterPath}` }}
            style={{
              height: 190,
              width: 145,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "gray",
            }}
          />
        ) : (
          <Image
            source={require("../assets/FallBackImage.png")}
            style={{
              height: 190,
              width: 145,
              borderRadius: 8,
              borderWidth: 1,
              borderColor: "gray",
            }}
          />
        )}
      </View>
      <Text style={{ color: "gray", marginTop: 10, width: 150 }}>
        {data?.title}
      </Text>
    </View>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});

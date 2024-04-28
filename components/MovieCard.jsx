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
  console.log(data?.poster_path);
  let posterPath = data?.poster_path;
  return (
    <TouchableWithoutFeedback>
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
    </TouchableWithoutFeedback>
  );
};

export default MovieCard;

const styles = StyleSheet.create({});

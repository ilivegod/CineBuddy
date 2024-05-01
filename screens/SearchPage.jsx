import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import { debounce } from "lodash";

import { fetchSearchMovies } from "../hook/UseFetch";

const SearchPage = () => {
  const [result, setResult] = useState([1, 2, 3, 4, 5, 6]);
  const [loading, setLoading] = useState(false);

  const handleMovieSearch = (value) => {
    if (value && value.length > 2) {
      setLoading(true);
      fetchSearchMovies(value).then((data) => {
        setLoading(false);
        if (data && data.results) setResult(data.results);
      });
    } else {
      setLoading(false);
      setResult([]);
    }
  };

  const handleTextBounce = useCallback(debounce(handleMovieSearch, 550), []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111010" }}>
      <View>
        <TextInput
          placeholderTextColor="gray"
          onChangeText={handleTextBounce}
          style={{
            height: 55,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderColor: "white",
            borderRadius: 20,
            color: "white",
          }}
          placeholder="search Movie"
          //onChangeText={onChangeText}
          //value={text}
        />
        <Text style={{ color: "white", paddingHorizontal: 15 }}>
          Search Results({result.length})
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

export default SearchPage;

const styles = StyleSheet.create({});

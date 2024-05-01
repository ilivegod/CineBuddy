import {
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useCallback, useRef } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import { debounce } from "lodash";
import { Fontisto } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import { fetchSearchMovies } from "../hook/UseFetch";

const SearchPage = ({ navigation }) => {
  const [result, setResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const textInputRef = useRef(null);

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

  const clearTextInput = () => {
    if (textInputRef.current) {
      textInputRef.current.clear(); // Try to clear first
      textInputRef.current.value = ""; // Fallback if clear() is not available
    }
  };
  const handleTextBounce = useCallback(debounce(handleMovieSearch, 550), []);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111010" }}>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          height: 55,
          margin: 12,
          borderWidth: 1,
          padding: 10,
          borderColor: "white",
          borderRadius: 20,
        }}
      >
        <TextInput
          style={{ color: "white" }}
          placeholderTextColor="gray"
          onChangeText={handleTextBounce}
          placeholder="search Movie"
          ref={textInputRef}
        />
        <TouchableOpacity onPress={clearTextInput}>
          <Fontisto name="close-a" size={20} color="white" />
        </TouchableOpacity>
      </View>

      {result.length > 0 ? (
        <ScrollView style={{ marginTop: 20 }}>
          <View>
            <Text style={{ color: "white", paddingHorizontal: 15 }}>
              Search Results({result.length})
            </Text>
          </View>
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
      ) : (
        <View
          style={{ flex: 1, alignItems: "center", justifyContent: "center" }}
        >
          <MaterialCommunityIcons name="filmstrip" size={80} color="white" />
        </View>
      )}
    </SafeAreaView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({});

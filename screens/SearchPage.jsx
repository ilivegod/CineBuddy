import { ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import MovieCard from "../components/MovieCard";
import { useState } from "react";
import ResultsCard from "../components/ResultsCard";

const SearchPage = () => {
  const [result, setResult] = useState([1, 2, 3, 4, 5, 6]);
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111010" }}>
      <View>
        <TextInput
          placeholderTextColor="gray"
          style={{
            height: 55,
            margin: 12,
            borderWidth: 1,
            padding: 10,
            borderColor: "white",
            borderRadius: 20,
          }}
          placeholder="search Movie"
          //onChangeText={onChangeText}
          //value={text}
        />
        <Text style={{ color: "white", paddingHorizontal: 15 }}>
          Search Results(4)
        </Text>
      </View>

      <ScrollView>
        <View
          style={{
            flexDirection: "row",
            flexWrap: "wrap",
            justifyContent: "space-between",
            paddingHorizontal: 10,
            paddingTop: 20,
            gap: 20,
          }}
          showsVerticalScrollIndicator={false}
        >
          {result?.map((item, index) => {
            return (
              <View key={index}>
                <ResultsCard />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default SearchPage;

const styles = StyleSheet.create({});

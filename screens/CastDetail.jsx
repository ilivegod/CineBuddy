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
import { useState } from "react";

const CastDetail = ({ navigation }) => {
  const [similarMovies, setSimilarMovies] = useState([1, 2, 3, 4, 5]);
  return (
    <ScrollView
      style={{ flex: 1, backgroundColor: "#111010", paddingBottom: 20 }}
    >
      <View
        style={{
          height: 350,
          width: "100%",
          borderWidth: 1,
          borderColor: "red",
        }}
      >
        <Text style>hi</Text>
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
          Name
        </Text>
        <View style={{ flexDirection: "row", gap: 10 }}>
          <Text style={{ color: "gray", fontSize: 20, marginTop: 10 }}>
            Male
          </Text>
          <Text style={{ color: "gray", fontSize: 20, marginTop: 10 }}>
            Birthday
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
          <Text style={{ color: "gray", marginTop: 10 }}>
            dsdasadnjaksbdjsa bdjkasb djasb djhs bdsan bdhjsaskbj ddsihd sdhis
            dhisd his bdbvshadghsjhg dsdasadnjaksbdjsa bdjkasb djasb djhs bdsan
            bdhjsaskbj ddsihd sdhis dhisd his bdbvshadghsjhg dsdasadnjaksbdjsa
            bdjkasb djasb djhs bdsan bdhjsaskbj ddsihd sdhis dhisd his
            bdbvshadghsjhg
          </Text>
        </View>
        <Text
          style={{
            color: "white",
            fontWeight: "700",
            fontSize: 20,
            marginTop: 30,
          }}
        >
          Similar Movies
        </Text>
        <ScrollView horizontal style={{ marginTop: 20 }}>
          {similarMovies.map((item, index) => {
            return (
              <View key={index} style={{ paddingRight: 15 }}>
                <MovieCard />
              </View>
            );
          })}
        </ScrollView>
      </View>
    </ScrollView>
  );
};

export default CastDetail;

const styles = StyleSheet.create({});

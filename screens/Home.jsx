import { View, Text, TouchableOpacity, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";
import { Feather } from "@expo/vector-icons";
import { useState } from "react";

const Home = ({ navigation }) => {
  const [trending, setTrending] = useState([1, 2, 3, 4]);

  return (
    // backgroundColor: "#111010"
    <SafeAreaView style={{ flex: 1, backgroundColor: "#111010" }}>
      <View style={{ paddingHorizontal: 20 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <TouchableOpacity>
            <Image
              style={{
                width: 40,
                height: 40,
                borderRadius: 20,
                borderWidth: 1,
                borderColor: "gray",
              }}
              source={require("../assets/profile.jpg")}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: "gray",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Feather name="search" size={20} color="white" />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: 30 }}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ color: "white", fontWeight: "600", fontSize: 25 }}>
              Trending Now
            </Text>

            <TouchableOpacity>
              <Text style={{ color: "gray" }}>See all</Text>
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: 10 }}>
            <Text style={{ color: "white" }}>dsds</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Home;

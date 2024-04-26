import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { SafeAreaView } from "react-native-safe-area-context";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView>
      <View style={{ paddingHorizontal: 15 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Text>Home</Text>
          <Text>CineBuddy</Text>
          <Text>Menu</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate("MovieDetail")}>
          <Text>navigate</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Home;

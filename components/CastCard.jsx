import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const CastCard = ({ navigation }) => {
  return (
    <View style={{ alignItems: "center" }}>
      <View>
        <TouchableOpacity onPress={() => navigation.navigate("MovieDetail")}>
          <Image
            style={{
              width: 60,
              height: 60,
              borderRadius: 30,
            }}
            source={require("../assets/profile.jpg")}
          />
        </TouchableOpacity>
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={{ color: "white" }}>Real name</Text>
        <Text style={{ color: "gray" }}>character name</Text>
      </View>
    </View>
  );
};

export default CastCard;

const styles = StyleSheet.create({});

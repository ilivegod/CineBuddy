import { StyleSheet, Text, View, TouchableOpacity, Image } from "react-native";

const CastCard = ({ navigation, data }) => {
  let castPicture = data?.profile_path;
  return (
    <View style={{ alignItems: "center" }}>
      <View>
        <Image
          style={{
            width: 100,
            height: 110,
            borderRadius: 15,
          }}
          source={{ uri: `https://image.tmdb.org/t/p/w500${castPicture}` }}
        />
      </View>
      <View style={{ alignItems: "center", marginTop: 10 }}>
        <Text style={{ color: "white" }}>{data.name}</Text>
        <Text style={{ color: "gray" }}>{data.character}</Text>
      </View>
    </View>
  );
};

export default CastCard;

const styles = StyleSheet.create({});

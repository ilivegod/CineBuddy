import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const MovieDetail = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Text>MovieDetail</Text>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text>go back</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default MovieDetail;

const styles = StyleSheet.create({});

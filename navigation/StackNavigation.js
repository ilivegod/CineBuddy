import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "../screens/Home";
import MovieDetail from "../screens/MovieDetail";
import SearchPage from "../screens/SearchPage";

const Stack = createNativeStackNavigator();

const DefaultStackNavigation = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{ headerShown: false }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="MovieDetail" component={MovieDetail} />
      <Stack.Screen name="SearchPage" component={SearchPage} />
    </Stack.Navigator>
  );
};

export default DefaultStackNavigation;

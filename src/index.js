import { StatusBar } from "expo-status-bar";

import { NavigationContainer } from "@react-navigation/native";
import DefaultStackNavigation from "../navigation/StackNavigation";

const index = () => {
  return (
    <NavigationContainer>
      <DefaultStackNavigation />
    </NavigationContainer>
  );
};

export default index;

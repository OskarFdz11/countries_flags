import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CountriesList from "../features/Home/CountriesList";
const Stack = createNativeStackNavigator();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Countries List">
        <Stack.Screen name="Countries List" component={CountriesList} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

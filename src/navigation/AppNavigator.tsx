import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import CountriesList from "../features/CountriesList/CountriesList";
import CountryDetails from "../features/CountryDetails";
import { Country } from "../lib/types/types";

type RootStackParamList = {
  "Countries List": undefined;
  "Country Details": Country;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Countries List">
        <Stack.Screen name="Countries List" component={CountriesList} />
        <Stack.Screen name="Country Details" component={CountryDetails} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

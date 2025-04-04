import React from "react";
import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  gql,
} from "@apollo/client";
import { client } from "./src/graphql/apolloClient";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./src/navigation/AppNavigator";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  );
}

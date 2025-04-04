import React from "react";
import { ApolloProvider } from "@apollo/client";
import { client } from "@/src/graphql/apolloClient";
import AppNavigator from "@/src/navigation/AppNavigator";

export default function App() {
  return (
    <ApolloProvider client={client}>
      <AppNavigator />
    </ApolloProvider>
  );
}

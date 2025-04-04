import React from "react";
import { ActivityIndicator, StyleSheet } from "react-native";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";

import { styles } from "./LoadingIndicator.styles";

const LoadingIndicator = () => (
  <SafeAreaProvider>
    <SafeAreaView style={[styles.container, styles.horizontal]}>
      <ActivityIndicator />
    </SafeAreaView>
  </SafeAreaProvider>
);

export default LoadingIndicator;

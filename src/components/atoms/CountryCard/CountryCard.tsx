import React, { FC } from "react";
import { View, Text } from "react-native";

import { styles } from "./CountryCard.syles";
import { CountryCardProps } from "@/src/lib/types/types";

const CountryCard: FC<CountryCardProps> = ({ name, code, emoji }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.emoji}>{emoji}</Text>
      <View>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.code}>{code}</Text>
      </View>
    </View>
  );
};

export default CountryCard;

import React, { FC } from "react";
import { View, Text, ScrollView } from "react-native";
import { useRoute } from "@react-navigation/native";
import useCountryDetails from "@/src/lib/hooks/useCountryDetails";
import { styles } from "./CountryDetails.styles";

interface ICountryDetailsProps {}

const CountryDetails: FC<ICountryDetailsProps> = ({}) => {
  const routes = useRoute();

  const { code } = (routes as unknown as any).params;
  const { countryDetails } = useCountryDetails(code);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.emoji}>{countryDetails.emoji}</Text>
      <Text style={styles.title}>{countryDetails.name}</Text>
      <Text style={styles.native}>Native: {countryDetails.native}</Text>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>🌍 Continent:</Text>
        {countryDetails.continent?.name && (
          <Text style={styles.value}>{countryDetails.continent.name}</Text>
        )}
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>🏛 Capital:</Text>
        <Text style={styles.value}>{countryDetails.capital}</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>💱 Currency:</Text>
        <Text style={styles.value}>{countryDetails.currency}</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>📞 Phone:</Text>
        <Text style={styles.value}>+{countryDetails.phone}</Text>
      </View>

      <View style={styles.infoBlock}>
        <Text style={styles.label}>🗣 Languages:</Text>
        {countryDetails.languages && (
          <Text style={styles.value}>
            {countryDetails.languages.map((l: any) => l.name).join(", ")}
          </Text>
        )}
      </View>

      {countryDetails.states && countryDetails.states.length > 0 && (
        <View style={styles.infoBlock}>
          <Text style={styles.label}>🏙 States:</Text>
          <Text style={styles.value}>
            {countryDetails.states
              .slice(0, countryDetails.states.length)
              .map((s: any) => s.name)
              .join(", ")}
          </Text>
        </View>
      )}

      {countryDetails.subdivisions &&
        countryDetails.subdivisions.length > 0 && (
          <View style={styles.infoBlock}>
            <Text style={styles.label}>📍 Subdivisions:</Text>
            <Text style={styles.value}>
              {countryDetails.subdivisions
                .slice(0, 5)
                .map((s: any) => ` ${s.name}`)
                .join(", ")}
            </Text>
          </View>
        )}
    </ScrollView>
  );
};

export default CountryDetails;

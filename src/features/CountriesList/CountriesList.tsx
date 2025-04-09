import React, { FC, useCallback } from "react";
import { View, Text } from "react-native";
import FlatListCountries from "@/src/components/FlatListCountries/FlatListCountries";
import LoadingIndicator from "@/src/components/atoms/LoadingIndicator";
import _ from "lodash";
import SearchBarComponent from "@/src/components/atoms/SearchBarComponent/SearchBarComponent";
import useCountriesSearch from "@/src/lib/hooks/useCountriesSearch";
import { styles } from "./CountriesList.styles";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { ID } from "@/src/lib/types/types";

interface ICountryListProps {
  navigation: NativeStackNavigationProp<any>;
}

const CountriesList: FC<ICountryListProps> = ({ navigation }) => {
  const { countries, search, setSearch, loading, error, updateSearch } =
    useCountriesSearch();

  const handlerSelectCountry = useCallback(
    (code: ID) => {
      navigation.navigate("Country Details", { code });
    },
    [navigation]
  );

  if (loading) return <LoadingIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={styles.container}>
      <SearchBarComponent
        onChangeText={(text) => {
          setSearch(text);
          updateSearch(text);
        }}
        value={search}
      />
      {loading ? (
        <LoadingIndicator />
      ) : countries.length === 0 ? (
        <Text style={styles.noResultsText}>"No hay resultados"</Text>
      ) : (
        <FlatListCountries
          countries={countries}
          onSelectCountry={handlerSelectCountry}
        />
      )}
    </View>
  );
};

export default CountriesList;

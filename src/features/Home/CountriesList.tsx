import React, { FC } from "react";
import { View, Text } from "react-native";
import FlatListCountries from "@/src/components/FlatListCountries/FlatListCountries";
import LoadingIndicator from "@/src/components/atoms/LoadingIndicator";
import _ from "lodash";
import SearchBarComponent from "@/src/components/atoms/SearchBarComponent/SearchBarComponent";
import useCountriesSearch from "@/src/lib/hooks/useCountriesSearch";

interface ICountryListProps {}

const CountriesList: FC<ICountryListProps> = ({}) => {
  const { countries, search, setSearch, loading, error, updateSearch } =
    useCountriesSearch();

  if (loading) return <LoadingIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <View style={{ flex: 1 }}>
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
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          "No hay resultados"
        </Text>
      ) : (
        <FlatListCountries countries={countries} />
      )}
    </View>
  );
};

export default CountriesList;

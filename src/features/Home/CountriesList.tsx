import React, { FC, useCallback, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { View, Text } from "react-native";
import FlatListCountries from "@/src/components/FlatListCountries/FlatListCountries";
import LoadingIndicator from "@/src/components/atoms/LoadingIndicator";
import { COUNTRIES } from "@/src/graphql/queries/Countries.graphql";
import _, { debounce } from "lodash";
import SearchBarComponent from "@/src/components/atoms/SearchBarComponent/SearchBarComponent";

interface ICountryListProps {}

const CountriesList: FC<ICountryListProps> = ({}) => {
  const [countries, setCountries] = useState<any[]>([]);
  const [search, setSearch] = useState("");

  const [getCountries, { loading, error, data }] = useLazyQuery(COUNTRIES, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      if (data && data.countries && data.countries.length > 0) {
        setCountries(data.countries);
      }
    },
    onError: (error) => {
      console.error("Error fetching data", error);
    },
  });

  const fetchCountriesData = useCallback(() => {
    getCountries({});
  }, [getCountries]);

  const updateSearch = useCallback(
    debounce((search: string) => {
      getCountries({
        variables: {
          filter: {
            name: {
              eq: search,
            },
          },
        },
      });
    }, 1000),
    [getCountries]
  );

  useEffect(() => {
    fetchCountriesData();
  }, [fetchCountriesData]);

  useEffect(() => {
    if (search === "") {
      fetchCountriesData();
    }
  }, [search, fetchCountriesData]);

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
      {countries.length === 0 ? (
        <Text style={{ textAlign: "center", marginTop: 20 }}>
          {!search ? "No hay resultados" : "Cargando países..."}
        </Text>
      ) : (
        <FlatListCountries countries={countries} />
      )}
    </View>
  );
};

export default CountriesList;

import React, { FC, useCallback, useEffect, useState } from "react";
import { gql, useLazyQuery } from "@apollo/client";
import { FlatList, View, Text } from "react-native";
import { COUNTRIES_QUERY } from "@/src/graphql/queries/countriesQuery.graphql";
import FlatListCountries from "@/src/components/FlatListCountries/FlatListCountries";
import LoadingIndicator from "@/src/components/atoms/LoadingIndicator";

// interface ICountry {
//   code: string;
//   name: string;
//   countries: any[];
//   emoji: any;
// }

const HomeScreen = () => {
  const [countries, setCountries] = useState<any[]>([]);
  const [offset, setOffset] = useState(0);
  const [getCountries, { loading, error, data, fetchMore }] = useLazyQuery(
    COUNTRIES_QUERY,
    {
      fetchPolicy: "cache-and-network",
      onCompleted: (data) => {
        if (data && data.countries && data.countries.length > 0) {
          setCountries(data.countries);
        }
      },
      onError: (error) => {
        console.error("Error fetching data", error);
      },
    }
  );

  const fetchCountriesData = useCallback(() => {
    getCountries({
      variables: {
        offset: 0,
        limit: 10,
      },
    });
  }, [getCountries]);

  const fetchMoreCountries = useCallback(() => {
    fetchMore({
      variables: {
        offset: countries.length,
        limit: 10,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult || !fetchMoreResult.countries) return prev;

        return {
          ...prev,
          countries: [...prev.countries, ...fetchMoreResult.countries],
        };
      },
    });
  }, [fetchMore, countries.length]);

  useEffect(() => {
    fetchCountriesData();
  }, [fetchCountriesData]);

  //   useEffect(() => {
  //     if (data && data.countries) {
  //       console.log("Data fetched:", data.countries);

  //       setCountries(data.countries);
  //     }
  //   }, [data]);

  if (loading) return <LoadingIndicator />;
  if (error) return <Text>Error: {error.message}</Text>;

  return (
    <FlatListCountries
      countries={countries}
      onEndReached={fetchMoreCountries}
    />
  );
};

export default HomeScreen;

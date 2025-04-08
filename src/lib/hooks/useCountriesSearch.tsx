import { useCallback, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { COUNTRIES } from "@/src/graphql/queries/Countries.graphql";

import { debounce } from "lodash";

const useCountriesSearch = () => {
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
    if (search === "") {
      fetchCountriesData();
    }
  }, [search, fetchCountriesData]);

  return {
    countries,
    setCountries,
    search,
    setSearch,
    loading,
    error,
    data,
    fetchCountriesData,
    updateSearch,
  };
};

export default useCountriesSearch;

import { useCallback, useEffect, useState } from "react";
import { useLazyQuery } from "@apollo/client";

import { COUNTRY } from "@/src/graphql/queries/Country";
import { Country } from "../types/types";

const useCountryDetails = (code: string) => {
  const [countryDetails, setCountryDetails] = useState<Country>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [getCountryDetails] = useLazyQuery(COUNTRY, {
    fetchPolicy: "cache-and-network",
    onCompleted: (data) => {
      if (data && data.country) {
        setCountryDetails(data.country);
      }
      setLoading(false);
    },
    onError: (error) => {
      console.error("Error fetching country details", error);
      setError(error as any);
      setLoading(false);
    },
  });

  const fetchCountryDetails = useCallback(() => {
    getCountryDetails({ variables: { code } });
  }, [code, getCountryDetails]);

  useEffect(() => {
    fetchCountryDetails();
  }, [fetchCountryDetails]);

  return {
    countryDetails,
    loading,
    error,
    refetch: fetchCountryDetails,
  };
};

export default useCountryDetails;

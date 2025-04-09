import React, { FC } from "react";
import { FlatList, ListRenderItem, TouchableOpacity, View } from "react-native";
import CountryCard from "../atoms/CountryCard";
import { CountryCardProps, ID } from "@/src/lib/types/types";

import { styles } from "./FlatlistCountries.styles";

interface FlatListCountriesProps {
  countries: CountryCardProps[];
  onSelectCountry: (code: ID) => void;
  onEndReached?: () => void;
}

const FlatListCountries: FC<FlatListCountriesProps> = ({
  countries,
  onEndReached,
  onSelectCountry,
}) => {
  const renderItem: ListRenderItem<CountryCardProps> = ({
    item,
  }: {
    item: CountryCardProps;
  }) => (
    <TouchableOpacity onPress={() => item.code && onSelectCountry(item.code)}>
      <CountryCard name={item.name} code={item.code} emoji={item.emoji} />
    </TouchableOpacity>
  );
  return (
    <View style={styles.container}>
      <FlatList
        data={countries}
        keyExtractor={(item) => item.code.toString()}
        renderItem={renderItem}
        onEndReachedThreshold={0.5}
        onEndReached={onEndReached}
        showsVerticalScrollIndicator={true}
      />
    </View>
  );
};

export default FlatListCountries;

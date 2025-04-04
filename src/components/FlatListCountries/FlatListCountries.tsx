import React, { FC } from "react";
import { FlatList, ListRenderItem, View } from "react-native";
import CountryCard from "../atoms/CountryCard";
import { CountryCardProps } from "@/src/lib/types/types";

import { styles } from "./FlatlistCountries.styles";

interface FlatListCountriesProps {
  countries: CountryCardProps[];
  onEndReached?: () => void;
}

const FlatListCountries: FC<FlatListCountriesProps> = ({
  countries,
  onEndReached,
}) => {
  const renderItem: ListRenderItem<CountryCardProps> = ({ item }) => (
    <CountryCard name={item.name} code={item.code} emoji={item.emoji} />
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

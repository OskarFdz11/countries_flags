import React, { FC, useState } from "react";
import { SearchBar } from "@rneui/themed";
import { ScrollView, View } from "react-native";

import { styles } from "./SearchBarComponent.styles";

type SearchBarProps = {
  onChangeText?: (text: string) => void;
  value?: string;
  placeholder?: string;
};

const SearchBarComponent: FC<SearchBarProps> = ({
  onChangeText,
  value,
  placeholder,
}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <SearchBar
          placeholder={placeholder || "Search"}
          onChangeText={onChangeText}
          value={value}
          platform="default"
          containerStyle={styles.containerStyle}
          inputContainerStyle={styles.inputContainerStyle}
          inputStyle={{}}
        />
      </ScrollView>
    </View>
  );
};

export default SearchBarComponent;

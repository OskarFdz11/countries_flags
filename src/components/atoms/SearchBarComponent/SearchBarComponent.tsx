import React, { FC, useState } from "react";
import { SearchBar } from "@rneui/themed";
import { View } from "react-native";

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
  // const [search, setSearch] = useState("");

  // const updateSearch = (search: string) => {
  //   setSearch(search);
  // };

  return (
    <View style={styles.container}>
      <SearchBar
        placeholder={placeholder || "Search"}
        onChangeText={onChangeText}
        value={value}
        platform="default"
        containerStyle={styles.containerStyle}
        inputContainerStyle={styles.inputContainerStyle}
        inputStyle={{}}
      />
    </View>
  );
};

export default SearchBarComponent;

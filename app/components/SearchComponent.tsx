import Ionicons from "@expo/vector-icons/build/Ionicons";
import React, { Component, useState } from "react";
import { View, StyleSheet, TextInput, Text } from "react-native";

const SearchComponent = () => {
  const [searchText, setSearchText] = useState("");

  console.log(searchText);
  return (
    <View style={styles.section}>
      <Ionicons
        name="search-outline"
        size={33}
        color={"#000"}
        style={styles.icon}
      />
      <TextInput
        placeholder="Search Keyword"
        style={styles.input}
        onChangeText={(val) => {
          setSearchText(val);
        }}
      />
    </View>
  );
};
export default SearchComponent;
const styles = StyleSheet.create({
  section: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "flex-start",
    backgroundColor: "#fff",
    marginLeft: 30,
    marginRight: 30,
    paddingTop: 50,
  },
  icon: {
    paddingLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    backgroundColor: "#efefef",
    borderBottomLeftRadius: 5,
    borderTopLeftRadius: 5,
  },
  input: {
    flex: 1,
    marginLeft: 0,
    marginTop: 0,
    paddingTop: 10,
    paddingRight: 10,
    paddingBottom: 10,
    paddingLeft: 0,
    backgroundColor: "#efefef",
    color: "#424242",
    height: 55,
    borderBottomRightRadius: 5,
    borderTopRightRadius: 5,
  },
});

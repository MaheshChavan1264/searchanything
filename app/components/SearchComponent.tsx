import Ionicons from "@expo/vector-icons/build/Ionicons";
import React, { useState } from "react";
import { View, StyleSheet, TextInput, Text, ScrollView } from "react-native";
import { Card } from "../components/CardComponent";

const SearchComponent = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const getSearchResult = async () => {
    let text = "football";
    let response = await fetch(`https://duckduckgo.com/?format=json&q=${text}`);
    let json = await response.json();
    setSearchResult(json.RelatedTopics[3].Topics);
  };

  return (
    <>
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
            val.length > 3 ? getSearchResult(searchText) : setSearchResult([]);
          }}
        />
      </View>
      <ScrollView style={{ marginTop: 100 }}>
        {searchResult.map((item) => (
          <>
            <Card>
              <Text>{item.Text.substring(0, 21)}</Text>
              <Text>{item.FirstURL.substring(0, 21)}</Text>
            </Card>
          </>
        ))}
      </ScrollView>
    </>
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

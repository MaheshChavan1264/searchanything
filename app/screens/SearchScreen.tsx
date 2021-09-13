import React from "react";
import { View, Text, Image } from "react-native";
import { StyleSheet } from "react-native";
import AppLoading from "expo-app-loading";
import { Dimensions } from "react-native";
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";
import SearchComponent from "../components/SearchComponent";

function SearchScreen() {
  let [fontsLoaded] = useFonts({ Inter_700Bold });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FFFFFF",
        }}
      >
        <SearchComponent />
        <Image
          source={require("../assets/images/home.png")}
          style={styles.images}
        />
        <Text style={styles.container}>
          To explore on your interest click on search above
        </Text>
      </View>
    );
  }
}
export default SearchScreen;

var { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: height * 0.6,
    paddingLeft: width * 0.08,
    paddingRight: width * 0.08,
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    textAlign: "center",
  },
  images: { marginTop: 0 },
});

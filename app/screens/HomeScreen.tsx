import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Dimensions } from "react-native";
import AppLoading from "expo-app-loading";
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";

var { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: height * 0.45,
    paddingLeft: width * 0.08,
    paddingRight: width * 0.08,
    fontFamily: "Inter_700Bold",
    fontSize: 20,
    textAlign: "center",
  },
});
function HomeScreen() {
  let [fontsLoaded] = useFonts({ Inter_700Bold });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={styles.container}>Left empty on purpose</Text>
      </View>
    );
  }
}
export default HomeScreen;

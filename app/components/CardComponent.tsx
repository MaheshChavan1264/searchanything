import React, { useState } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

export function Card(props) {
  const [add, setAddFavourites] = useState(false);

  const changeState = () => {
    setAddFavourites(!add);
  };

  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={require("../assets/images/img.png")}
          style={styles.image}
        />
        <View style={styles.cardContent}>
          <Text
            style={{ fontSize: 20, fontWeight: "bold" }}
            numberOfLines={1}
            ellipsizeMode="tail"
          >
            {props.children[0]}
          </Text>
          <Text style={{ fontSize: 16, color: "lightgrey" }} numberOfLines={1}>
            {props.children[1]}
          </Text>
          <TouchableOpacity
            onPress={() => {
              changeState();
            }}
            style={styles.star}
          >
            <AntDesign
              name={add ? "star" : "staro"}
              size={24}
              color="#fc9e2e"
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  card: {
    height: 100,
    width: 420,
    backgroundColor: "white",
    borderRadius: 5,
    shadowColor: "grey",
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 1,
    shadowRadius: 8,
    elevation: 8,
    flexDirection: "row",
    // marginTop: 6,
    marginBottom: 6,
    marginLeft: 30,
    marginRight: 16,
  },
  cardContent: {
    marginLeft: 25,
    marginTop: 10,
    fontSize: 400,
  },
  image: {
    height: 80,
    width: 80,
    marginLeft: 10,
    borderRadius: 7,
    marginTop: 10,
    marginBottom: 10,
  },
  star: {
    marginLeft: 250,
    marginRight: 40,
    marginTop: -25,
  },
  MainContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

  TextStyle: {
    textAlign: "center",
    fontSize: 20,
    padding: 10,
    color: "#000",
  },
});

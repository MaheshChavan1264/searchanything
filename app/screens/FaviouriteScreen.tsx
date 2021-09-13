import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";
import { Card } from "../components/CardComponent";

function Favourites() {
  return (
    <ScrollView>
      <View style={{ backgroundColor: "#FFFFFF" }}>
        <Card title="title" description="description">
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
        </Card>
        <Card title="title" description="description">
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
        </Card>
        <Card title="title" description="description">
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
        </Card>
        <Card title="title" description="description">
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
        </Card>
        <Card title="title" description="description">
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
        </Card>
        <Card title="title" description="description">
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
        </Card>
        <Card title="title" description="description">
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
        </Card>
        <Card title="title" description="description">
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
        </Card>
        <Card title="title" description="description">
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
        </Card>
        <Card title="title" description="description">
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
        </Card>
        <Card title="title" description="description">
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
        </Card>
        <Card title="title" description="description">
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
        </Card>
        <Card title="title" description="description">
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
        </Card>
        <Card title="title" description="description">
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
        </Card>
        <Card title="title" description="description">
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
        </Card>
        <Card title="title" description="description">
          <Text>Lorem ipsum dolor sit</Text>
          <Text>Lorem ipsum dolor sit</Text>
        </Card>
      </View>
    </ScrollView>
  );
}
export default Favourites;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

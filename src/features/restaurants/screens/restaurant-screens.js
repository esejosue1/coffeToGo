import React from "react";
import { Searchbar } from "react-native-paper";

import { StatusBar, StyleSheet, SafeAreaView, View } from "react-native";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight,
  },
  search: {
    backgroundColor: "green",

    padding: 20,
  },
  list: {
    flex: 1,
    backgroundColor: "blue",
    padding: 20,
  },
});

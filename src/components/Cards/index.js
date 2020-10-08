import React from "react";
import AnimateNumber from "react-native-countup";
import { View, Text, StyleSheet } from "react-native";

const Cards = ({ data: { confirmed, recovered, deaths, lastUpdate } }) => {
  if (!confirmed) {
    return "Loading...";
  }

  return (
    <View style={styles.container}>
      <View style={styles.column}>
        <Text style={styles.heading}>Confermati totali</Text>
        <AnimateNumber
          countBy={10000}
          timing="linear"
          value={confirmed.value}
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.heading}>Ricoverati totali</Text>
        <AnimateNumber
          timing="easeOut"
          countBy={10000}
          value={recovered.value}
        />
      </View>
      <View style={styles.column}>
        <Text style={styles.heading}>Morti totali</Text>
        <AnimateNumber timing="easeIn" countBy={10000} value={deaths.value} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
  },
  column: {
    flex: 1,
    justifyContent: "center",

    alignItems: "center",
    backgroundColor: "#f0f0f0",
    fontSize: 20,
    borderBottomWidth: 2,
    borderBottomColor: "#000",
    borderRightColor: "#000",
    borderRightWidth: 1,
  },
  heading: {
    fontWeight: "700",
  },
});

export default Cards;

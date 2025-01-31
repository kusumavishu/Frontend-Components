import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useImage } from "@shopify/react-native-skia";
import ScratchCard from "./animation-scratch-card";

const ScratchCardComp = () => {
  const image = useImage(require("./images/scratch_foreground.png")); // Replace
  if (!image) {
    return <Text>Loading....</Text>;
  }
  return (
    <View style={styles.container}>
      <ScratchCard style={styles.scratchCard} image={image}>
        <View style={styles.revealContent}>
          <Text style={styles.revealText}>$100</Text>
          <Text style={styles.revealText}>You Won!</Text>
        </View>
      </ScratchCard>
    </View>
  );
};

export default ScratchCardComp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5f5f5",
  },
  scratchCard: {
    marginTop: "100%",
    width: 300,
    height: 300,
  },
  revealContent: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  revealText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "green",
  },
});

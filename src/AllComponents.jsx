import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScratchCardComp from "./scratchcard-component/scratch-card-comp";
import AnimatedTileScrolling from "./animation-image-scrolling/image-scrolling";

const AllComponents = () => {
  return (
    <View>
      <AnimatedTileScrolling />
    </View>
  );
};

export default AllComponents;

const styles = StyleSheet.create({});

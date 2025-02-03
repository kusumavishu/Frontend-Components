import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScratchCardComp from "./scratchcard-component/scratch-card-comp";
import AnimatedTileScrolling from "./animation-image-scrolling/image-scrolling";
import MoviesSeating from "./movie-seating-arrangement/seating-booking";

const AllComponents = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <AnimatedTileScrolling /> */}
      <MoviesSeating />
    </View>
  );
};

export default AllComponents;

const styles = StyleSheet.create({});

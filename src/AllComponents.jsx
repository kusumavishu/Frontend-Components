import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScratchCardComp from "./scratchcard-component/scratch-card-comp";
import AnimatedTileScrolling from "./animation-image-scrolling/image-scrolling";
import MoviesSeating from "./movie-seating-arrangement/seating-booking";
import SplashAnimation from "./animation-splash-display/splash-animation";
import YoutubeComponent from "./youtube-player/youtube-component";
import PriceRangeSelector from "./price-range-slider/input-range";

const AllComponents = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <AnimatedTileScrolling /> */}
      {/* <MoviesSeating /> */}
      {/* <SplashAnimation /> */}
      {/* <YoutubeComponent /> */}
      <PriceRangeSelector />
    </View>
  );
};

export default AllComponents;

const styles = StyleSheet.create({});

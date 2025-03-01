import { StyleSheet, Text, View } from "react-native";
import React from "react";
import ScratchCardComp from "./scratchcard-component/scratch-card-comp";
import AnimatedTileScrolling from "./animation-image-scrolling/image-scrolling";
import MoviesSeating from "./movie-seating-arrangement/seating-booking";
import SplashAnimation from "./animation-splash-display/splash-animation";
import YoutubeComponent from "./youtube-player/youtube-component";
import PriceRangeSelector from "./price-range-slider/input-range";
import SeatSelectionScreen from "./movie-seating-arrangement/mini-map";
import ScrollViewAnimatedHeader from "./header-animation-comp/scrolling-animation";
import HeaderFlastlist from "./header-animation-comp/scrolling-flastlist";

const AllComponents = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* <AnimatedTileScrolling /> */}
      {/* <HeaderFlastlist/> */}
      <ScrollViewAnimatedHeader />
      {/* <MoviesSeating /> */}
      {/* <SplashAnimation /> */}
      {/* <YoutubeComponent /> */}
      {/* <PriceRangeSelector /> */}
      {/* <SeatSelectionScreen /> */}
    </View>
  );
};

export default AllComponents;

const styles = StyleSheet.create({});

import {
  Dimensions,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useState } from "react";
import {
  Gesture,
  GestureDetector,
  PinchGestureHandler,
  State,
} from "react-native-gesture-handler";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { Image } from "react-native";
import seatLayoutExists from "./seatting-data";

const MoviesSeating = () => {
  const { width } = Dimensions.get("window");
  //   console.log("width", width);

  const scale = useSharedValue(1);
  const translateX = useSharedValue(0);
  const transaltedValueX = useSharedValue(0);

  // const translateY = useSharedValue(0);

  // const pinchGesture = Gesture.Pinch()
  //   .onUpdate((event) => {
  //     scale.value = Math.max(1, event.scale);
  //   })
  //   .onEnd(() => {
  //     scale.value = withSpring(Math.max(1, scale.value));
  //   });

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = transaltedValueX.value + event.translationX;
      // translateY.value = event.translationY;
    })
    .onEnd(() => {
      transaltedValueX.value = translateX.value;
      console.log("onEnd", translateX.value);
    });

  const animatedStyle = useAnimatedStyle(() => {
    // console.log("scale.value", translateX.value);
    return {
      transform: [
        { scale: scale.value },
        { translateX: translateX.value },
        // { translateY: translateY.value },
      ],
    };
  });

  return (
    <View style={styles.container}>
      {/* <GestureDetector gesture={pinchGesture}> */}
      <GestureDetector gesture={panGesture}>
        <Animated.View style={[styles.theaterContainer, animatedStyle]}>
          <View className="">
            {seatLayoutExists.map((item, index) => (
              <View key={index} className="mb-4">
                <Text className="text-lg font-bold absolute -top-[10px] left-1/2">
                  {item.seatType} - Rs: {item.price}/-
                </Text>
                <View className="my-[8px]"></View>

                <View>
                  {item.rows.map((row, rowIndex) => (
                    <View
                      key={rowIndex}
                      className="flex flex-row items-center my-1"
                    >
                      {/* Fixed Row Label */}
                      <View className="w-[30px] h-[30px] bg-gray-300 flex justify-center items-center  l eft-0">
                        <Text className="font-bold">{row.rowLabel}</Text>
                      </View>

                      {/* Scrollable Seats */}
                      <View className="ml-[10px] flex flex-row">
                        {row.columns.map((col, colIndex) => (
                          <Pressable
                            key={colIndex}
                            onPress={() => {
                              console.log("col", col);
                            }}
                          >
                            <View className="border border-black rounded-sm mx-1 w-[30px] h-[30px] flex justify-center items-center bg-gray-100">
                              <Text>{colIndex + 1}</Text>
                            </View>
                          </Pressable>
                        ))}
                      </View>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </Animated.View>
      </GestureDetector>
      {/* </GestureDetector> */}
      <View className="flex justify-center items-center">
        <Text className="">All eyes on this screen</Text>
        <Image source={require("./images/screen.png")} className="-mt-[35px]" />
      </View>
    </View>
  );
};

export default MoviesSeating;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  theaterContainer: {
    padding: 10,
    alignItems: "center",
  },
  screen: {
    width: "80%",
    height: 40,
    backgroundColor: "#ddd",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 40,
    transform: [{ perspective: 500 }, { rotateX: "45deg" }],
  },
  screenText: {
    color: "#666",
    fontWeight: "bold",
  },
});

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
  clamp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { Image } from "react-native";
import seatLayoutExists from "./seatting-data";

const MoviesSeating = () => {
  const { width, height } = Dimensions.get("window");
  //   console.log("width", width);

  const scale = useSharedValue(0.8);
  const translateX = useSharedValue(0);
  const transaltedValueX = useSharedValue(0);

  const translateY = useSharedValue(0);
  const transaltedValueY = useSharedValue(0);

  const MAX_SCALE = 3;
  const MIN_SCALE = -3;
  const MAX_PAN_X = width * 1.5;
  const MAX_PAN_Y = height * 0.5;

  // Pinch-to-zoom gesture
  const pinchGesture = Gesture.Pinch()
    .onUpdate((event) => {
      // scale.value = Math.max(1, event.scale);
      scale.value = clamp(event.scale, MIN_SCALE, MAX_SCALE);
    })
    .onEnd(() => {
      // scale.value = withSpring(Math.max(1, scale.value));
      scale.value = withSpring(clamp(scale.value, MIN_SCALE, MAX_SCALE));
    });

  // const panGesture = Gesture.Pan()
  //   .onUpdate((event) => {
  //     translateX.value = transaltedValueX.value + event.translationX;
  //     translateY.value = event.translationY;
  //   })
  //   .onEnd(() => {
  //     transaltedValueX.value = translateX.value;
  //     console.log("onEnd", translateX.value);
  //   });

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = clamp(
        transaltedValueX.value + event.translationX,
        -MAX_PAN_X * scale.value,
        MAX_PAN_X * scale.value
      );
      translateY.value = clamp(
        transaltedValueY.value + event.translationY,
        -MAX_PAN_Y * scale.value,
        MAX_PAN_Y * scale.value
      );
    })
    .onEnd(() => {
      transaltedValueX.value = translateX.value;
      transaltedValueY.value = translateY.value;
    });

  const animatedStyle = useAnimatedStyle(() => {
    console.log("scale.value", translateX.value);
    return {
      transform: [
        { scale: scale.value },
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  // Mini-map viewport movement
  const miniMapStyle = useAnimatedStyle(() => ({
    transform: [
      { translateX: -translateX.value / 5.5 }, // Reverse X movement
      { translateY: -translateY.value / 12 }, // Reverse Y movement
    ],
  }));

  // Left Side Label Bar Animation
  const labelBarStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { translateY: translateY.value * 0.99 },
    ],
  }));

  return (
    <View style={styles.container}>
      <GestureDetector gesture={pinchGesture}>
        <View>
          <Animated.View style={[styles.rowLabelsContainer, labelBarStyle]}>
            {seatLayoutExists.map((item, index) => (
              <View key={index} className="bg-gray -500">
                {item.rows.map((row, rowIndex) => (
                  <View key={rowIndex} className="w-[32px] my-[3.8px] h-[32px]">
                    <Text className="font-bold text-center">
                      {row.rowLabel}
                    </Text>
                  </View>
                ))}
                <View className="w-[30px] h-[30px] "></View>
              </View>
            ))}
          </Animated.View>
          <GestureDetector gesture={panGesture}>
            <View style={styles.seatingContainer}>
              <Animated.View style={[styles.theaterContainer, animatedStyle]}>
                <View className="">
                  {seatLayoutExists.map((item, index) => (
                    <View key={index} className="pb-4 bg-green-500">
                      <Text className="text-lg font-bold absolute -top-[10px] left-1/2">
                        {item.seatType} - Rs: {item.price}/-
                      </Text>
                      <View className="py-[8px]"></View>

                      <View>
                        {item.rows.map((row, rowIndex) => (
                          <View
                            key={rowIndex}
                            className="flex flex-row items-center py-1"
                          >
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
            </View>
          </GestureDetector>
        </View>
      </GestureDetector>

      {/* Mini-Map */}
      <View style={styles.minimapContainer}>
        <View style={styles.minimap}>
          <Animated.View style={[styles.minimapViewport, miniMapStyle]} />
          {seatLayoutExists.map((item, index) => (
            <View key={index} className="">
              {item.rows.map((row, rowIndex) => (
                <View key={rowIndex} className="flex flex-col items-center">
                  {/* Scrollable Seats */}
                  <View className="flex flex-row">
                    {row.columns.map((col, colIndex) => (
                      <View key={colIndex}>
                        <View className="border border-black rounded-sm m-[1px] w-[9px] h-[9px]"></View>
                      </View>
                    ))}
                  </View>
                </View>
              ))}
            </View>
          ))}
        </View>
      </View>

      {/* Screen */}
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
  rowLabelsContainer: {
    position: "absolute",
    left: -2,
    top: 6, // Adjust based on layout
    zIndex: 10, // Ensure it's above seats
    backgroundColor: "red",
    paddingTop: 22,
    borderRadius: 25,
  },
  rowLabel: {
    width: 40,
    height: 30,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ccc",
    marginVertical: 2,
  },
  rowLabelText: {
    fontWeight: "bold",
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
  minimapContainer: {
    position: "absolute",
    bottom: 20,
    right: 20,
    backgroundColor: "rgba(0,0,0,0.6)",
    borderRadius: 8,
    padding: 5,
  },
  minimap: {
    width: 250,
    height: 80,
    borderWidth: 1,
    borderColor: "#fff",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#b3b3b3",
    position: "relative",
  },
  minimapViewport: {
    width: 40,
    height: 80,
    // backgroundColor: "rgba(255, 0, 0, 0.5)",
    borderColor: "red",
    borderWidth: 2,
    position: "absolute",
  },
});

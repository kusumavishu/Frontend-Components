import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import React, { useCallback, useEffect, useMemo, useState } from "react";

import { AntDesign } from "@expo/vector-icons";
import Animated, {
  clamp,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";
import { Gesture, GestureDetector } from "react-native-gesture-handler";

import SeatIcon from "./images/seat-icon";
import seatLayoutApi from "./seat-layout-exists";

const SeatArrangements = () => {
  const [selectedSeat, setSelectedSeat] = useState([]);

  const handleSelectSeat = useCallback((seat) => {
    setSelectedSeat((prevSeats) => {
      const isSelected = prevSeats.some((s) => s.seatId === seat.seatId);
      return isSelected
        ? prevSeats.filter((s) => s.seatId !== seat.seatId)
        : [...prevSeats, seat];
    });
  }, []);

  const isSeatSelected = useMemo(
    () => new Set(selectedSeat.map((s) => s.seatId)),
    [selectedSeat]
  );

  const totalPayment = useMemo(() => {
    return selectedSeat.reduce((total, seat) => total + seat.price, 0);
  }, [selectedSeat]);

  useEffect(() => {
    console.log("selectedSeat", selectedSeat);
  });

  //movie
  const { width, height } = Dimensions.get("window");
  //   console.log("width", width);

  const scale = useSharedValue(0.7);
  const translateX = useSharedValue(0);
  const transaltedValueX = useSharedValue(0);

  const translateY = useSharedValue(0);
  const translatedValueY = useSharedValue(0);

  const MAX_SCALE = 3;
  const MIN_SCALE = -3;
  // const MAX_PAN_X = width * 1.5;
  const MAX_PAN_X = width * 2;
  const MAX_PAN_Y = height * 0.5;

  const pinchGesture = Gesture.Pinch()
    .onUpdate((event) => {
      // scale.value = Math.max(1, event.scale);
      scale.value = clamp(event.scale, MIN_SCALE, MAX_SCALE);
    })
    .onEnd(() => {
      // scale.value = withSpring(Math.max(1, scale.value));
      scale.value = withSpring(clamp(scale.value, MIN_SCALE, MAX_SCALE));
    });

  const panGesture = Gesture.Pan()
    .onUpdate((event) => {
      translateX.value = clamp(
        transaltedValueX.value + event.translationX,
        -MAX_PAN_X * scale.value,
        MAX_PAN_X * scale.value
      );
      translateY.value = clamp(
        translatedValueY.value + event.translationY,
        -MAX_PAN_Y * scale.value,
        MAX_PAN_Y * scale.value
      );
    })
    .onEnd(() => {
      transaltedValueX.value = translateX.value;
      translatedValueY.value = translateY.value;
    });

  const animatedStyle = useAnimatedStyle(() => {
    // console.log("scale.value", translateX.value);
    return {
      transform: [
        { scale: scale.value },
        { translateX: translateX.value },
        { translateY: translateY.value },
      ],
    };
  });

  // Left Side Label Bar Animation
  const labelBarStyle = useAnimatedStyle(() => ({
    transform: [
      { scale: scale.value },
      { translateY: translateY.value * 0.99 },
    ],
  }));

  return (
    <>
      {/* <GradientBackground style={{ flex: 1 }}> */}
      <SafeAreaView
        style={{ flex: 1, width: "100%", backgroundColor: "#000000" }}
      >
        <View className="flex flex-col justify-center " style={{ flex: 0.24 }}>
          {/*  */}
          <View className="flex flex-row justify-between items-center px-4 my-4">
            <View>
              <Text className="font-Inter font-semibold text-[14px] text-white leading-[22px] tracking-wide">
                SCREEN - 3
              </Text>
              <Text className="font-Inter font-semibold text-[14px] text-white leading-[22px] tracking-wide">
                Big Screen
              </Text>
            </View>
            <View className="bg-[#FFFFFFB5] p-2 flex flex-col justify-center items-center rounded">
              <Text>24</Text>
              <Text>MON</Text>
            </View>
            <View className="bg-[#FFFFFFB5] p-2 flex flex-col justify-center items-center rounded">
              <Text>SHOW TIME</Text>
              <Text>04.20 PM</Text>
            </View>
            <View className="bg-[#FFFFFFB5] p-2 flex flex-col justify-center items-center rounded">
              <Text>SEATS SELECTED</Text>
              <View className="flex flex-row justify-center items-center">
                <SeatIcon />
                <Text className="ml-2">{selectedSeat.length}</Text>
              </View>
            </View>
          </View>

          <View className="flex flex-row justify-evenly items-center">
            <View className="flex flex-row items-center">
              <View className="w-[16px] h-[16px] border-white border-[0.2px] bg-[#11163D] rounded-full"></View>
              <Text className="font-Inter font-normal text-[15px] leading-[24px] text-white ml-2">
                Reserved
              </Text>
            </View>
            <View className="flex flex-row items-center">
              <View className="w-[16px] h-[16px] border-white border-[0.2px] bg-[#FFFFFF] rounded-full"></View>
              <Text className="font-Inter font-normal text-[15px] leading-[24px] text-white ml-2">
                Available
              </Text>
            </View>
            <View className="flex flex-row items-center">
              <View className="w-[16px] h-[16px] border-white border-[0.2px] bg-[#0075FF] rounded-full"></View>
              <Text className="font-Inter font-normal text-[15px] leading-[24px] text-white ml-2">
                Selected
              </Text>
            </View>
          </View>
        </View>

        {/* MOVIE SEATING LAYOUT */}
        <View
          className="overflow-hidden bg-gree n-500"
          style={{
            flex: 0.74,
            justifyContent: "center",
          }}
        >
          {/*  */}
          <GestureDetector gesture={pinchGesture}>
            {/* ROW LABEL BAR */}
            <View>
              <Animated.View style={[styles.rowLabelsContainer, labelBarStyle]}>
                {seatLayoutApi.data.map((item, index) => (
                  <View key={index} className="pb-1 bg-gray -500">
                    {item.rows.map((row, rowIndex) => (
                      <View
                        key={rowIndex}
                        className="w-[31px] my-[3px] h-[31px] py-1"
                      >
                        <Text className="font-bold text-center">
                          {row.rowLabel}
                        </Text>
                      </View>
                    ))}
                    <View className="w-[26px] h-[31px] py-1"></View>
                  </View>
                ))}
              </Animated.View>

              <GestureDetector gesture={panGesture}>
                <View style={styles.seatingContainer}>
                  <Animated.View
                    style={[styles.theaterContainer, animatedStyle]}
                  >
                    <View className="bg-gre en-500">
                      {seatLayoutApi.data.map((item, index) => (
                        <View key={index} className="pb-2 w-full bg-gree n-500">
                          <View className="py-1 ml-3 mb-1 flex flex-row justify-between items-center border-[#ffffff9a] border-b-[0.4px]">
                            <Text className="text-white text-base font-extralight font-Gilroy tracking-widest">
                              {item.seatType} - Rs: {item.price}/-
                            </Text>
                          </View>

                          <View className="">
                            {item.rows.map((row, rowIndex) => {
                              let count = 1;
                              return (
                                <View
                                  key={rowIndex}
                                  className="flex flex-row items-center py-[2px]"
                                >
                                  <View className="ml-[10px] flex flex-row">
                                    {row.columns.map((col, colIndex) => {
                                      return (
                                        <Pressable
                                          key={colIndex}
                                          onPress={() => {
                                            console.log(
                                              "col",
                                              col,
                                              `${row.rowLabel + count}`
                                            );
                                            handleSelectSeat(col);
                                          }}
                                          disabled={
                                            col.availability === "reserved"
                                              ? true
                                              : false
                                          }
                                        >
                                          <View className="w-[35px] h-[32px] mx-[2.5px] flex justify-center items-center bg-gr een-500 relative">
                                            {col.isSeat && (
                                              <>
                                                <Text
                                                  className={`text-[10px] font-semibold absolute top-[5px] bg-re d-500 ${
                                                    col.availability ===
                                                    "reserved"
                                                      ? "text-white"
                                                      : "text-black"
                                                  }`}
                                                  style={{ zIndex: 999 }}
                                                >
                                                  {/* {col.seatId} */}
                                                  {`${row.rowLabel + count++}`}
                                                </Text>
                                                <SeatIcon
                                                  fill={
                                                    selectedSeat.some(
                                                      (s) =>
                                                        s.seatId ===
                                                          col.seatId &&
                                                        s.price === col.price
                                                    )
                                                      ? "#0075FF"
                                                      : col.availability ===
                                                        "reserved"
                                                      ? "#1c2463"
                                                      : "#d9d9d9"
                                                  }
                                                  width={50}
                                                  height={50}
                                                  style={{
                                                    transform: [{ scale: 2 }],
                                                  }}
                                                />
                                              </>
                                            )}
                                          </View>
                                        </Pressable>
                                      );
                                    })}
                                  </View>
                                </View>
                              );
                            })}
                          </View>
                        </View>
                      ))}
                    </View>
                    <View className="flex justify-center items-center">
                      <Text className="text-white">
                        All eyes on this screen
                      </Text>
                    </View>
                  </Animated.View>
                </View>
              </GestureDetector>
            </View>
          </GestureDetector>
        </View>

        {selectedSeat.length > 0 && (
          <View className="flex flex-row justify-between items-center py-2 px-6 absolute bottom-0 w-full bg-[#D8AF3C]">
            <View className="flex flex-row items-center">
              <Text className="font-Inter text-[18px] leading-[24px] font-normal">
                Total Payment{" "}
              </Text>
              <Text className="font-Inter font-bold text-[18px] leading-[24px]">
                ₹ {totalPayment.toFixed(2)}
              </Text>
            </View>
            <Pressable
              className="bg-w hite p-5 "
              onPress={() => {
                console.log("continue");
              }}
            >
              <View>
                <AntDesign name="arrowright" size={24} color="black" />
              </View>
            </Pressable>
          </View>
        )}
      </SafeAreaView>
    </>
  );
};

export default SeatArrangements;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#f5f5f5",
  },
  rowLabelsContainer: {
    position: "absolute",
    left: -2,
    top: 42, // Adjust based on layout
    zIndex: 10, // Ensure it's above seats
    backgroundColor: "#d9d9d9",
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
});

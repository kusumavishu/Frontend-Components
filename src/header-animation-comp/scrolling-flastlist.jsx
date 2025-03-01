import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React, { useState } from "react";
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from "react-native-reanimated";

const ProfilesDetails = [
  {
    title: "Edit Profile",
    direction: "edit-profile",
  },
  {
    title: "My Wallet",
    direction: "my-wallet",
  },
  {
    title: "All Coupons",
    direction: "all-coupons",
  },
  {
    title: "Booking History",
    direction: "booking-history",
  },
  {
    title: "Support",
    direction: "support",
  },
  {
    title: "Cancellation Policy",
    direction: "cancellation-policy",
  },
  {
    title: "Refund Policy",
    direction: "refund-policy",
  },
  {
    title: "Terms & Conditions",
    direction: "terms-and-conditions",
  },
  {
    title: "Privacy & Policy",
    direction: "privacy-policy",
  },
  {
    title: "Delete Account",
    direction: "Delete Account",
    // function: () => handleDeleteAccount(),
  },
  {
    title: "Logout",
    direction: "Logout",
    // function: () => handleLogout(),
  },
];

const HeaderFlastlist = () => {
  const { width } = Dimensions.get("window");
  const headerHeight = 320; // header hight
  const headerFinalHeight = 100; // small height
  const imageSize = (headerHeight / 3) * 1.8;

  const scrollY = useSharedValue(0);
  const [textWidth, setTextWidth] = useState(0);
  const offset = headerHeight - headerFinalHeight; //320-100=220

  const scrollHandler = useAnimatedScrollHandler((event) => {
    scrollY.value = event.contentOffset.y;
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [0, offset],
            [0, -offset],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const animatedButtonStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrollY.value,
        [0, offset], // Start at 0 and hide when scrollY.value reaches offset
        [1, 0], // Fully visible at the top, hidden when at offset
        Extrapolation.CLAMP
      ),
    };
  });

  const animatedImageStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateY: interpolate(
            scrollY.value,
            [0, offset],
            [0, offset / 2],
            Extrapolation.CLAMP
          ),
        },
        {
          translateX: interpolate(
            scrollY.value,
            [0, offset],
            [0, -(width / 2) + (imageSize * headerFinalHeight) / headerHeight],
            Extrapolation.CLAMP // Ensures values don't go beyond the output range
          ),
        },

        {
          scale: interpolate(
            scrollY.value,
            [0, offset],
            [1, headerFinalHeight / headerHeight],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: interpolate(
            scrollY.value,
            [0, offset / 2, offset],
            [0, 10, -width / 2 + textWidth / 2 + headerFinalHeight - 15],
            Extrapolation.CLAMP // Ensures values don't go beyond the output range
          ),
        },
        {
          scale: interpolate(
            scrollY.value,
            [0, offset],
            [1, 0.8],
            Extrapolation.CLAMP
          ),
        },
      ],
    };
  });

  const renderItem = ({ item, index }) => {
    if (index === 0)
      return (
        <View
          className="bg-y ellow-300"
          style={{ overflow: "hidden", zIndex: -1 }}
        >
          <Animated.View
            style={[
              animatedHeaderStyle,
              {
                height: headerHeight,
                // minHeight: headerFinalHeight,
                marginTop: 20,
                justifyContent: "center",
                alignItems: "center",
                zIndex: 1,
              },
            ]}
            // pointerEvents={headerHeight > headerFinalHeight ? "auto" : "box-none"}
            pointerEvents="auto"
          >
            <View className="relative">
              <Animated.View
                style={[
                  animatedImageStyle,
                  {
                    height: imageSize,
                    width: imageSize,
                    borderRadius: 100,
                    //   overflow: "hidden",
                  },
                ]}
                pointerEvents="auto"
              >
                <Image
                  source={{
                    uri: "https://api.jayasindoor.com/images/Artists/1738750973996.jpeg",
                  }}
                  style={{
                    height: "100%",
                    width: "100%",
                    borderRadius: 100,
                    borderColor: "white",
                    borderWidth: 0.5,
                  }}
                  resizeMode="cover"
                />

                <Animated.View
                  style={[animatedButtonStyle]}
                  pointerEvents="auto"
                >
                  {/* This wrapper is for animating, but Pressable should be clickable outside */}
                  <TouchableOpacity
                    onPress={() => console.log("clicked the icon")}
                    hitSlop={{ top: 10, bottom: 30, left: 10, right: 10 }} // Expands touch area
                    style={{
                      position: "absolute",
                      bottom: 20,
                      right: 20,
                      // backgroundColor: "#f2f2f2",
                      backgroundColor: "red",
                      borderRadius: 15,
                      padding: 10,
                      elevation: 5, // Shadow on Android
                    }}
                  >
                    <View>
                      <Text> X</Text>
                    </View>
                  </TouchableOpacity>
                </Animated.View>
              </Animated.View>
            </View>
            <Animated.Text
              onTextLayout={(e) => {
                setTextWidth(e.nativeEvent.lines[0].width);
              }}
              style={[
                animatedTextStyle,
                {
                  fontSize: 22,
                  color: "white",
                  position: "absolute",
                  bottom: 0,
                  height: headerFinalHeight,
                  textAlignVertical: "center",
                  letterSpacing: 2,
                },
              ]}
            >
              Kusuma Vishwesh
            </Animated.Text>
          </Animated.View>
        </View>
      );
    return (
      <>
        <TouchableOpacity
          className="my-1"
          zIndex={1}
          style={{ overflow: "visible", zIndex: 99 }}
          onPress={() => {
            console.log("console nothing");
          }}
        >
          <View className="my-2 flex-row justify-between items-center w-[88%] mx-auto">
            <View>
              <Text className=" font-Inter font-medium text-[16px] tracking-wider my-2">
                {item.title}
              </Text>
            </View>
            <View>
              <Text>X</Text>
            </View>
          </View>
        </TouchableOpacity>
      </>
    );
  };
  return (
    <View>
      <Animated.FlatList
        data={[{ id: "header" }, ...ProfilesDetails]}
        renderItem={renderItem}
        keyExtractor={(_, index) => index.toString()}
        stickyHeaderIndices={[0]}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
        style={{ marginBottom: 20 }}
      />
    </View>
  );
};

export default HeaderFlastlist;

const styles = StyleSheet.create({});

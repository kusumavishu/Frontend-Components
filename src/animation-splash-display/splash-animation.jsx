import React, { useEffect } from "react";
import { View, Text, TextInput, Image, Dimensions } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from "react-native-reanimated";

const { height } = Dimensions.get("window");

const SplashAnimation = () => {
  //   const imageScale = useSharedValue(1); // Start larger
  const imageTranslateY = useSharedValue(40); // Start from middle
  const opacity = useSharedValue(0.0); // Login form starts hidden

  useEffect(() => {
    // Animate image to shrink and slide up
    // imageScale.value = withTiming(1, {
    //   duration: 1600,
    //   easing: Easing.out(Easing.exp),
    // });

    imageTranslateY.value = withTiming(-110, {
      duration: 3500,
      easing: Easing.out(Easing.exp),
    });

    // Gradually increase opacity while sliding
    opacity.value = withTiming(1.0, {
      duration: 15000,
      easing: Easing.out(Easing.exp),
    });
  }, []);

  const animatedImageStyle = useAnimatedStyle(() => ({
    transform: [
      //   { scale: imageScale.value },
      { translateY: imageTranslateY.value },
    ],
  }));

  const animatedLoginStyle = useAnimatedStyle(() => ({
    opacity: opacity.value,
  }));

  return (
    <View className="flex-1 justify-center items-center bg-[#1d1d24]">
      {/* Animated Image */}
      <Animated.Image
        source={require("./splash-images/Group.png")}
        className="w-[163px] h-[118px]"
        style={animatedImageStyle}
      />

      {/* Animated Login View */}
      <Animated.View style={animatedLoginStyle} className="w-full">
        <Text className="text-white font-bold text-[28px] text-center">
          Login
        </Text>
        <View className="bg-re d-500 w-[85%] mx-auto mt-5">
          <Text className="text-[#6C7278]">Mobile Number</Text>
          <TextInput
            placeholder="Enter your mobile number"
            className="text-white"
            readOnly
            value="+91 8978182191"
          />
        </View>
      </Animated.View>
    </View>
  );
};

export default SplashAnimation;

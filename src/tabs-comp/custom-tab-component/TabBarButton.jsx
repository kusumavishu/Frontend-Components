import { View, Text, Pressable, StyleSheet } from "react-native";
import React, { useEffect } from "react";

import Animated, {
  interpolate,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

import { icons } from "./icons";

const TabBarButton = (props) => {
  const { isFocused, label, routeName, color } = props;

  console.log(props);

  const scale = useSharedValue(0);

  useEffect(() => {
    scale.value = withSpring(
      typeof isFocused === "boolean" ? (isFocused ? 1 : 0) : isFocused,
      { duration: 350 }
    );
  }, [scale, isFocused]);

  const animatedIconStyle = useAnimatedStyle(() => {
    const scaleValue = interpolate(scale.value, [0, 1], [1, 1.4]);
    const top = interpolate(scale.value, [0, 1], [0, 8]);

    return {
      // styles
      transform: [{ scale: scaleValue }],
      top,
    };
  });

  const animatedTextStyle = useAnimatedStyle(() => {
    const opacity = interpolate(scale.value, [0, 1], [1, 0]);

    return {
      // styles
      opacity,
    };
  });

  //only for Icons
  return (
    <Pressable {...props} style={styles.container}>
      {/* <View>
        {icons[routeName]({
          color,
        })}
      </View> */}
      {console.log("routeName", routeName)}
      <View>{icons[routeName] ? icons[routeName]({ color }) : null}</View>

      <Text
        style={{
          color,
          fontSize: 11,
        }}
      >
        {label}
      </Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 4,
  },
});

export default TabBarButton;

// import { StyleSheet, Text, View } from "react-native";
// import React from "react";

// const InputRange = () => {
//   return (
//     <View>
//       <Text>InputRange</Text>
//       <Text>InputRange</Text>
//       <Text>InputRange</Text>
//       <Text>InputRange</Text>
//     </View>
//   );
// };

// export default InputRange;

// const styles = StyleSheet.create({});

// --------------

import React, { useEffect, useRef, useState } from "react";
import {
  Animated,
  Button,
  PanResponder,
  StyleSheet,
  TextInput,
  View,
} from "react-native";

const rangeColor = "#3495e0"; //line active color
const inactiveRangeColor = "#ddd"; //line inactive color

const sliderSize = 28; // both ball point sizes or circle point size
const sliderlineHeight = 5; // line hight

const minPriceValue = 0;
const maxPriceValue = 1000;
const priceSymbol = "$";

export default function PriceRangeSelector() {
  const [containerWidth, setWidth] = useState(null);
  const [leftMove, setLeftMove] = useState(0);
  const [rightMove, setRightMove] = useState(100);
  const [show, setShow] = useState(true);

  const saveMinMax = (price, isLeft) => {
    console.log(price);
    setShow(false);
    if (isLeft) setLeftMove(price);
    else setRightMove(price);
    setShow(true);
  };

  const getPriceRange = (isLeft) => {
    return (
      minPriceValue +
      ((isLeft ? leftMove : rightMove) / 100) * (maxPriceValue - minPriceValue)
    );
  };
  let currentPriceRange = getPriceRange(true) + "-" + getPriceRange(false);

  return (
    <View style={styles.container}>
      <View
        style={styles.fullWidthCenterMain}
        onLayout={(e) => {
          console.log("first console>>", e.nativeEvent.layout.width);
          // "e.nativeEvent.layout.width" --> will give the total width of the screen and set in width useState
          // containerWidth === Width //352.7272644042969 for my device
          setWidth(e.nativeEvent.layout.width);
        }}
      >
        {containerWidth && show && (
          <View style={styles.fullWidthCenter}>
            {/* active Line in B/w of two circle */}
            <View style={styles.activeBar}></View>
            {/* left circle */}
            <SliderCircle
              containerWidth={containerWidth}
              saveMinMax={saveMinMax}
              currentMinPricePos={leftMove}
              currentMaxPricePos={rightMove}
              isLeft
            />
            {/* Right Circle */}
            <SliderCircle
              containerWidth={containerWidth}
              saveMinMax={saveMinMax}
              currentMinPricePos={leftMove}
              currentMaxPricePos={rightMove}
            />
          </View>
        )}
      </View>
      <Button title="Show range" onPress={() => alert(currentPriceRange)} />
    </View>
  );
}

let price = 0;

function SliderCircle({
  containerWidth,
  isLeft,
  saveMinMax,
  currentMinPricePos,
  currentMaxPricePos,
}) {
  const minPrice = 0;
  const maxPrice = 100;

  const offset = containerWidth - sliderSize * 2;
  //offset is actuvally line size removally of two point size

  const initialPos =
    (((isLeft ? currentMinPricePos : currentMaxPricePos) -
      (isLeft ? minPrice : maxPrice)) /
      (maxPrice - minPrice)) *
    offset;

  console.log("initialPos", initialPos);

  // initialPos =currentMinPricePos - minPrice / (maxPrice-MinPrice) * offSet;
  // initialPos =currentMaxPricePos - maxPrice / (maxPrice-MinPrice) * offSet;

  const animation = useRef(
    new Animated.ValueXY({ x: initialPos, y: 0 })
  ).current;

  // Animated.ValueXY is a part of the React Native Animated API,
  // used for animating values in two dimensions (x and y coordinates).
  // It's commonly used when animating objects that move along both the
  // horizontal and vertical axes.

  console.log("animation", animation); //LOG  animation {"x": 0, "y": 0}

  let minValue, maxValue;

  const initialPos1 =
    (((!isLeft ? currentMinPricePos : currentMaxPricePos) -
      (!isLeft ? minPrice : maxPrice)) /
      (maxPrice - minPrice)) *
    offset;
  if (isLeft) {
    minValue = 0;
    maxValue = offset + initialPos1;
  } else {
    minValue = -offset + initialPos1;
    maxValue = 0;
  }

  const translateX = Animated.diffClamp(animation.x, minValue, maxValue);
  console.log("translateX", translateX);

  // diffClamp is a method from React Native's Reanimated library (react-native-reanimated),
  // used to clamp the difference between the current animated value and the previous value within a given range.

  // Use Case
  // It is useful when:

  // ->You need to limit the movement of an animation within a specific range.
  // ->You're implementing sticky headers or scroll-based animations.
  // ->You want to prevent a value from exceeding a minimum and maximum range.

  const priceValueRef = useRef();

  const translateXInactiveLeft = Animated.add(
    translateX,
    new Animated.Value(-containerWidth)
  );

  const translateXInactiveRight = Animated.add(
    translateX,
    new Animated.Value(containerWidth)
  );

  useEffect(() => {
    let value =
      minPriceValue +
      ((isLeft ? currentMinPricePos : currentMaxPricePos) / 100) *
        (maxPriceValue - minPriceValue);
    value = value.toString() + " " + priceSymbol;
    priceValueRef.current.setNativeProps({ text: value });
  });

  useEffect(() => {
    translateX.addListener((val) => {
      if (isLeft) {
        let value = (
          minPrice +
          (val.value / offset) * (maxPrice - minPrice)
        ).toFixed(0);

        price = value;
        value = minPriceValue + (value / 100) * (maxPriceValue - minPriceValue);
        value = value.toString() + " " + priceSymbol;

        priceValueRef.current.setNativeProps({ text: value });
      } else {
        let value = (
          maxPrice +
          (val.value / offset) * (maxPrice - minPrice)
        ).toFixed(0);
        price = value;
        value = minPriceValue + (value / 100) * (maxPriceValue - minPriceValue);
        value = value.toString() + " " + priceSymbol;
        priceValueRef.current.setNativeProps({ text: value });
      }
    });

    return () => {
      animation.removeAllListeners();
    };
  }, [saveMinMax]);

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderGrant: () => {
        animation.setOffset({ x: animation.x._value, y: animation.y._value });
        animation.setValue({ x: 0, y: 0 });
      },
      onPanResponderMove: Animated.event(
        [null, { dx: animation.x, dy: animation.y }],
        {
          useNativeDriver: false,
        }
      ),
      onPanResponderRelease: () => {
        animation.flattenOffset();
        setTimeout(() => {
          saveMinMax(price, isLeft);
        }, 0);
      },
      onPanResponderTerminate: () => {},
      onShouldBlockNativeResponder: () => {
        return true;
      },
    })
  ).current;

  return (
    <View style={[styles.fullWidthCenter]}>
      <View style={styles.overflowContainer}>
        <Animated.View
          style={[
            isLeft ? styles.inactiveBarLeft : styles.inactiveBarRight,
            {
              transform: [
                {
                  translateX: isLeft
                    ? translateXInactiveLeft
                    : translateXInactiveRight,
                },
              ],
            },
          ]}
        ></Animated.View>
      </View>
      <Animated.View
        style={[
          isLeft ? styles.leftSlider : styles.rightSlider,
          { transform: [{ translateX }] },
        ]}
        {...panResponder.panHandlers}
      />
      <Animated.View
        {...panResponder.panHandlers}
        style={[
          isLeft ? styles.leftSliderTxt : styles.rightSliderTxt,
          { transform: [{ translateX }, { translateY: -30 }] },
        ]}
      >
        <TextInput editable={false} ref={priceValueRef} />
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-around",
    paddingHorizontal: 20,
  },
  activeBar: {
    ...StyleSheet.absoluteFill,
    height: sliderlineHeight,
    backgroundColor: rangeColor,
  },
  inactiveBarLeft: {
    ...StyleSheet.absoluteFill,
    height: sliderlineHeight,
    backgroundColor: inactiveRangeColor,
  },
  inactiveBarRight: {
    ...StyleSheet.absoluteFill,
    height: sliderlineHeight,
    backgroundColor: inactiveRangeColor,
  },
  leftSlider: {
    position: "absolute",
    height: sliderSize,
    width: sliderSize,
    borderWidth: 2,
    borderColor: rangeColor,
    borderRadius: sliderSize / 2,
    backgroundColor: "#fff",
  },
  rightSlider: {
    position: "absolute",
    height: sliderSize,
    width: sliderSize,
    borderWidth: 2,
    borderColor: rangeColor,
    borderRadius: sliderSize / 2,
    backgroundColor: "#fff",
    right: 0,
  },
  leftSliderTxt: {
    position: "absolute",
    padding: 0,
    flexGrow: 0,
  },
  rightSliderTxt: {
    position: "absolute",
    padding: 0,
    flexGrow: 0,
    right: 0,
  },
  fullWidthCenterMain: {
    width: "100%",
    justifyContent: "center",
    minHeight: sliderlineHeight,
  },
  fullWidthCenter: {
    position: "absolute",
    width: "100%",
    justifyContent: "center",
    minHeight: sliderlineHeight,
  },
  overflowContainer: {
    overflow: "hidden",
    height: sliderlineHeight,
    ...StyleSheet.absoluteFill,
    justifyContent: "center",
  },
});

import React, { useRef } from "react";
import {
  Animated,
  Dimensions,
  Image,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const itemWidth = (width / 3) * 2;
const padding = (width - itemWidth) / 2;
const offset = itemWidth;

const images = [
  "https://api.jayasindoor.com/images/posterPictures/1736335724168.jpg",
  "https://api.jayasindoor.com/images/posterPictures/1736335724168.jpg",
  "https://api.jayasindoor.com/images/posterPictures/1736335724168.jpg",
  "https://api.jayasindoor.com/images/posterPictures/1736335724168.jpg",
  "https://api.jayasindoor.com/images/posterPictures/1736335724168.jpg",
  "https://api.jayasindoor.com/images/posterPictures/1736335724168.jpg",
  "https://api.jayasindoor.com/images/posterPictures/1736335724168.jpg",
  "https://api.jayasindoor.com/images/posterPictures/1736335724168.jpg",
];

export default function AnimatedTileScrolling() {
  const scrollX = useRef(new Animated.Value(0)).current;
  return (
    <View
      style={{
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <View
        style={{
          backgroundColor: "green",
        }}
      >
        <ScrollView
          horizontal
          pagingEnabled
          decelerationRate="fast"
          contentContainerStyle={styles.scrollView}
          showsHorizontalScrollIndicator={false}
          snapToInterval={offset}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { x: scrollX } } }],
            {
              useNativeDriver: false,
            }
          )}
          style={{ backgroundColor: "red" }}
        >
          {images.map((item, i) => (
            <Item key={i} item={item} i={i} scrollX={scrollX} />
          ))}
        </ScrollView>
      </View>
    </View>
  );
}

function Item({ item, i, scrollX }) {
  const scale = scrollX.interpolate({
    inputRange: [-offset + i * offset, i * offset, offset + i * offset],
    outputRange: [0.75, 1, 0.75],
  });

  return (
    <Animated.View style={[styles.item, { transform: [{ scale }] }]}>
      <View>
        <Image
          source={{
            uri: item,
          }}
          style={{ width: "100%", height: "100%" }}
          resizeMode="cover"
        />
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    paddingHorizontal: padding,
    alignItems: "center",
  },
  item: {
    height: itemWidth,
    width: itemWidth,
    backgroundColor: "darkblue",
    borderRadius: 10,
  },
});

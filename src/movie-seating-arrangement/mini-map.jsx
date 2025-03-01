import React, { useRef, useState } from "react";
import { View, ScrollView, StyleSheet, Dimensions } from "react-native";

const SCREEN_WIDTH = Dimensions.get("window").width;
const MINIMAP_WIDTH = 100; // Mini-map fixed width
const SEAT_LAYOUT_WIDTH = 800; // Assume full seat layout width

const SeatSelectionScreen = () => {
  const scrollViewRef = useRef(null);
  const [scrollX, setScrollX] = useState(0);

  const handleScroll = (event) => {
    const offsetX = event.nativeEvent.contentOffset.x;
    setScrollX(offsetX);
  };

  // Calculate mini-map red box position
  const miniMapPosition =
    (scrollX / (SEAT_LAYOUT_WIDTH - SCREEN_WIDTH)) * (MINIMAP_WIDTH - 20);

  return (
    <View style={styles.container}>
      {/* Main Seat Layout */}
      <ScrollView
        ref={scrollViewRef}
        horizontal
        onScroll={handleScroll}
        scrollEventThrottle={16} // Ensures smooth tracking
        showsHorizontalScrollIndicator={false}
      >
        <View style={styles.seatLayout}>
          {/* Simulated seat blocks */}
          {[...Array(10)].map((_, row) => (
            <View key={row} style={styles.row}>
              {[...Array(15)].map((_, col) => (
                <View key={col} style={styles.seat} />
              ))}
            </View>
          ))}
        </View>
      </ScrollView>

      {/* Mini-Map (Fixed on Screen) */}
      <View style={styles.miniMap}>
        <View style={[styles.miniMapBox, { left: miniMapPosition }]} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: "#f5f5f5", marginTop: 35 },
  seatLayout: {
    width: SEAT_LAYOUT_WIDTH,
    flexDirection: "column",
    padding: 10,
  },
  row: { flexDirection: "row", marginVertical: 2 },
  seat: {
    width: 40,
    height: 40,
    margin: 2,
    backgroundColor: "#ddd",
    borderRadius: 5,
  },
  miniMap: {
    position: "absolute",
    top: 10,
    left: 10,
    width: MINIMAP_WIDTH,
    height: 50,
    backgroundColor: "#ccc",
    borderRadius: 5,
    overflow: "hidden",
  },
  miniMapBox: {
    position: "absolute",
    top: 5,
    width: 20,
    height: 40,
    borderColor: "red",
    borderWidth: 1,
    borderRadius: 5,
  },
});

export default SeatSelectionScreen;

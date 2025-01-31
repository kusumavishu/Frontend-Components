import React, { useRef, useState } from "react";
import {
  Canvas,
  Group,
  Image,
  Mask,
  Path,
  Rect,
  Skia,
} from "@shopify/react-native-skia";
import { View, StyleSheet } from "react-native";
import LottieView from "lottie-react-native";

const ScratchCard = ({ style, children, image }) => {
  const [[width, height], setSize] = useState([0, 0]);
  const [isScratched, setScratched] = useState(false);

  const [scratchedPoints, setScratchedPoints] = useState(new Set());
  const [path, setPath] = useState(Skia.Path.Make());

  const totalPoints = 200; // Adjust based on testing
  const animationRef = useRef(null);

  const handleTouchMove = ({ nativeEvent }) => {
    if (isScratched) return;

    const x = Math.floor(nativeEvent.locationX / 5) * 5;
    const y = Math.floor(nativeEvent.locationY / 5) * 5;

    setScratchedPoints((prevPoints) => {
      const newPoints = new Set(prevPoints);
      newPoints.add(`${x},${y}`);
      // console.log(newPoints.size);

      if (newPoints.size >= totalPoints) {
        setScratched(true);
        animationRef.current?.play(0, 80);
      }
      return newPoints;
    });

    // Update Path
    setPath((prevPath) => {
      const newPath = prevPath.copy();
      newPath.lineTo(nativeEvent.locationX, nativeEvent.locationY);
      return newPath;
    });
  };

  return (
    <View
      onLayout={(e) =>
        setSize([e.nativeEvent.layout.width, e.nativeEvent.layout.height])
      }
      style={[styles.container, style]}
    >
      {Boolean(image && width && height) && (
        <>
          {isScratched && <View style={styles.content}>{children}</View>}
          {isScratched && (
            <LottieView
              ref={animationRef}
              source={require("./PartyBlast.json")}
              autoPlay
              loop
              style={{ width: 300, height: 300 }}
            />
          )}
          <Canvas
            style={styles.canvas}
            onTouchStart={({ nativeEvent }) => {
              setPath((prevPath) => {
                const newPath = prevPath.copy();
                newPath.moveTo(nativeEvent.locationX, nativeEvent.locationY);
                return newPath;
              });
            }}
            onTouchMove={handleTouchMove}
          >
            <Mask
              mode="luminance"
              mask={
                <Group>
                  <Rect
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                    color="white"
                  />
                  <Path
                    path={path}
                    color="black"
                    style="stroke"
                    strokeJoin="round"
                    strokeCap="round"
                    strokeWidth={35}
                  />
                </Group>
              }
            >
              {!isScratched && (
                <>
                  <Image
                    image={image}
                    fit="cover"
                    x={0}
                    y={0}
                    width={width}
                    height={height}
                  />
                </>
              )}
            </Mask>
          </Canvas>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: "relative",
    width: 300,
    height: 300,
    overflow: "hidden",
  },
  content: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
  canvas: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },
});

export default ScratchCard;

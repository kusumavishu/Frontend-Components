import React, { useRef, useState } from "react";
import {
  Animated,
  Dimensions,
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

const { width } = Dimensions.get("window");
const headerHeight = 320;
const headerFinalHeight = 100;
const imageSize = (headerHeight / 3) * 2;

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

export default function ScrollViewAnimatedHeader() {
  const scrollY = useRef(new Animated.Value(0)).current;

  const [textWidth, setTextWidth] = useState(0);

  const offset = headerHeight - headerFinalHeight; //220

  const translateHeader = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, -offset],
    extrapolate: "clamp",
  });

  const translateImageY = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [0, offset / 2],
    extrapolate: "clamp",
  });

  const translateImageX = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [
      0,
      -(width / 2) + (imageSize * headerFinalHeight) / headerHeight,
    ],
    extrapolate: "clamp",
  });

  const scaleImage = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, headerFinalHeight / headerHeight],
    extrapolate: "clamp",
  });

  const translateName = scrollY.interpolate({
    inputRange: [0, offset * 1.2],
    outputRange: [0, (-width / 2 + textWidth / 2 + headerFinalHeight) * 0.9],
    extrapolate: "clamp",
  });
  const translateNameY = scrollY.interpolate({
    inputRange: [0, 10],
    outputRange: [0, -10],
    extrapolate: "clamp",
  });

  const scaleName = scrollY.interpolate({
    inputRange: [0, offset],
    outputRange: [1, 0.8],
    extrapolate: "clamp",
  });

  const animatedButtonStyle = scrollY.interpolate({
    inputRange: [0, offset], // Start at 0 and hide when scrollY.value reaches offset
    outputRange: [1, 0], // Fully visible at the top, hidden when at offset
    extrapolate: "clamp",
  });

  return (
    <View style={styles.container}>
      <ScrollView
        contentContainerStyle={styles.scrollContainer}
        showsVerticalScrollIndicator={false}
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { y: scrollY } } }],
          { useNativeDriver: false }
        )}
      >
        {ProfilesDetails.map((item, index) => (
          <TouchableOpacity
            className="my-1"
            key={index}
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
                <Text>x</Text>
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <Animated.View
        pointerEvents="auto"
        style={[
          styles.header,
          { transform: [{ translateY: translateHeader }] },
        ]}
      >
        <Animated.View
          style={[
            styles.image,
            {
              transform: [
                { translateY: translateImageY },
                { translateX: translateImageX },
                { scale: scaleImage },
              ],
            },
          ]}
          pointerEvents="auto"
        >
          <Image
            source={{
              uri: "https://i.ibb.co/YySxPQC/pro.jpeg",
            }}
            style={styles.img}
            resizeMode="cover"
          />

          <Animated.View
            style={[
              {
                opacity: animatedButtonStyle,
              },
            ]}
            pointerEvents="box-none"
          >
            {/* This wrapper is for animating, but Pressable should be clickable outside */}
            <TouchableOpacity
              onPress={() => console.log("clicked the icon")}
              hitSlop={{ top: 10, bottom: 30, left: 10, right: 10 }} // Expands touch area
              style={{
                position: "absolute",
                bottom: 25,
                right: 25,
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

        <Animated.Text
          onTextLayout={(e) => setTextWidth(e.nativeEvent.lines[0].width)}
          style={[
            styles.name,
            {
              transform: [
                { translateX: translateName },
                { scale: scaleName },
                { translateY: translateNameY },
              ],
            },
          ]}
        >
          ASWIN
        </Animated.Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 50,
  },
  item: {
    height: 100,
    marginBottom: 5,
    // backgroundColor: "grey",
    marginHorizontal: 10,
  },
  header: {
    height: headerHeight,
    backgroundColor: "#f2f2f2",
    position: "absolute",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  scrollContainer: {
    // height: 500,
    paddingTop: headerHeight + 15,
    paddingBottom: 40,
  },
  image: {
    height: imageSize,
    width: imageSize,
    borderRadius: headerHeight,
    backgroundColor: "#fff",
    overflow: "hidden",
  },
  img: {
    height: "100%",
    width: "100%",
  },
  name: {
    fontSize: 30,
    color: "#000",
    position: "absolute",
    bottom: -13,
    height: headerFinalHeight,
    textAlignVertical: "center",
    letterSpacing: 2,
  },
});

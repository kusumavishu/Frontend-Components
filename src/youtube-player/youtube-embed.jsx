import * as ScreenOrientation from "expo-screen-orientation";
import React, { useEffect, useRef } from "react";

import { View, StyleSheet, BackHandler } from "react-native";
import { WebView } from "react-native-webview";
import { StatusBar } from "expo-status-bar";
import { useNavigation } from "@react-navigation/native";

const YouTubePlayer = ({
  url = "https://youtu.be/5m9sYqJNoWk?si=_EK3Z9zvvkdLj2pg",
}) => {
  const webViewRef = useRef(null);
  const navigation = useNavigation();

  useEffect(() => {
    const lockOrientation = async () => {
      await ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
      );
    };
    lockOrientation();

    // Handle back press to return to portrait mode
    const backAction = () => {
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
      navigation.goBack();
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      backAction
    );

    return () => {
      backHandler.remove();
      ScreenOrientation.lockAsync(
        ScreenOrientation.OrientationLock.PORTRAIT_UP
      );
    };
  }, []);

  // useEffect(() => {
  //   console.log("webViewRef", webViewRef);
  // }, []);

  return (
    <View style={styles.container}>
      {/* YouTube WebView */}
      <StatusBar hidden />

      <WebView
        ref={webViewRef}
        source={{
          uri: `https://www.youtube.com/embed/${getYouTubeVideoID(
            url
          )}?autoplay=1&fs=0&rel=0&controls=1&start=0`,
        }}
        allowsFullscreenVideo
        javaScriptEnabled
        domStorageEnabled
        injectedJavaScript={`
          setTimeout(() => {
            let ccButton = document.querySelector('.ytp-subtitles-button');
            if (ccButton && ccButton.getAttribute('aria-pressed') === 'true') {
              ccButton.click();
            }
          }, 2000); 
        `}
        style={styles.webview}
      />
    </View>
  );
};

export default YouTubePlayer;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
    position: "relative",
  },
  webview: {
    flex: 1,
  },
});

function getYouTubeVideoID(url) {
  const regex =
    /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/;
  const match = url.match(regex);
  return match ? match[1] : null;
}

import React, { useState, useCallback, useRef } from "react";
import { Button, View, Alert } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";

export default function YoutubeComponent() {
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <View style={{ marginTop: 45 }}>
      <YoutubePlayer
        height={300}
        play={playing}
        videoId={"iee2TATGMyI"} //video id
        onChangeState={onStateChange}
      />
      <Button title={playing ? "pause" : "play"} onPress={togglePlaying} />
    </View>
  );
}

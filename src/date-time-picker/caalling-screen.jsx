import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import PrimaryDateTimePicker from "./date-timme";

const CallingScreen = () => {
  const [selectedDateTime1, setSelectedDateTime1] = useState(null);
  return (
    <View className="flex-1 justify-center items-center w-[90%] mx-auto">
      <View className="w-full">
        <PrimaryDateTimePicker
          label="Pick a Time"
          value={selectedDateTime1}
          onChangeText={(text) => {
            console.log(text);
            setSelectedDateTime1(selectedDateTime1);
          }}
          error=""
          star={true}
        />
      </View>
    </View>
  );
};

export default CallingScreen;

const styles = StyleSheet.create({});

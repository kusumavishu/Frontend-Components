import { StyleSheet, Text, TextInput, View } from "react-native";
import React, { useRef, useState } from "react";

const OtpEntryArray = () => {
  const inputs = useRef([]);
  const [values, setValues] = useState(Array(10).fill(""));

  const handleChangeText = (text, index) => {
    const newValues = [...values];
    newValues[index] = text; // Update the value in the array
    setValues(newValues);

    if (text.length === 1 && index < 9) {
      inputs.current[index + 1].focus();
    } else if ((text.length === 0 || text === "") && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const handleKeyPress = ({ nativeEvent: { key } }, index) => {
    if (key === "Backspace" && index > 0) {
      const newValues = [...values];
      newValues[index] = "";
      setValues(newValues);
      inputs.current[index - 1].focus();
    }
  };

  return (
    <View className="flex justify-center items-center" style={{ flex: 1 }}>
      <Text>Entry OTP</Text>
      <View className="flex flex-row w-[90%] justify-center items-center gap-x-4 mx-auto ">
        {Array(10)
          .fill()
          .map((_, index) => (
            <TextInput
              ref={(ref) => (inputs.current[index] = ref)}
              key={index} // Ensure each input has a unique key
              maxLength={1}
              value={values[index]}
              className={`border-b-2 flex-1 justify-center items-center text-center ${
                false && "border-red-600"
              }`}
              onChangeText={(text) => handleChangeText(text, index)}
              onKeyPress={(event) => handleKeyPress(event, index)}
            />
          ))}
      </View>
    </View>
  );
};

export default OtpEntryArray;

const styles = StyleSheet.create({});

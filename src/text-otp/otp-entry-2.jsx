import React, { useRef, useState } from "react";
import { Platform, StyleSheet, Text, TextInput, View } from "react-native";

const OtpEntry2 = ({
  length = 6,
  onChange,
  onFilled,
  pinCodeTextStyle,
  focusColor,
  pinCodeContainerStyle,
  focusedPinCodeContainerStyle,
}) => {
  const [otp, setOtp] = useState(Array(length).fill(""));
  const [focusedIndex, setFocusedIndex] = useState(null);
  const inputs = useRef([]);

  const handleChange = (text, index) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = text.slice(-1);
    setOtp(updatedOtp);

    // Trigger onTextChange callback
    if (onChange) {
      onChange(updatedOtp.join(""));
    }

    // Automatically move to the next input if available
    if (text && index < length - 1) {
      inputs.current[index + 1]?.focus();
      //   setTimeout(() => {
      //     inputs.current[index + 1]?.focus(); // Focus next input after a short delay
      //   }, 0);
    }
    if (updatedOtp.every((digit) => digit !== "")) {
      onFilled && onFilled(updatedOtp.join(""));
    }
    console.log("focusedIndex === index", focusedIndex, index);
  };

  const handleKeyPress = (e, index) => {
    if (e.nativeEvent.key === "Backspace" && index > 0 && otp[index] === "") {
      inputs.current[index - 1]?.focus(); // Move to the previous input
    }
  };

  return (
    <View className="flex-row justify-center items-center" style={{ flex: 1 }}>
      {Array(length)
        .fill(0)
        .map((_, index) => (
          <View
            key={index}
            className={`w-[42px] h-[50px] border-[1px] rounded border-[#ccc] m-[6px] ${pinCodeContainerStyle} ${
              focusedIndex === index ? focusedPinCodeContainerStyle : ""
            } }`}
          >
            <TextInput
              key={index}
              ref={(input) => (inputs.current[index] = input)}
              keyboardType="numeric"
              maxLength={1}
              onFocus={() => setFocusedIndex(index)}
              onBlur={() => setFocusedIndex(null)}
              onChangeText={(text) => handleChange(text, index)}
              onKeyPress={(e) => handleKeyPress(e, index)}
              value={otp[index]}
              className={`w-full h-full text-center text-[#505050] rounded text-base ${pinCodeTextStyle} ${
                focusedIndex === index && { focusColor }
              }`}
              autoComplete={
                Platform.OS === "android" ? "sms-otp" : "one-time-code"
              }
              textContentType="oneTimeCode"
            />
          </View>
        ))}
    </View>
  );
};

export default OtpEntry2;

const styles = StyleSheet.create({
  //   container: {
  //     flexDirection: "row",
  //     justifyContent: "center",
  //     alignItems: "center",
  //   },
  //   input: {
  //     width: 40,
  //     height: 50,
  //     margin: 5,
  //     textAlign: "center",
  //     borderWidth: 1,
  //     borderColor: "#ccc",
  //     borderRadius: 5,
  //     fontSize: 18,
  //   },
});

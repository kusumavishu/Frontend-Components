import React, { forwardRef } from "react";
import {
  StyleSheet,
  Platform,
  Text,
  TextInput,
  View,
  TouchableOpacity,
} from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";
import Ionicons from "@expo/vector-icons/Ionicons";

const PrimaryInput = forwardRef(
  (
    {
      label,
      placeholder,
      placeholderTextColor,
      value,
      onChangeText,
      onBlur,
      onFocus,
      keyboardType = "default",
      // setIsFocus,
      maxLength,
      star,
      inputMode,
      readOnly = false,
      error,
      autoCapitalize = "none",
      extrastyles,
      isSecure,
      passwordIcons,
      onPressIcon,
      leftIcon,
      TextInputStyle,
      InputBoxStyles,
      onKeyPress,
      selectTextOnFocus,
      contextMenuHidden,
      ...props
    },
    ref
  ) => {
    return (
      <View className={`my-[5px] ${extrastyles}`}>
        <Text
          className={`font-Inter font-normal mb-[6px] text-formText
         ${Platform.OS === "android" ? "text-[16px]" : "text-[16px]"}`}
        >
          {label} {star && <Text className="text-red-400 text-[17px]">*</Text>}
        </Text>
        <View
          className={`flex-row items-center border-[1px] focus:border-black rounded-[5px] ${InputBoxStyles} ${
            error ? "border-[#ff3838]" : "border-formText"
          }`}
        >
          {leftIcon && <View className="ml-2">{leftIcon}</View>}
          <TextInput
            ref={ref}
            className={`px-[6px] font-montmedium leading-[18px] no-underline w-[92%]  ${
              Platform.OS === "android"
                ? "text-[15px] py-[6px]"
                : "text-[16px] py-[10px]"
            } ${TextInputStyle}`}
            placeholder={placeholder}
            placeholderTextColor={placeholderTextColor}
            value={value}
            onChangeText={onChangeText}
            onBlur={onBlur}
            keyboardType={keyboardType}
            maxLength={maxLength}
            inputMode={inputMode}
            autoCapitalize={autoCapitalize}
            readOnly={readOnly}
            onFocus={onFocus}
            secureTextEntry={isSecure}
            onKeyPress={onKeyPress}
            contextMenuHidden={contextMenuHidden} //false-->can copy, cut, and paste. true-->can't
            selectTextOnFocus={selectTextOnFocus} //true-->Text gets selected when input is focused. false-> can't
            {...props}

            // onBlur={setIsFocus ? () => setIsFocus(true) : onBlur}
            // onFocus={setIsFocus ? () => setIsFocus(true) : ""}
            // onSubmitEditing={setIsFocus ? () => setIsFocus(true) : ""} //allows you to define an action when the user finishes typing and presses "Enter" or "Done."
          />
          {passwordIcons && (
            <TouchableOpacity onPress={onPressIcon}>
              {isSecure ? (
                <Ionicons
                  name="eye-off"
                  size={21}
                  color={error ? "red" : "black"}
                />
              ) : (
                <FontAwesome5
                  name="eye"
                  size={17}
                  color={error ? "red" : "black"}
                />
              )}
            </TouchableOpacity>
          )}
        </View>

        <View className="h-[15px]">
          {error && <Text className="text-red-600 text-[13px]">{error}</Text>}
        </View>
      </View>
    );
  }
);

export default PrimaryInput;

const styles = StyleSheet.create({});

import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import useCustomToast from "./useCustomToast";
import AntDesign from "@expo/vector-icons/AntDesign";
import { Ionicons } from "@expo/vector-icons";

const ToastNotify = () => {
  const { showToast } = useCustomToast();

  return (
    <View className="mt-9">
      <View className="my-1 w-[80%] mx-auto">
        <TouchableOpacity
          onPress={() => {
            showToast("Your Account Deleted successfully", {
              type: "success",
              colors: "#4da6ff",
              animationType: "zoom-in",
              icons: <AntDesign name="notification" size={24} color="black" />,
            });
          }}
          className="border-[0.2px] border-black py-[6px] rounded"
        >
          <Text className="text-center">show toast on the top</Text>
        </TouchableOpacity>
      </View>

      <View className="my-1 w-[80%] mx-auto">
        <TouchableOpacity
          onPress={() => {
            showToast("Your Account Deleted successfully", {
              type: "success",
              colors: "#4da6ff",
              animationType: "zoom-in",
              icons: <AntDesign name="notification" size={24} color="black" />,
              placement: "bottom",
            });
          }}
          className="border-[0.2px] border-black py-[6px] rounded"
        >
          <Text className="text-center">show toast on the bottom</Text>
        </TouchableOpacity>
      </View>
      <View className="my-1 w-[80%] mx-auto">
        <TouchableOpacity
          onPress={() => {
            showToast("Your Account Deleted successfully", {
              type: "success",
            });
          }}
          className="border-[0.2px] border-black py-[6px] rounded"
        >
          <Text className="text-center">show toast on the default success</Text>
        </TouchableOpacity>
      </View>
      <View className="my-1 w-[80%] mx-auto">
        <TouchableOpacity
          onPress={() => {
            showToast("Your Account Deleted successfully", {
              type: "warning",
              animationType: "zoom-in",
              icons: (
                <Ionicons name="notifications-circle" size={24} color="black" />
              ),
            });
          }}
          className="border-[0.2px] border-black py-[6px] rounded"
        >
          <Text className="text-center">show toast on the default success</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ToastNotify;

const styles = StyleSheet.create({});

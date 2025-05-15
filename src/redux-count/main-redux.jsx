import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  DecBy1,
  DecBy2,
  DecBy5,
  IncBy1,
  IncBy2,
  IncBy5,
} from "./redux/action/count-action";

const MainRedux = () => {
  const count = useSelector((state) => state.count.value);
  const dispatch = useDispatch();

  return (
    <View className="flex-1 justify-center items-center">
      <View className="my-1 flex-row justify-evenly mb-5 items-center w-[80%]">
        <TouchableOpacity
          onPress={() => dispatch(IncBy2(count))}
          className="border-[0.2px] border-black py-[6px] rounded px-5"
        >
          <Text className="text-center">+2</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => dispatch(DecBy2(count))}
          className="border-[0.2px] border-black py-[6px] rounded px-5"
        >
          <Text className="text-center">-2</Text>
        </TouchableOpacity>
      </View>
      <View className="my-1 flex-row justify-between items-center w-[80%]">
        <TouchableOpacity
          onPress={() => dispatch(IncBy1(count))}
          className="border-[0.2px] border-black py-[6px] rounded px-5"
        >
          <Text className="text-center">+</Text>
        </TouchableOpacity>
        <View className="border-[#000] border-[1px] px-6 py-3 rounded-lg">
          <Text className="text-[16px]">count : {count}</Text>
        </View>
        <TouchableOpacity
          onPress={() => dispatch(DecBy1(count))}
          className="border-[0.2px] border-black py-[6px] rounded px-5"
        >
          <Text className="text-center">-</Text>
        </TouchableOpacity>
      </View>
      <View className="my-1 flex-row justify-evenly mt-5 items-center w-[80%]">
        <TouchableOpacity
          onPress={() => dispatch(IncBy5(count))}
          className="border-[0.2px] border-black py-[6px] rounded px-5"
        >
          <Text className="text-center">+5</Text>
        </TouchableOpacity>

        <TouchableOpacity
          onPress={() => dispatch(DecBy5(count))}
          className="border-[0.2px] border-black py-[6px] rounded px-5"
        >
          <Text className="text-center">-5</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MainRedux;

const styles = StyleSheet.create({});

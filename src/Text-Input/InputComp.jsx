import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { formSchema } from "./schema"; // Your Zod schema
import PrimaryInput from "./PrimaryInput";

const InputComp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      secondName: "",
      thirdName: "",
      fourName: "",
      fiveName: "",
      sixName: "",
      userName: "",
      maniName: "",
      rohithName: "",
    },
  });

  const onSubmit = (data) => {
    console.log("Form Submitted:", data);
  };

  return (
    <ScrollView className="flex-1 bg-white" style={{ paddingBottom: 100 }}>
      <View className="w-[80%] mx-auto my-10">
        {/* First Name Field */}
        <Controller
          name="firstName"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <PrimaryInput
              ref={ref}
              label={"Label"}
              placeholder={"Enter Your Mobile Number"}
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => {
                console.log("First Name:", ref);
                onChange(text);
              }}
              error={errors.firstName?.message}
            />
          )}
        />
        <Controller
          name="secondName"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <PrimaryInput
              ref={ref}
              label={"secondName"}
              placeholder={"Enter Your Mobile Number"}
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => {
                if (text.slice(-1).toLowerCase() === "k") return;
                onChange(text);
              }}
              error={errors.secondName?.message}
            />
          )}
        />
        <Controller
          name="thirdName"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <PrimaryInput
              ref={ref}
              label={"Label"}
              placeholder={"Enter Your Mobile Number"}
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => {
                onChange(text);
              }}
              error={errors.thirdName?.message}
            />
          )}
        />
        <Controller
          name="fourName"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <PrimaryInput
              ref={ref}
              label={"Label"}
              placeholder={"Enter Your Mobile Number"}
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => {
                onChange(text);
              }}
              error={errors.fourName?.message}
            />
          )}
        />
        <Controller
          name="fiveName"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <PrimaryInput
              ref={ref}
              label={"Label"}
              placeholder={"Enter Your Mobile Number"}
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => {
                onChange(text);
              }}
              error={errors.fiveName?.message}
            />
          )}
        />
        <Controller
          name="sixName"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <PrimaryInput
              ref={ref}
              label={"Label"}
              placeholder={"Enter Your Mobile Number"}
              value={value}
              onBlur={onBlur}
              onChangeText={(text) => {
                onChange(text);
              }}
              error={errors.sixName?.message}
            />
          )}
        />
        {/* Last Name Field */}
        <Controller
          name="lastName"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <PrimaryInput
              ref={ref}
              label={"Label"}
              placeholder={"Enter Your Mobile Number"}
              value={value}
              onBlur={onBlur}
              onChangeText={onChange}
              error={errors.lastName?.message}
            />
          )}
        />

        <Controller
          name="userName"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <PrimaryInput
              ref={ref}
              label={"Label"}
              placeholder={"Enter Your Mobile Number"}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.userName?.message}
            />
          )}
        />
        <Controller
          name="maniName"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <PrimaryInput
              ref={ref}
              label={"Label"}
              placeholder={"Enter Your Mobile Number"}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.maniName?.message}
            />
          )}
        />
        <Controller
          name="rohithName"
          control={control}
          render={({ field: { onChange, onBlur, value, ref } }) => (
            <PrimaryInput
              ref={ref}
              label={"Label"}
              placeholder={"Enter Your Mobile Number"}
              value={value}
              onChangeText={onChange}
              onBlur={onBlur}
              error={errors.rohithName?.message}
            />
          )}
        />

        {/* Submit Button */}
        <Button title="Submit" onPress={handleSubmit(onSubmit)} />
      </View>
    </ScrollView>
  );
};

export default InputComp;

const styles = StyleSheet.create({});

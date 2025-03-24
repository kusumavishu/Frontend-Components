import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import PriceRangeSelector from "./price-range-slider/input-range";

//Tab Bar imports
import HomeScreen from "./tabs-comp/home";
import Explore from "./tabs-comp/explore";
import Create from "./tabs-comp/create";
import Profile from "./tabs-comp/profile";
import TabBar from "./tabs-comp/custom-tab-component/TabBar";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const Welcome = () => {
  const navigation = useNavigation();
  return (
    <View className="flex justify-center items-center" style={{ flex: 1 }}>
      <Text className="text-[16px] my-2">Welcome to My world</Text>
      <Button
        title="let explore more ..."
        onPress={() => {
          navigation.navigate("MyTabs");
        }}
      />
    </View>
  );
};

const CustomHeader = () => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          padding: 20,
          backgroundColor: "lightblue",
        }}
      >
        <Text>Custom Header</Text>
        <Text>X</Text>
      </View>
    </>
  );
};

function MyTabs() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: true,
        header: () => <CustomHeader />, // Custom header
      }}
      tabBar={(props) => <TabBar {...props} />} // Custom TabBar
    >
      <Tab.Screen name="Home" component={HomeScreen} />
      <Tab.Screen name="Explore" component={Explore} />
      <Tab.Screen name="Create" component={Create} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}

const AllComponents = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Kusuma Vishwesh" component={Welcome} />
        <Stack.Screen name="MyTabs" component={MyTabs} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AllComponents;

const styles = StyleSheet.create({});

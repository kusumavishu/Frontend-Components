import * as React from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import { NavigationContainer, useNavigation } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

//Tab Bar imports
import HomeScreen from "./tabs-comp/home";
import Explore from "./tabs-comp/explore";
import Create from "./tabs-comp/create";
import Profile from "./tabs-comp/profile";
import TabBar from "./tabs-comp/custom-tab-component/TabBar";

import AllStack from "./all-stack";

import PriceRangeSelector from "./price-range-slider/input-range";
import YoutubeComponent from "./youtube-player/youtube-component";
import YouTubePlayer from "./youtube-player/youtube-embed";
import ScratchCardComp from "./scratchcard-component/scratch-card-comp";
import AnimatedTileScrolling from "./animation-image-scrolling/image-scrolling";
import SplashAnimation from "./animation-splash-display/splash-animation";
import ScrollViewAnimatedHeader from "./header-animation-comp/scrolling-animation";
import HeaderFlastlist from "./header-animation-comp/scrolling-flastlist";
import MoviesSeating from "./movie-seating-arrangement/seating-booking";
import SeatSelectionScreen from "./movie-seating-arrangement/mini-map";
import ToastNotify from "./custom-toast/toast-notify";
import PrivacyPolicy from "./youtube-player/AllonsZ";
import CallingScreen from "./date-time-picker/caalling-screen";
import NativeMaps from "./react-native-maps/native-maps";
import OtpEntryArray from "./text-otp/otp-entry-array";
import OtpEntry2 from "./text-otp/otp-entry-2";
import InputComp from "./Text-Input/InputComp";
import SeatArrangements from "./movie-seating-arrangement/seat-arrangements";

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
          navigation.navigate("All Stacks");
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

//custom-tab-components
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
        <Stack.Screen
          name="All Stacks"
          component={AllStack}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Text-Input"
          component={InputComp}
          options={{ headerShown: true }}
        />
        <Stack.Screen name="MyTabs" component={MyTabs} />
        <Stack.Screen name="YoutubeComponent" component={YoutubeComponent} />
        <Stack.Screen
          name="YouTubePlayer"
          component={YouTubePlayer}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="ScratchCardComp" component={ScratchCardComp} />
        <Stack.Screen
          name="PriceRangeSelector"
          component={PriceRangeSelector}
        />
        <Stack.Screen
          name="AnimatedTileScrolling"
          component={AnimatedTileScrolling}
        />
        <Stack.Screen name="SplashAnimation" component={SplashAnimation} />
        <Stack.Screen
          name="ScrollViewAnimatedHeader"
          component={ScrollViewAnimatedHeader}
        />
        <Stack.Screen name="HeaderFlastlist" component={HeaderFlastlist} />
        <Stack.Screen name="MoviesSeating" component={MoviesSeating} />
        <Stack.Screen name="SeatArrangements" component={SeatArrangements} />
        <Stack.Screen
          name="SeatSelectionScreen"
          component={SeatSelectionScreen}
        />
        <Stack.Screen name="ToastNotify" component={ToastNotify} />
        <Stack.Screen
          name="AllonsZ"
          component={PrivacyPolicy}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="CallingScreen"
          component={CallingScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NativeMaps"
          component={NativeMaps}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTPEntryArray"
          component={OtpEntryArray}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="OTPEntry2"
          component={OtpEntry2}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AllComponents;

const styles = StyleSheet.create({});

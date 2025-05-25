import React from "react";
import {
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

function ButtonCom({ title, result }) {
  const navigation = useNavigation();
  return (
    <View className="my-1 w-[80%]">
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(result);
        }}
        className="border-[0.2px] border-black py-[6px] rounded"
      >
        <Text className="text-center">{title}</Text>
      </TouchableOpacity>
    </View>
  );
}

function HeaderTitle({ HeaderTitle }) {
  return (
    <Text className="underline text-[18px] italic py-1">{HeaderTitle}</Text>
  );
}

const AllStack = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-green-100">
      <View className="mt-10">
        <ScrollView
          contentContainerStyle={{
            flexGrow: 1,
            paddingBottom: 35,
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <HeaderTitle HeaderTitle="Tab Bar component" />
          {/*  */}
          <ButtonCom title="Custom TabBar" result="MyTabs" />
          {/*  */}
          <HeaderTitle HeaderTitle="react-hook-form & @hookform/resolvers yup" />
          <ButtonCom title="Text Input 01" result="Text-Input" />

          <HeaderTitle HeaderTitle="YouTube Player component" />
          {/*  */}
          <ButtonCom title="YouTube with iFrame" result="YoutubeComponent" />
          <ButtonCom title="YouTube with WebView" result="YouTubePlayer" />
          {/*  */}
          <HeaderTitle HeaderTitle="Skia components & Reanimation" />

          <ButtonCom title="Scratch Card with Skia" result="ScratchCardComp" />
          <ButtonCom
            title="Price Range Selector Card"
            result="PriceRangeSelector"
          />
          <ButtonCom
            title="Animated Tile Scrolling"
            result="AnimatedTileScrolling"
          />
          <ButtonCom title="Splash Animation" result="SplashAnimation" />
          {/*  */}
          <HeaderTitle HeaderTitle="header components & Reanimation" />
          <ButtonCom
            title="Animated Header with ScrollView"
            result="ScrollViewAnimatedHeader"
          />
          <ButtonCom
            title="Animated Header with Flastlist"
            result="HeaderFlastlist"
          />
          <HeaderTitle HeaderTitle="gesture-handler & movie Booking" />
          <ButtonCom title="Movies Seating" result="MoviesSeating" />
          <ButtonCom
            title="Movies tickets Layout"
            result="SeatSelectionScreen"
          />
          <ButtonCom title="SeatArrangements" result="SeatArrangements" />
          {/*  */}
          <HeaderTitle HeaderTitle="Custom Toast Notification" />
          <ButtonCom title="Toast Notification" result="ToastNotify" />

          <HeaderTitle HeaderTitle="Date and Time Picker" />
          {/* <ButtonCom title="AllonsZ" result="AllonsZ" /> */}
          <ButtonCom title="CallingScreen" result="CallingScreen" />

          <HeaderTitle HeaderTitle="React Native Maps modules" />
          <ButtonCom title="Native Maps" result="NativeMaps" />
          {/*  */}
          <HeaderTitle HeaderTitle="OTP entry with TextInput" />
          <ButtonCom title="OTP Entry Array" result="OTPEntryArray" />
          <ButtonCom title="2nd OTP Entry" result="OTPEntry2" />
          {/*  */}
          <HeaderTitle HeaderTitle="Redux Implementation" />
          <ButtonCom title="Redux" result="MainRedux" />
          {/*  */}
          <HeaderTitle HeaderTitle="Single Tap Loing with FireBase" />
          <ButtonCom title="AuthLoginFirebase" result="AuthLoginFirebase" />
          <ButtonCom title="SigninWithGoogle" result="SigninWithGoogle" />
          <ButtonCom title="SigninWithFBSDK" result="SigninWithFBSDK" />

          <HeaderTitle HeaderTitle="Google Ads" />
          <ButtonCom title="GoogleAdsMob" result="GoogleAdsMob" />
        </ScrollView>
      </View>
    </View>
  );
};

export default AllStack;

const styles = StyleSheet.create({});

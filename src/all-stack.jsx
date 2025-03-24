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
      <ScrollView
        contentContainerStyle={{
          flexGrow: 1,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <HeaderTitle HeaderTitle="Tab Bar component" />
        {/*  */}
        <ButtonCom title="Custom TabBar" result="MyTabs" />
        {/*  */}
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
        <ButtonCom title="Movies tickets Layout" result="SeatSelectionScreen" />
      </ScrollView>
    </View>
  );
};

export default AllStack;

const styles = StyleSheet.create({});

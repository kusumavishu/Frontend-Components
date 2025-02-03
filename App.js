import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AllComponents from "./src/AllComponents";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <GestureHandlerRootView>
          <AllComponents />
        </GestureHandlerRootView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});

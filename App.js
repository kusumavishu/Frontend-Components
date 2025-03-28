import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AllComponents from "./src/AllComponents";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ToastProvider } from "react-native-toast-notifications";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <GestureHandlerRootView>
          <ToastProvider>
            <AllComponents />
          </ToastProvider>
        </GestureHandlerRootView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});

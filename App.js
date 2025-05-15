import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import AllComponents from "./src/AllComponents";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ToastProvider } from "react-native-toast-notifications";
import { Provider } from "react-redux";
import { Store } from "./src/redux-count/redux/store";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <Provider store={Store}>
          <GestureHandlerRootView>
            <ToastProvider>
              <AllComponents />
            </ToastProvider>
          </GestureHandlerRootView>
        </Provider>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({});

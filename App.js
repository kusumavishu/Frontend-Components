import { StyleSheet, Text, View } from "react-native";
import AllComponents from "./src/AllComponents";

export default function App() {
  return (
    <View>
      <AllComponents />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

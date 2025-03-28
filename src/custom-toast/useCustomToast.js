import { FontAwesome, MaterialIcons } from "@expo/vector-icons";
import { Text, View } from "react-native";
import { useToast } from "react-native-toast-notifications";

//npm i react-native-toast-notifications

let gobalToast = null;

const useCustomToast = () => {
  const toast = useToast();

  gobalToast = (message, options = {}) => {
    const icons = options.icons || {
      success: <MaterialIcons name="check-circle" size={24} color="white" />,
      danger: <MaterialIcons name="dangerous" size={24} color="white" />,
      warning: <FontAwesome name="warning" size={24} color="black" />,
      normal: null, // No icon for normal
    };

    const colors = options.colors || {
      success: "#4CAF50", //green
      danger: "#F44336", //red
      warning: "#FFC107", //orange
      normal: "#b3b3b3",
    };

    toast.hideAll(); // Clear previous toasts

    toast.show(message, {
      type: options.type || "normal", // default to normal & "normal | success | warning | danger ",
      placement: options.placement || "top", //"top | bottom"
      duration: options.duration || 3000,
      animationType: options.animationType || "slide-in", //"slide-in | zoom-in"
      swipeEnabled: true,
      renderToast: ({ message }) => (
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            backgroundColor:
              options.colors || colors[options.type] || colors.normal,
            padding: 10,
            marginTop: options.offsetTop || 30,
            marginBottom: options.offsetBottom || 40,
            borderRadius: 10,
          }}
        >
          {options.icons ||
            (icons[options.type] && (
              <View>{options.icons || icons[options.type]}</View>
            ))}
          <Text
            style={{
              color: "black",
              fontSize: 12,
              marginLeft: 5,
              fontWeight: "400",
            }}
          >
            {message}
          </Text>
        </View>
      ),
    });
  };

  return { showToast: gobalToast };
};

export { gobalToast };
export default useCustomToast;

//how to use
// const { showToast } = useCustomToast();

// showToast("Your Account Deleted successfully", {
//   type: "success",
//   colors: "#4da6ff",
//   animationType: "zoom-in",
//   icons: (
//     <AntDesign name="notification" size={24} color="black" />
//   ),
// });
// showToast("Your Account Deleted successfully", {
//   type: "warning",
// });

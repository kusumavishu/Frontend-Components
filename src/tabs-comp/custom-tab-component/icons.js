import { AntDesign, Feather } from "@expo/vector-icons";

export const icons = {
  Home: (props) => <AntDesign name="home" size={26} {...props} />,
  Explore: (props) => <Feather name="compass" size={26} {...props} />,
  Create: (props) => <AntDesign name="pluscircleo" size={26} {...props} />,
  Profile: (props) => <AntDesign name="user" size={26} {...props} />,
};

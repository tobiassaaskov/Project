import { StatusBar } from "expo-status-bar";
import { Text, View } from "react-native";
import GlobalStyles from "./globalStyles/GlobalStyles";

import DrawerNavigation from "./components/DrawerNavigator";

export default function App() {
  return <DrawerNavigation />;
}

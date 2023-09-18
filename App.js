import { SafeAreaView, StyleSheet, Text, View } from "react-native";
import Splash from "./src/screens/auth/Splash";
import Signup from "./src/screens/auth/Signup";

export default function App() {
  return (
    <SafeAreaView>
      {/* <Splash /> */}
      <Signup />
    </SafeAreaView>
  );
}

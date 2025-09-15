import { StyleSheet, Text, View } from "react-native";
//
import { LinearGradient } from "expo-linear-gradient";
// components
import StartGameScreen from "./screens/StartGameScreen";

export default function App() {
  return (
    <LinearGradient colors={['#4e0329','#ddb52f']} style={styles.rootScreen}>
      <StartGameScreen />
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    // backgroundColor: "#ddb52f",
    flex: 1,
  },
});

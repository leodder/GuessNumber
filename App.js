import { StyleSheet, Text, View, ImageBackground } from "react-native";
//
import { LinearGradient } from "expo-linear-gradient";
// components

// hooks
import { useState } from "react";
// screen
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";

export default function App() {
  const [userNumer, setUserNumber] = useState();
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumer) {
    screen = <GameScreen />;
  }
  return (
    <LinearGradient colors={["#4e0329", "#ddb52f"]} style={styles.rootScreen}>
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {/* <StartGameScreen /> */}
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    // backgroundColor: "#ddb52f",
    flex: 1,
  },
  backgroundImage: {
    opacity: 0.15,
  },
});

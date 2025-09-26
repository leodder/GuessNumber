import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//
import { LinearGradient } from "expo-linear-gradient";
// components

// hooks
import { useState } from "react";
import { useFonts } from "expo-font";
import SplashScreen from 'expo-splash-screen';
// screen
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
// global colors
import Colors from "./constants/colors";

export default function App() {
  const [userNumer, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [fontsLoaded] = useFonts({
    'open-sans': require('./assets/fonts/OpenSans-Regular.ttf'),
    'open-sans-bold': require('./assets/fonts/OpenSans-Bold.ttf'),
  });
  if(!fontsLoaded){
    // return <AppLoading />
    return <SplashScreen />
  };
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  const gameOverHandler = () => {
    setGameIsOver(true);
  };
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumer) {
    screen = <GameScreen userNumber={userNumer} onGameOver={gameOverHandler} />;
  }
  if (gameIsOver && userNumer) {
    screen = <GameOverScreen />;
  }
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
    >
      <ImageBackground
        source={require("./assets/images/dice.jpg")}
        resizeMode="cover"
        style={styles.rootScreen}
        imageStyle={styles.backgroundImage}
      >
        {/* <StartGameScreen /> */}
        {/* <SafeAreaView style={styles.rootScreen}> */}
        {screen}
        {/* </SafeAreaView> */}
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

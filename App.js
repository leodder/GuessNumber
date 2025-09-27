import { StyleSheet, Text, View, ImageBackground } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
//
import { LinearGradient } from "expo-linear-gradient";
// components

// hooks
import { useState, useCallback } from "react";
import { useFonts } from "expo-font";
// import SplashScreen from "expo-splash-screen";
import * as SplashScreen from "expo-splash-screen";
// screen
import StartGameScreen from "./screens/StartGameScreen";
import GameScreen from "./screens/GameScreen";
import GameOverScreen from "./screens/GameOverScreen";
// global colors
import Colors from "./constants/colors";

export default function App() {
  const [userNumber, setUserNumber] = useState();
  const [gameIsOver, setGameIsOver] = useState(true);
  const [guessRound, setGuessRound] = useState(0);
  const [fontsLoaded] = useFonts({
    "open-sans": require("./assets/fonts/OpenSans-Regular.ttf"),
    "open-sans-bold": require("./assets/fonts/OpenSans-Bold.ttf"),
  });
  // if (!fontsLoaded) {
  //   // return <AppLoading />
  //   return <SplashScreen />;
  // }
  // 字體載入完成就手動隱藏 Splash
  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    // 這裡不要回傳任何元件，避免「Element type is invalid」
    return null;
  }
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
    setGameIsOver(false);
  };
  const gameOverHandler = () => {
    setGameIsOver(true);
  };
  const startNewGameHandler = () => {
    setUserNumber(null);
    // setGameIsOver(true);
    setGuessRound(0);
  };
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) {
    screen = (
      <GameScreen userNumber={userNumber} onGameOver={gameOverHandler} />
    );
  }
  if (gameIsOver && userNumber) {
    screen = (
      <GameOverScreen
        roundsNumber={guessRound}
        userNumber={userNumber}
        onStartNewGame={startNewGameHandler}
      />
    );
  }
  return (
    <LinearGradient
      colors={[Colors.primary700, Colors.accent500]}
      style={styles.rootScreen}
      onLayout={onLayoutRootView} // 讓 fontsLoaded 之後能觸發 hideAsync
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

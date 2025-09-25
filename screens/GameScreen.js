// import React from 'react'
import { View, Text, StyleSheet,Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
// component
import Title from "../components/ui/Title";
import NumberContainer from "../components/game/NumberContainer";
// hook
import { useState, useEffect } from "react";
import PrimaryButton from "../components/ui/PrimaryButton";

let minBoundary = 1;
let maxBoundary = 100;
const generateRandomBetween = (min, max, exclude) => {
  const randomNum = Math.floor(Math.random() * (max - min)) + min;
  if (randomNum === exclude) {
    return generateRandomBetween(min, max, exclude);
  } else {
    return randomNum;
  }
};

const GameScreen = ({ userNumber, onGameOver }) => {
  // let minBoundary = 1;
  // let maxBoundary = 100;
  // const generateRandomBetween = (min, max, exclude) => {
  //   const randomNum = Math.floor(Math.random() * (max - min)) + min;
  //   if (randomNum === exclude) {
  //     return generateRandomBetween(min, max, exclude);
  //   } else {
  //     return randomNum;
  //   }
  // };
  const initialGuess = generateRandomBetween(
    // minBoundary,
    1,
    // maxBoundary,
    100,
    userNumber
  );
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  useEffect(()=>{
    if(currentGuess === userNumber){
      onGameOver();
    }
  },[currentGuess, userNumber, onGameOver])
  const nextGuessHnadler = (direction) => {
    // direction => 'lower', 'greater'
    if (
      (direction === "lower" && currentGuess < userNumber) ||
      (direction === "greater" && currentGuess > userNumber)
    ) {
      Alert.alert("Dont't lie!","You know this is wrong...",[{text: 'Sorry!',style: 'cancel'}]);
      return;
    }
    if (direction === "lower") {
      maxBoundary = currentGuess;
      // const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    } else {
      minBoundary = currentGuess + 1;
      // const newRandomNumber = generateRandomBetween(minBoundary, maxBoundary, currentGuess)
    }
    const newRandomNumber = generateRandomBetween(
      minBoundary,
      maxBoundary,
      currentGuess
    );
    setCurrentGuess(newRandomNumber);
  };

  return (
    <View style={styles.screen}>
      <Title>Opponent's Guess</Title>
      {/* Guess */}
      <NumberContainer>{currentGuess}</NumberContainer>
      <View>
        <Text>Higher or Lower</Text>
        <View>
          <PrimaryButton onPress={nextGuessHnadler.bind(this, "lower")}>
            -
          </PrimaryButton>
          <PrimaryButton onPress={nextGuessHnadler.bind(this, "greater")}>
            +
          </PrimaryButton>
        </View>
      </View>
      {/* + - */}
      {/* <View>LOG Rounds</View> */}
    </View>
  );
};

export default GameScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 50,
    // marginHorizontal: 24,
    padding: 16,
  },
});

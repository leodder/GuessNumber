// import React from 'react'
import { View, Text, StyleSheet } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const GameScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Opponent's Guess</Text>
      {/* Guess */}
      <View>
        <Text>Higher or Lower</Text>
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
    padding: 12,
  },
});

import { Text, StyleSheet, View } from "react-native";
const GameOverScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>Game is over!</Text>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    marginTop: 50,
    // marginHorizontal: 24,
    padding: 16,
  },
});

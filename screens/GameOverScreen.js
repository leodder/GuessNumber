import { Text, StyleSheet, View, Image } from "react-native";
import Title from "../components/ui/Title";
import Colors from "../constants/colors";
const GameOverScreen = () => {
  return (
    <View style={styles.screen}>
      <Title>Game is over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>
      <Text>Your phone needed X rounds to guess the number Y</Text>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // marginTop: 60,
    justifyContent: 'center',
    alignItems: 'center',
    // marginHorizontal: 24,
    padding: 24,
  },
  imageContainer: {
    width: 300,
    height: 300,
    borderRadius: 150,
    borderWidth: 3,
    borderColor: Colors.primary800,
    overflow: "hidden",
    margin: 36,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

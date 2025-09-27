import { Text, StyleSheet, View, Image } from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
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
      <Text style={styles.summaryText}>
        Your phone needed {""}
        <Text style={styles.highlight}>X</Text>
        {""} rounds to guess the number {""}
        <Text style={styles.highlight}>Y</Text>.
      </Text>
      <PrimaryButton>Start new game</PrimaryButton>
    </View>
  );
};

export default GameOverScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    // marginTop: 60,
    justifyContent: "center",
    alignItems: "center",
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
  summaryText: {
    fontFamily: "open-sans",
    fontSize: 24,
    textAlign: 'center',
    marginVertical: 24,
  },
  highlight: {
    fontFamily: "open-sans-bold",
    color: Colors.primary500,
  },
});

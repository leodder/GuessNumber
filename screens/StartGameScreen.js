import { StyleSheet, TextInput, View } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput />
      <PrimaryButton>Reset</PrimaryButton>
      <PrimaryButton>Confirm</PrimaryButton>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: '#72063c',
    borderRadius: 8,
    elevation: 4, // android's shadow css
    shadowColor: 'black', // ios's shadow color
    shadowOffset: {width: 0, height: 2}, // how much the shadow should be offset from the original object to which it belongs to the left and the right
    shadowRadius: 6, // control how much the shadow expands
    shadowOpacity: 0.25, // control how transparent a shadow is
  }
})

export default StartGameScreen;

import { StyleSheet, TextInput, View, Alert } from "react-native";
import PrimaryButton from "../components/PrimaryButton";
import { useState } from "react";

const StartGameScreen = () => {
  const [enterdNumber, setEnterdNumber] = useState("");
  const numberInputHandler = (enteredText) => {
    setEnterdNumber(enteredText);
  };
  const resetInputHandler = () => {
    setEnterdNumber("");
  };
  const confirmInputHandler = () => {
    // console.log(enterdNumber);
    // console.log(typeof enterdNumber)
    const chosenNumber = parseInt(enterdNumber);
    // console.log(chosenNumber);
    // console.log(typeof chosenNumber)
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      // alert("Number is not valid, plz enter a valid number🤔")
      Alert.alert("Invalid numer!", "number has to be between 0 and 99 🤔", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);

      return;
    }
  };
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
        value={enterdNumber}
        onChangeText={numberInputHandler}
      />
      <View style={styles.buttonGroup}>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={resetInputHandler}>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonContainer}>
          <PrimaryButton onPress={confirmInputHandler}>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  inputContainer: {
    // flexDirection: 'column',
    justifyContent: "center",
    alignItems: "center",
    marginTop: 100,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: "#3b021f",
    borderRadius: 8,
    elevation: 4, // android's shadow css
    shadowColor: "black", // ios's shadow color
    shadowOffset: { width: 0, height: 2 }, // how much the shadow should be offset from the original object to which it belongs to the left and the right
    shadowRadius: 6, // control how much the shadow expands
    shadowOpacity: 0.25, // control how transparent a shadow is
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#ddb52f",
    borderBottomWidth: 2,
    color: "#ddb52f",
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonGroup: {
    // display: "flex",
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

export default StartGameScreen;

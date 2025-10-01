import {
  StyleSheet,
  TextInput,
  View,
  Alert,
  Dimensions,
  useWindowDimensions,
} from "react-native";
import PrimaryButton from "../components/ui/PrimaryButton";
import { useState } from "react";
import Colors from "../constants/colors";
// components
import Title from "../components/ui/Title";
import Card from "../components/ui/Card";
import InstructionText from "../components/ui/InstructionText";

const StartGameScreen = ({ onPickNumber }) => {
  const { width, height } = useWindowDimensions();
  const [enterdNumber, setEnterdNumber] = useState("");
  const numberInputHandler = (enteredText) => {
    setEnterdNumber(enteredText);
  };
  const resetInputHandler = () => {
    setEnterdNumber("");
  };
  const confirmInputHandler = () => {
    const chosenNumber = parseInt(enterdNumber);
    if (isNaN(chosenNumber) || chosenNumber < 0 || chosenNumber > 99) {
      // alert("Number is not valid, plz enter a valid number🤔")
      Alert.alert("Invalid numer!", "number has to be between 0 and 99 🤔", [
        { text: "Okay", style: "destructive", onPress: resetInputHandler },
      ]);

      return;
    }
    onPickNumber(chosenNumber);
  };
  // rotate screen
  const marginTopDistance = height < 380 ? 30 : 100;

  return (
    <View style={[styles.rootContainer, { marginTop: marginTopDistance }]}>
      <View style={styles.titleContainer}>
        <Title>Guess my number</Title>
      </View>
      <Card>
        <InstructionText>Enter a number</InstructionText>
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
      </Card>
    </View>
  );
};

export default StartGameScreen;

// const deviceHeight = Dimensions.get('window').height;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    // marginTop: deviceHeight < 380 ? 30 : 100,
    alignItems: "cneter",
  },
  titleContainer: {
    padding: 16,
    alignItems: "center",
  },
  instructionText: {
    color: Colors.accent500,
    fontSize: 24,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: Colors.accent500,
    borderBottomWidth: 2,
    color: Colors.accent500,
    marginVertical: 8,
    fontWeight: "bold",
    textAlign: "center",
  },
  buttonGroup: {
    flexDirection: "row",
  },
  buttonContainer: {
    flex: 1,
  },
});

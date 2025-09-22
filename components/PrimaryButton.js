import { StyleSheet, View, Text, Pressable } from "react-native";
import Colors from "../constants/colors";

const PrimaryButton = ({ children, onPress }) => {
  const pressHandler = () => {
    console.log("Pressed");
  };
  return (
    <View style={styles.buttonOuterContainer}>
      <Pressable
        // style onPress's css use a ? b : c
        style={({ pressed }) =>
          pressed
            ? [styles.buttonInnerContainer, styles.pressed]
            : styles.buttonInnerContainer
        }
        onPress={onPress}
        android_ripple={{ color: Colors.primary600 }}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  buttonOuterContainer: {
    borderRadius: 28,
    margin: 4,
    overflow: "hidden",
  },
  buttonInnerContainer: {
    backgroundColor: Colors.primary500,
    // borderRadius: 28,
    paddingVertical: 8,
    paddingHorizontal: 16,
    // margin: 4,
    elevation: 2, // android's shadow css
  },
  buttonText: {
    color: "white",
    textAlign: "center",
  },
  pressed: {
    opacity: 0.75,
  },
});

import { StyleSheet, View } from "react-native";
import Colors from "../../constants/colors";

const Card = ({ children }) => {
  return <View style={styles.card}>{children}</View>;
};

export default Card;

const styles = StyleSheet.create({
  card: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 36,
    marginHorizontal: 24,
    padding: 16,
    backgroundColor: Colors.primary800,
    borderRadius: 8,
    elevation: 4, // android's shadow css
    shadowColor: "black", // ios's shadow color
    shadowOffset: { width: 0, height: 2 }, // how much the shadow should be offset from the original object to which it belongs to the left and the right
    shadowRadius: 6, // control how much the shadow expands
    shadowOpacity: 0.25, // control how transparent a shadow is
  },
});

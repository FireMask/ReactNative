import { TextInput, View, StyleSheet } from "react-native";
import PrimaryButton from "../components/PrimaryButton";

const StartGameScreen = () => {
  return (
    <View style={styles.inputContainer}>
      <TextInput
        style={styles.numberInput}
        maxLength={2}
        keyboardType="number-pad"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <View style={styles.buttons}>
        <View style={styles.buttonCointainer}>
          <PrimaryButton>Reset</PrimaryButton>
        </View>
        <View style={styles.buttonCointainer}>
          <PrimaryButton>Confirm</PrimaryButton>
        </View>
      </View>
    </View>
  );
};

export default StartGameScreen;

const styles = StyleSheet.create({
  inputContainer: {
    justifyContent: "center",
    alignItems: "center",
    padding: 16,
    marginHorizontal: 24,
    borderRadius: 8,
    marginTop: 100,
    backgroundColor: "#4E0329",
    elevation: 4,
    shadowColor: "black",
    shadowOffset: {
      width: 1,
      height: 2,
    },
    shadowRadius: 4,
    shadowOpacity: 0.8,
  },
  numberInput: {
    height: 50,
    width: 50,
    fontSize: 32,
    borderBottomColor: "#DDB52F",
    borderBottomWidth: 2,
    color: "#DDB52F",
    marginVertical: 8,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
  },
  buttons: {
    justifyContent: "center",
    flexDirection: "row",
  },
  buttonCointainer: {
    flex: 1,
  },
});

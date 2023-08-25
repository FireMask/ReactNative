import { StyleSheet, View, Text, Pressable } from "react-native";

const GoalItem = ({ id, text, onDeleteHandler }) => {
  return (
    <View style={styles.goalItem}>
      <Pressable
        android_ripple={{ color: "#4E09CA" }}
        onPress={onDeleteHandler.bind(this, id)}
        style={({ pressed }) => pressed && styles.pressedItem}
      >
        <Text style={styles.goalText}>{text}</Text>
      </Pressable>
    </View>
  );
};

export default GoalItem;

const styles = StyleSheet.create({
  goalItem: {
    margin: 8,
    borderRadius: 6,
    backgroundColor: "#5E0ACC",
  },
  pressedItem: {
    opacity: 0.5,
    color: "red",
  },
  goalText: {
    padding: 8,
    color: "white",
  },
});

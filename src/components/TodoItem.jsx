import React from "react";
import { StyleSheet } from "react-native";
import { theme } from "../colors";
import { Text, View, TouchableOpacity } from "react-native";
import { Fontisto } from "@expo/vector-icons";

function TodoItem({ toDo, number, deleteToDo }) {
  if (toDo) {
    return (
      <View key={number} style={styles.toDo}>
        <Text style={styles.toDoText}>{toDo.text}</Text>
        <TouchableOpacity onPress={() => deleteToDo(number)}>
          <Fontisto name="trash" size={18} color="grey" />
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toDo: {
    backgroundColor: theme.grey,
    marginBottom: 10,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  toDoText: {
    color: "white",
    fontSize: 16,
    fontWeight: "600",
  },
});

export default TodoItem;

import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}></Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "black",
  },
  text: {
    color: "white",
    backgroundColor: "green",
    height: 200,
    width: 200,
    transform: [{ rotateX: "70deg" }, { rotateZ: "-30deg" }],
  },
});

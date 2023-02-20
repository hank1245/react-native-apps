import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from "react-native";

export default function HomeScreen() {
  const STORAGE_KEY = "@my_name";
  const [name, setName] = useState<string>();
  const [text, setText] = useState("");
  const saveName = async () => {
    await AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(text));
    setName(text);
  };
  const onChangeText = (payload: string) => setText(payload);
  const loadName = async () => {
    const string = await AsyncStorage.getItem(STORAGE_KEY);
    if (string) {
      setName(JSON.parse(string));
    }
  };
  const deleteName = async () => {
    await AsyncStorage.removeItem(STORAGE_KEY);
    setName(undefined);
    setText("");
  };
  useEffect(() => {
    loadName();
  }, [text, name]);
  return (
    <View style={styles.container}>
      {name ? (
        <>
          <View>
            <Text style={styles.text}>Hi {name}</Text>
            <TouchableOpacity onPress={deleteName}>
              <Text style={styles.delete}>Delete</Text>
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <TextInput
          returnKeyType="done"
          onSubmitEditing={saveName}
          onChangeText={onChangeText}
          value={text}
          placeholder={"what is your name?"}
          style={styles.input}
        />
      )}
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
    transform: [{ rotateX: "40deg" }, { rotateZ: "-30deg" }],
    fontSize: 50,
    justifyContent: "center",
    paddingTop: 50,
    paddingLeft: 15,
  },
  input: {
    backgroundColor: "white",
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 30,
    marginVertical: 20,
    fontSize: 18,
  },
  delete: {
    color: "white",
    marginTop: 50,
    fontSize: 30,
  },
});

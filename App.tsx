import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Weather from "./Weather";
import HomeScreen from "./HomeScreen";
import Todo from "./Todo";
import ThreeScene from "./ThreeScene";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarStyle: {
            backgroundColor: "black",
            borderColor: "black",
          },
        }}
      >
        <Tab.Screen name="home" component={HomeScreen} />
        <Tab.Screen name="weather" component={Weather} />
        <Tab.Screen name="todo" component={Todo} />
        <Tab.Screen name="three" component={ThreeScene} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

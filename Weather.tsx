import { StyleSheet, Text, View, ScrollView, Dimensions } from "react-native";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";

const screenWidth = Dimensions.get("window").width;
export default function Weather() {
  return (
    <View style={styles.container}>
      <View style={styles.nav}>
        <Entypo name="menu" size={36} color="black" />
        <Text style={styles.name}>SEOUL</Text>
        <AntDesign name="search1" size={36} color="black" />
      </View>
      <View style={styles.date}>
        <View>
          <Text style={styles.week}>Monday</Text>
          <Text style={styles.day}>04 September</Text>
        </View>
      </View>
      <View style={styles.line}></View>
      <View style={styles.scroll}>
        <ScrollView
          contentContainerStyle={styles.scrollview}
          pagingEnabled
          showsVerticalScrollIndicator={false}
        >
          <View style={styles.weather}>
            <View>
              <Text style={styles.it}>27°</Text>
              <Text style={styles.forecast}>Sunny</Text>
            </View>
          </View>
          <View style={styles.weather}>
            <View>
              <Text style={styles.it}>27°</Text>
              <Text style={styles.forecast}>Sunny</Text>
            </View>
          </View>
          <View style={styles.weather}>
            <View>
              <Text style={styles.it}>27°</Text>
              <Text style={styles.forecast}>Sunny</Text>
            </View>
          </View>
          <View style={styles.weather}>
            <View>
              <Text style={styles.it}>27°</Text>
              <Text style={styles.forecast}>Sunny</Text>
            </View>
          </View>
        </ScrollView>
      </View>
      <View style={styles.line}></View>
      <View style={styles.bottom}></View>
      <View></View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  nav: {
    flex: 1,
    flexDirection: "row",
    backgroundColor: "orange",
    justifyContent: "space-between",
    alignItems: "center",
  },
  name: {
    color: "black",
    fontSize: 40,
  },
  scrollview: {
    width: screenWidth,
  },
  weather: {
    flex: 1,
    alignItems: "center",
    marginVertical: "40%",
  },
  line: {
    height: 3,
    backgroundColor: "black",
    width: "80%",
    marginHorizontal: "10%",
  },
  bottom: {
    flex: 1,
    backgroundColor: "orange",
  },
  it: {
    fontSize: 120,
  },
  forecast: {
    fontSize: 40,
  },
  date: {
    flex: 0.7,
    marginLeft: 40,
  },
  week: {
    fontWeight: "700",
    fontSize: 30,
  },
  day: {
    fontSize: 20,
  },
  scroll: {
    flex: 4,
    alignItems: "center",
  },
});

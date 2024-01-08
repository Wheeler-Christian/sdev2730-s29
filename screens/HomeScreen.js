import { View, Text, StyleSheet, Button } from "react-native";

function HomeScreen({ navigation }) {
  function pressHandler(name) {
    navigation.navigate(name);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Registration with useReducer</Text>
      <View style={styles.buttonContainer}>
        <Button
          title="Name"
          color="blue"
          onPress={() => pressHandler("Name")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Phone"
          color="green"
          onPress={() => pressHandler("Phone")}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title="Email"
          color="red"
          onPress={() => pressHandler("Email")}
        />
      </View>
    </View>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    alignItems: "center",
    paddingTop: 190,
    // justifyContent: "center",
  },
  text: {
    color: "#ddd",
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  buttonContainer: {
    marginVertical: 10,
    width: "50%",
  },
});

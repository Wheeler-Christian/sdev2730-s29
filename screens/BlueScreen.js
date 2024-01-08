import { useContext, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

import { UserContext } from "../context/userContext";

function BlueScreen({ navigation }) {
  const userNameCtx = useContext(UserContext);
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();

  function onChangeFirstName(newFirstName) {
    setFirstName(newFirstName);
  }

  function onChangeLastName(newLastName) {
    setLastName(newLastName);
  }

  function onPressNext() {
    userNameCtx.addFirstName(firstName);
    userNameCtx.addLastName(lastName);
    navigation.navigate("Phone");
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { marginBottom: 48 }]}>Using Reducer</Text>
      <Text style={styles.text}>Enter your name</Text>
      <TextInput
        value={firstName}
        placeholder="First Name"
        onChangeText={onChangeFirstName}
        cursorColor="#333"
        style={styles.input}
      />
      <TextInput
        value={lastName}
        placeholder="Last Name"
        onChangeText={onChangeLastName}
        cursorColor="#333"
        style={styles.input}
      />
      <Button title="Next" color="darkblue" onPress={onPressNext} />
    </View>
  );
}

export default BlueScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "skyblue",
    flexDirection: "column",
    // justifyContent: "center",
    paddingTop: 150,
    alignItems: "center",
    padding: 12,
  },
  text: {
    color: "darkblue",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
    minWidth: 200,
    margin: 6,
    borderWidth: 1,
    borderColor: "darkblue",
    padding: 10,
  },
});

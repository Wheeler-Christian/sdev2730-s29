import { useContext, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

import { UserContext } from "../context/userContext";

function RedScreen({ navigation }) {
  const userEmailCtx = useContext(UserContext);
  const [email, setEmail] = useState();

  function onChangeEmail(newEmail) {
    setEmail(newEmail);
  }

  function onPressNext() {
    userEmailCtx.addEmail(email);
    navigation.navigate("Validation");
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { marginBottom: 48 }]}>Using Reducer</Text>
      <Text style={styles.text}>Enter your email address</Text>
      <TextInput
        value={email}
        placeholder="email address"
        onChangeText={onChangeEmail}
        cursorColor="#333"
        style={styles.input}
      />
      <Button title="Next" color="#a00" onPress={onPressNext} />
    </View>
  );
}

export default RedScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#faa",
    flexDirection: "column",
    // justifyContent: "center",
    paddingTop: 150,
    alignItems: "center",
    padding: 12,
  },
  text: {
    color: "#a00",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
    minWidth: 200,
    margin: 6,
    borderWidth: 1,
    borderColor: "#a00",
    padding: 10,
  },
});

import { useContext } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

import ErrorText from "../components/ErrorText";

import { UserContext } from "../context/userContext";

function RedScreen({ navigation }) {
  const userEmailCtx = useContext(UserContext);

  function onChangeEmail(email) {
    userEmailCtx.setEmail(email);
  }

  function onPressNext() {
    if (userEmailCtx.emailValid) {
      navigation.navigate("Validation");
    }
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Enter your email address</Text>
      <TextInput
        value={userEmailCtx.email}
        placeholder="email address"
        keyboardType="email-address"
        onChangeText={onChangeEmail}
        cursorColor="#333"
        style={styles.input}
      />
      <Button title="Next" color="#a00" onPress={onPressNext} />
      {!userEmailCtx.emailValid && <ErrorText />}
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
    paddingTop: 64,
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

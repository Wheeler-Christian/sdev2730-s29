import { useContext, useState } from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";

import { UserContext } from "../context/userContext";

function GreenScreen({ navigation }) {
  const userPhoneCtx = useContext(UserContext);
  const [phoneNum, setPhoneNum] = useState();

  function onChangePhoneNum(newPhoneNum) {
    setPhoneNum(newPhoneNum);
  }

  function onPressNext() {
    userPhoneCtx.addPhoneNum(phoneNum);
    navigation.navigate("Email");
  }

  return (
    <View style={styles.container}>
      <Text style={[styles.text, { marginBottom: 48 }]}>Using Reducer</Text>
      <Text style={styles.text}>Enter your phone number</Text>
      <TextInput
        value={phoneNum}
        placeholder="Phone Number"
        onChangeText={onChangePhoneNum}
        cursorColor="#333"
        style={styles.input}
        keyboardType="numeric"
      />
      <Button title="Next" color="darkgreen" onPress={onPressNext} />
    </View>
  );
}

export default GreenScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "lightgreen",
    flexDirection: "column",
    // justifyContent: "center",
    paddingTop: 150,
    alignItems: "center",
    padding: 12,
  },
  text: {
    color: "darkgreen",
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  input: {
    height: 40,
    minWidth: 200,
    margin: 6,
    borderWidth: 1,
    borderColor: "darkgreen",
    padding: 10,
  },
});

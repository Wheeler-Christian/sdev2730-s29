import { useContext } from "react";
import { Text, View, StyleSheet, Button } from "react-native";

import { UserContext } from "../context/userContext";

function ValidationScreen({ navigation }) {
  const userNameCtx = useContext(UserContext);

  function yesBtnHandler() {
    alert("Hooray, everything worked well!", navigation.popToTop());
  }

  function noBtnHandler() {
    alert("Okay, you can enter information again.", navigation.popToTop());
  }

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text
          style={styles.text}
        >{`First Name: ${userNameCtx.firstName}`}</Text>
        <Text style={styles.text}>{`Last Name: ${userNameCtx.lastName}`}</Text>
        <Text style={styles.text}>{`Phone: ${userNameCtx.phoneNum}`}</Text>
        <Text style={styles.text}>{`Email: ${userNameCtx.email}`}</Text>
        <Text style={[styles.text, styles.question]}>
          Is the above info correct?
        </Text>
      </View>
      <View style={styles.buttonsContainer}>
        <View style={styles.buttonContainer}>
          <Button title="Yes" color="green" onPress={yesBtnHandler} />
        </View>
        <View style={styles.buttonContainer}>
          <Button title="No" color="red" onPress={noBtnHandler} />
        </View>
      </View>
    </View>
  );
}

export default ValidationScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#111",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 12,
  },
  textContainer: {
    marginHorizontal: 36,
  },
  text: {
    color: "#ddd",
    fontSize: 18,
    fontWeight: "bold",
  },
  question: {
    marginVertical: 24,
  },
  buttonsContainer: {
    flexDirection: "row",
    justifyContent: "center",
  },
  buttonContainer: {
    width: "25%",
    marginHorizontal: 16,
  },
});

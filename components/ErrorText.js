import { StyleSheet, Text } from "react-native";

function ErrorText({ message }) {
  return <Text style={styles.errorText}>Fix Errors</Text>;
}

export default ErrorText;

const styles = StyleSheet.create({
  errorText: {
    color: "red",
    fontWeight: "bold",
    fontSize: 16,
  },
});

import { useState } from "react";
import { Button, StyleSheet, Text, TextInput, View } from "react-native";

export default function App() {
  const [enteredText, setEnteredText] = useState("");
  const [accountList, setAccountList] = useState([]);

  function accountInputHandler(enteredText) {
    setEnteredText(enteredText);
  }

  function addAccountHandler() {
    console.log(enteredText);
  }

  return (
    <View style={styles.appContainer}>
      <View style={styles.middleView}>
        <Text style={styles.textTitle}>Recipe Application</Text>
        <TextInput
          placeholder="Full Name"
          style={styles.textInput}
          onChangeText={accountInputHandler}
        ></TextInput>
        <TextInput placeholder="Email" style={styles.textInput}></TextInput>
        <Button title="Create Account" onPress={addAccountHandler} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    paddingTop: 50,
    paddingHorizontal: 16,
    flex: 1,
  },
  middleView: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingBottom: 120,
  },
  textInput: {
    borderWidth: 1,
    borderColor: "#cccccc",
    padding: 20,
    width: "70%",
    marginBottom: 10,
    borderRadius: 10,
  },
  textTitle: {
    padding: 20,
    fontSize: 20,
    fontWeight: 'bold',
  },
});

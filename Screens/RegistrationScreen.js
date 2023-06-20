import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  // SafeAreaView,
  TextInput,
  Button,
} from "react-native";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const [text, onChangeText] = React.useState("Useless Text");
  // const [number, onChangeNumber] = React.useState("");

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>
      {/* <SafeAreaView> */}
      {/* <TextInput
          style={styles.input}
          onChangeText={onChangeText}
          value={text}
        />
        <TextInput
          style={styles.input}
          onChangeText={onChangeNumber}
          value={number}
          placeholder="useless placeholder"
          keyboardType="numeric"
        /> */}

      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Логін"
      />
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Адреса електронної пошти"
      />
      <TextInput
        style={styles.input}
        value={password}
        onChangeText={setPassword}
        placeholder="Пароль"
      />
      <Button style={styles.button} title="Зареєстуватися" />
      {/* </SafeAreaView> */}
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    top: 103,
    flex: 0.6,
    width: 400,

    borderRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "##FF6C00",
    borderRadius: 35,
    top: 200,
  },
  title: {
    fontSize: 30,
  },
  input: {
    backgroundColor: "#F6F6F6",
    borderColor: "#E8E8E8",
    color: "#BDBDBD",
    width: 343,
    height: 50,
    margin: 12,
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    // fontFamily: "Roboto",
    // fontStyle: "normal",
    // fontWeight: 400,
    // fontSize: 16,
    // lineHeight: 19,
    // position: "absolute",
    // left: 16,
    // right: 16,
    top: 32,
  },
});

import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  // SafeAreaView,
  TextInput,
  Button,
  TouchableWithoutFeedback,
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  Alert,
} from "react-native";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = () => {
    Alert.alert("Credentials", `${name} + ${password}`);
  };

  // const [text, onChangeText] = React.useState("Useless Text");
  // const [number, onChangeNumber] = React.useState("");

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Text style={styles.title}>Реєстрація</Text>
        <KeyboardAvoidingView
          behavior={Platform.OS == "ios" ? "padding" : "height"}
        >
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
            // autoComplete={email}
          />
          <TextInput
            style={styles.input}
            value={password}
            onChangeText={setPassword}
            placeholder="Пароль"
            secureTextEntry
          />
          <View style={styles.button}>
            <Button title="Зареєстуватися" onPress={onLogin} />
          </View>
        </KeyboardAvoidingView>
        <Text style={styles.text}>Вже є акаунт? Увійти</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container: {
    top: 120,
    flex: 0.7,
    width: 400,
    borderRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "##FF6C00",
    borderRadius: 55,
    marginTop: 50,
    width: 150,
    // alignItems: "center",
    // justifyContent: "center",
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
    // flex: 1,
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
  text: {
    // font-family: 'Roboto';
    // font-style: normal;
    // font-weight: 400;
    top: 20,
    fontSize: 16,
    alignItems: "center",
    // justifyContent: "center",
    // line-height: 19px;
    /* identical to box height */

    // text-align: center;

    color: "#1B4371",
  },
});

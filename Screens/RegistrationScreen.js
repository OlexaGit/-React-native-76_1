import { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

export default function Form() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Реєстрація</Text>
      <TextInput name="name" />
      <TextInput name="email" />
      <TextInput name="password" />
      <Button style={styles.button} title="Зареєстуватися" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 200,
    width: 400,
    borderRadius: 25,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#FF6C00",
    borderRadius: 35,
  },
  title: {
    fontSize: 30,
  },
});

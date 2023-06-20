import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Image } from "react-native";
import Form from "./Screens/RegistrationScreen";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={require("./Screens/photo/PhotoBG.png")}
        // resizeMode="cover"
        style={styles.image}
      ></Image>
      <Form />
      {/* <StatusBar style="auto" /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    position: "absolute",
  },
});

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Image } from "react-native";
import Form from "./Screens/RegistrationScreen";

export default function App() {
  // const image = "./photo/PhotoBG.png";
  return (
    <View style={styles.container}>
      <Image
        // source={image}
        source={require("./Screens/photo/PhotoBG.png")}
        // resizeMode="cover"
        style={styles.image}
      ></Image>
      <Form />
      <StatusBar style="auto" />
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
    width: 700,
    height: 700,
    flex: 2.9,
    //   justifyContent: "center",
  },
});

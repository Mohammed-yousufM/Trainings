import React from "react";
import {
  StyleSheet,
  ImageBackground,
  View,
  Text,
  Image,
  StatusBar,
} from "react-native";
// import SafeAndroidView from "./SafeAndroidView";

export default function WelcomeScreen() {
  return (
    <ImageBackground
      source={require("../assets/background.jpg")}
      style={styles.background}
    >
      <View style={styles.footer}>
        <Text style={styles.register}></Text>
        <Text style={styles.login}></Text>
      </View>
      <View style={styles.header}>
        <Image source={require("../assets/logo-red.png")} style={styles.logo} />
        <Text style={styles.text}>start selling anything you wish!</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    // flexDirection: "column-reverse",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  footer: {
    width: "100%",
    height: "16%",
    position: "absolute",
    bottom: 0,
  },
  register: {
    backgroundColor: "blue",
    flexGrow: 1,
  },
  login: {
    backgroundColor: "green",
    flexGrow: 1,
  },
  header: {
    alignItems: "center",
    paddingTop: 10,
  },

  logo: {
    height: 90,
    width: 90,
  },

  text: {
    color: "blue",
  },
});

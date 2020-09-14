import React from "react";
import { SafeAreaView, StyleSheet, StatusBar, Text, Image } from "react-native";

function ViewImageScreen() {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.leftText}></Text>
      <Text style={styles.rightText}></Text>
      <Image
        source={require("../assets/chair.jpg")}
        resizeMode="contain"
        style={styles.image}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "black",
    // justifyContent: "space-between",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // paddingLeft: 15,
    // paddingRight: 15,
  },
  leftText: {
    backgroundColor: "blue",
    // alignSelf: "flex-start",
    width: 50,
    height: 50,
  },
  rightText: {
    backgroundColor: "red",
    // alignSelf: "flex-end",
    width: 50,
    height: 50,
    position: "absolute",
    top: StatusBar.currentHeight,
    right: 0,
  },
  image: {
    width: "100%",
    height: "100%",
  },
});

export default ViewImageScreen;

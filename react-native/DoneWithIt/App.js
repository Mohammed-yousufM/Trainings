import React from "react";
import SaferViewAndroid from "./SaferViewAndroid";
import {
  View,
  Image,
  Text,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
} from "react-native";

export default function App() {
  return (
    <SafeAreaView
      style={[styleDef.container, SaferViewAndroid.AndroidSafeArea]}
    >
      <ImageBackground
        source={require("./assets/background.jpg")}
        style={styleDef.image}
      >
        <Text>Hello Mate!</Text>
        <Image
          source={require("./assets/logo-red.png")}
          style={{
            width: 95,
            height: 95,
          }}
        />
        <Text>Sell what you don't need</Text>

        <View
          style={{
            width: "100%",
            height: "20%",
            bottom: 0,
            flex: 1,
            position: "absolute",
          }}
        >
          <Text
            style={{
              width: "100%",
              backgroundColor: "blue",
              flexGrow: 0,
            }}
          ></Text>
          <Text
            style={{
              flexGrow: 0,
              width: "100%",
              backgroundColor: "orange",
            }}
          ></Text>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
}

const styleDef = StyleSheet.create({
  // container: {
  //   flex: 1,
  //   // justifyContent: "center",
  //   // alignItems: "center",
  // },
  image: {
    flex: 1,
    // width: "100%",
    // height: "100%",
    alignItems: "center",
  },
});

// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import SafeViewAndroid from "./SaferViewAndroid";
// import {
//   StyleSheet,
//   Text,
//   View,
//   Image,
//   SafeAreaView,
//   TouchableWithoutFeedback,
//   TouchableOpacity,
//   Button,
//   Alert,
// } from "react-native";

// export default function App() {
//   console.log("App started");

//   return (
//     <SafeAreaView style={[styles.container, SafeViewAndroid.AndroidSafeArea]}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <TouchableOpacity onLongPress={() => console.log("Hii image")}>
//         <Image
//           source={{
//             width: 200,
//             height: 300,
//             uri: "https://picsum.photos/200/300",
//           }}
//         />
//       </TouchableOpacity>
//       <Button
//         title="click me"
//         color="orange"
//         onPress={() => {
//           console.log("Button pressed");
//           alert("button tapped");
//         }}
//       />

//       <Button
//         title="second button"
//         color="yellow"
//         onPress={() =>
//           Alert.alert("why!!!", "you had to do this", [
//             {
//               text: "yes",
//               onPress: () => {
//                 console.log("yes");
//               },
//             },
//             {
//               text: "NO",
//               onPress: () => {
//                 console.log("NO");
//               },
//             },
//           ])
//         }
//       />

//       <Button
//         title="Enter your name"
//         color="red"
//         onPress={() => {
//           // Alert.prompt("Your Name!!", "Glad you chose this", (name) =>
//           //   console.log(name)
//           // );
//           Alert.alert(
//             "Alert Title",
//             "My Alert Msg",
//             [
//               {
//                 text: "Ask me later",
//                 onPress: () => console.log("Ask me later pressed"),
//               },
//               {
//                 text: "Cancel",
//                 onPress: () => console.log("Cancel Pressed"),
//                 style: "cancel",
//               },
//               { text: "OK", onPress: () => console.log("OK Pressed") },
//             ],
//             { cancelable: false }
//           );
//         }}
//       />

//       <StatusBar style="auto" />
//     </SafeAreaView>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     // justifyContent: "center",
//   },
// });

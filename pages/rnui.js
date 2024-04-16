import React from "react";
import { SafeAreaView, StatusBar } from "react-native";

export default function RNUI() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "white",
        alignItems: "center",
      }}
    ></SafeAreaView>
  );
}

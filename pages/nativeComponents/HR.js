import React from "react";
import { View } from "react-native";

export default function HR() {
  return (
    <View
      style={{ flexDirection: "row", alignItems: "center", marginVertical: 3 }}
    >
      <View
        style={{
          flex: 1,
          height: 1,
          backgroundColor: "lightgrey",
        }}
      />
    </View>
  );
}

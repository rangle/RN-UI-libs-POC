import React from "react";
import { View, Pressable, Text } from "react-native";

export default function StyledButton({ text }) {
  return (
    <Pressable
      onPress={() => {}}
      style={{
        backgroundColor: "powderblue",
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 1,
        borderColor: "blue",
      }}
    >
      <View>
        <Text style={{ color: "blue", fontSize: 18 }}>{text}</Text>
      </View>
    </Pressable>
  );
}

import React from "react";
import { View, Image, Text } from "react-native";
import HR from "./HR";

function OrderItem({ item }) {
  return (
    <View
      style={{
        flexDirection: "row",
        alignItems: "center",
      }}
    >
      <Image
        style={{ width: 30, height: 30, marginHorizontal: 10 }}
        source={{ uri: item.img }}
      />

      <View>
        <Text style={{ fontWeight: 600 }}>{item.title}</Text>
        <Text style={{ fontSize: 12 }}>Best by: {item.expiry}</Text>
        <Text style={{ fontSize: 12 }}>
          {item.amount} x ${Number(item.costEach).toFixed(2)}
        </Text>
      </View>

      <View
        style={{
          flex: 1,
          flexDirection: "row-reverse",
          alignContent: "flex-end",
        }}
      >
        <Text style={{ fontSize: 13 }}>
          ${Number(item.amount * item.costEach).toFixed(2)}
        </Text>
      </View>
    </View>
  );
}

export default function OrderDetails({ data }) {
  const totalPrice = data
    .reduce((acc, item) => acc + item.costEach * item.amount, 0)
    .toFixed(2);

  return (
    <View>
      <Text
        style={{
          fontSize: 18,
          fontWeight: 700,
          marginVertical: 10,
        }}
      >
        Order Details
      </Text>
      <View>
        {data.map((item) => (
          <View>
            <HR />
            <OrderItem key={item.title} item={item} />
          </View>
        ))}
      </View>

      <HR />
      <View
        style={{
          flexDirection: "row",
          marginVertical: 10,
          gap: 5,
        }}
      >
        <Text style={{ fontWeight: 800, fontSize: 14 }}>Total</Text>
        <Text>{data.length} items</Text>
        <View
          style={{
            flex: 1,
            flexDirection: "row-reverse",
            alignContent: "flex-end",
          }}
        >
          <Text>${totalPrice}</Text>
        </View>
      </View>
    </View>
  );
}

import React from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import * as eva from "@eva-design/eva";
import { EvaIconsPack } from "@ui-kitten/eva-icons";
import {
  IconRegistry,
  ApplicationProvider,
  Layout,
  Text,
  Avatar,
  Icon,
  List,
  ListItem,
  Divider,
  Button,
} from "@ui-kitten/components";
import getOrderData from "./data/getOrderData";

function OrderItem({ data }) {
  const { img, title, expiry, amount, costEach } = data;
  return (
    <View
      style={{
        flexDirection: "row",
        gap: 10,
        margin: 5,
      }}
    >
      <Avatar size="large" shape="square" source={{ uri: img }} />
      <View style={{ flexDirection: "column" }}>
        <Text style={{ fontSize: 14, fontWeight: 700 }}>{title}</Text>
        <Text style={{ fontSize: 13 }}>Best by {expiry}</Text>
        <Text style={{ fontWeight: 600, fontSize: 13 }}>
          {amount} x {Number(costEach).toFixed(2)}
        </Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "row-reverse",
          alignSelf: "center",
        }}
      >
        <Text>{Number(amount * costEach).toFixed(2)}</Text>
      </View>
    </View>
  );
}

export default function Kitten() {
  const orderData = getOrderData();

  return (
    <ApplicationProvider {...eva} theme={eva.light}>
      <IconRegistry icons={EvaIconsPack} />
      <ScrollView>
        <Layout
          style={{
            flex: 1,
            alignItems: "center",
          }}
        >
          <Layout
            style={{
              width: "90%",
              flex: 1,
              alignItems: "center",
            }}
          >
            <View style={{ marginVertical: 10, alignItems: "center" }}>
              <Avatar size="giant" source={{ uri: orderData.storeLogo }} />
              <Text styles={{ fontSize: 14 }}>
                3 km away - Open today until 9pm
              </Text>
            </View>

            <Divider />
            <ListItem
              title="Pick Up By"
              description={orderData.pickup}
              accessoryLeft={<Icon name="clock-outline" />}
            />
            <Divider />
            <ListItem
              title="Pickup Instructions"
              accessoryLeft={<Icon name="archive-outline" />}
              accessoryRight={<Icon name="arrow-ios-forward-outline" />}
            />
            <Divider />
            <ListItem
              title="Ordernumber"
              description={orderData.orderNumber}
              accessoryLeft={<Icon name="pricetags-outline" />}
            />
            <Divider style={{ marginVertical: 10 }} />

            <Text category="h6">Order Details</Text>
            <View style={{ width: "100%" }}>
              {orderData.order.map((item) => (
                <OrderItem data={item} key={item.title} />
              ))}
            </View>
            <Divider />

            <View style={{ marginVertical: 20, alignItems: "center" }}>
              <Button appearance="outline" style={{ width: 300 }}>
                View receipt
              </Button>
            </View>
          </Layout>
        </Layout>
      </ScrollView>
    </ApplicationProvider>
  );
}

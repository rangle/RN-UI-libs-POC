import React from "react";
import {
  SafeAreaView,
  View,
  StatusBar,
  Image,
  Text,
  ScrollView,
} from "react-native";
import getOrderData from "./data/getOrderData";
import StyledButton from "./nativeComponents/StyledButton";
import StoreInfo from "./nativeComponents/StoreInfo";
import OrderDetails from "./nativeComponents/OrderDetails";

export default function Native() {
  const orderData = getOrderData();

  return (
    <SafeAreaView
      style={{
        flex: 1,
        marginTop: StatusBar.currentHeight || 0,
        backgroundColor: "white",
        alignItems: "center",
      }}
    >
      <View style={{ width: "90%" }}>
        <ScrollView>
          <View
            style={{
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Image
              style={{
                marginVertical: 20,
                borderRadius: 99999,
                width: 50,
                height: 50,
              }}
              source={{
                uri: orderData.storeLogo,
              }}
            />
            <Text style={{ fontSize: 14, marginBottom: 20 }}>
              3 km away - Open today until 9pm
            </Text>
          </View>

          <StoreInfo
            pickup={orderData.pickup}
            orderNumber={orderData.orderNumber}
          />

          <OrderDetails data={orderData.order} />

          <StyledButton text="View Receipt" />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}

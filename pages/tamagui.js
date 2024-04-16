import React from "react";
import "@tamagui/core/reset.css";
import { TamaguiProvider, Text } from "@tamagui/core";
import {
  createTamagui,
  ScrollView,
  XStack,
  YStack,
  Avatar,
  ListItemFrame,
  ListItemText,
  ListItemTitle,
  ListItemSubtitle,
  styled,
  useListItem,
  H4,
  Image,
  Button,
} from "tamagui";
import { Watch, Box, Bookmark, ChevronRight } from "@tamagui/lucide-icons";
import { config } from "@tamagui/config/v3";
import getOrderData from "./data/getOrderData";
import { useFonts } from "expo-font";
import HR from "./nativeComponents/HR";

const CustomListItemTitle = styled(ListItemTitle, {
  color: "black",
  fontWeight: 700,
  fontSize: 14,
});

const CustomListItemSubtitle = styled(ListItemSubtitle, {
  color: "blue",
  fontSize: 12,
});

const CustomListItemText = styled(ListItemText, {});

export const StoreInfo = ListItemFrame.styleable((propsIn, ref) => {
  const { props } = useListItem(propsIn, {
    Title: CustomListItemTitle,
    Text: CustomListItemText,
    Subtitle: CustomListItemSubtitle,
  });

  return <ListItemFrame {...props} ref={ref} />;
});

export function OrderItem({ img, title, expiry, costEach, amount }) {
  return (
    <YStack>
      <XStack alignItems="center" gap={10}>
        <Image source={{ uri: img }} width={40} height={40} />
        <YStack>
          <Text fontWeight={700}>{title}</Text>
          <Text fontSize={12}>Best by: {expiry}</Text>
          <Text fontSize={12}>
            {amount} x {costEach.toFixed(2)}
          </Text>
        </YStack>
        <YStack flex={1} flexDirection="row-reverse">
          <Text>${Number(amount * costEach).toFixed(2)}</Text>
        </YStack>
      </XStack>
      <HR />
    </YStack>
  );
}

const tamaguiConfig = createTamagui(config);

export default function Tamagui() {
  const [loaded] = useFonts({
    Inter: require("@tamagui/font-inter/otf/Inter-Medium.otf"),
    InterBold: require("@tamagui/font-inter/otf/Inter-Bold.otf"),
  });

  if (!loaded) {
    return null;
  }

  const orderData = getOrderData();

  return (
    <TamaguiProvider config={tamaguiConfig}>
      <ScrollView>
        <YStack flex={1} alignSelf="center" marginTop={10}>
          <Avatar circular size="$6">
            <Avatar.Image src={orderData.storeLogo} />
          </Avatar>
        </YStack>
        <YStack flex={1} alignSelf="center" marginTop={10}>
          <Text fontSize={14} marginBottom={20}>
            3 km away - Open today until 9pm
          </Text>
        </YStack>
        <YStack flex={1} alignSelf="center" marginTop={10} width="90%">
          <StoreInfo
            icon={Watch}
            title="Pick up by"
            subTitle={orderData.pickup}
            borderColor="lightgrey"
            borderWidth={1}
          />
          <StoreInfo
            icon={Box}
            title="Pick up instructions"
            iconAfter={ChevronRight}
            borderColor="lightgrey"
            borderWidth={1}
          />
          <StoreInfo
            icon={Bookmark}
            title="Order number"
            subTitle={orderData.orderNumber}
            borderColor="lightgrey"
            borderWidth={1}
          />
        </YStack>

        <YStack marginTop={10} width="90%" alignSelf="center">
          <H4>Order Details</H4>
        </YStack>
        <YStack marginTop={10} width="90%" alignSelf="center">
          {orderData.order.map((item, index) => (
            <OrderItem key={index} {...item} />
          ))}
        </YStack>
        <YStack marginTop={10} width="90%" alignSelf="center">
          <XStack gap={5} justifyContent="center" alignContent="center">
            <Text fontSize={14} fontWeight={700}>
              Total
            </Text>
            <Text fontSize={12}>{orderData.order.length} items</Text>
            <XStack flexDirection="row-reverse" flex={1}>
              <Text>
                $
                {orderData.order
                  .reduce((acc, item) => acc + item.costEach * item.amount, 0)
                  .toFixed(2)}
              </Text>
            </XStack>
          </XStack>
        </YStack>

        <YStack marginTop={20} width="90%" alignSelf="center" marginBottom={10}>
          <Button backgroundColor="lightblue" borderColor="blue" color="blue">
            View Receipt
          </Button>
        </YStack>
      </ScrollView>
    </TamaguiProvider>
  );
}

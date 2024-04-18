import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, Button } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Native from "./pages/native";
import Tamagui from "./pages/tamagui";
import HR from "./pages/nativeComponents/HR";
import RNUI from "./pages/rnui";
import Kitten from "./pages/kitten";

function Home({ navigation }) {
  return (
    <View style={styles.container}>
      <HR />
      <Button
        title="Go to Native implementation"
        onPress={() => navigation.navigate("Native Order Summary")}
      />
      <HR />
      <Button
        title="Go to Tamagui implementation"
        onPress={() => navigation.navigate("Tamagui Order Summary")}
      />
      <HR />
      <Button
        title="Go to RN Kitten implementation"
        onPress={() => navigation.navigate("Kitten Order Summary")}
      />
      <HR />
      <StatusBar style="auto" />
    </View>
  );
}

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Native Order Summary" component={Native} />
        <Stack.Screen name="Tamagui Order Summary" component={Tamagui} />
        <Stack.Screen name="Kitten Order Summary" component={Kitten} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    gap: 20,
  },
});

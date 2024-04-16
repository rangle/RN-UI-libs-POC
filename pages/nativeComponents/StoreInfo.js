import React from "react";
import { View, Image, Text } from "react-native";

function StoreInfoItem({ icon, title, subtitle }) {
  return (
    <View
      style={{
        borderWidth: 1,
        borderColor: "lightgrey",
        padding: 8,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Image
          style={{
            marginHorizontal: 5,
            width: 20,
            height: 20,
            tintColor: "blue",
          }}
          source={{ uri: icon }}
        />
        <Text style={{ marginHorizontal: 10, fontWeight: 700 }}>{title}</Text>
      </View>
      {subtitle && (
        <View style={{ marginHorizontal: 40 }}>
          <Text style={{ color: "blue", fontSize: 12 }}>{subtitle}</Text>
        </View>
      )}
    </View>
  );
}

export default function StoreInfo({ pickup, orderNumber }) {
  return (
    <View>
      <StoreInfoItem
        title="Pick up by"
        subtitle={pickup}
        icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAADeElEQVR4nO2az0tVQRTHP5bpoyLzV9bCylWEUUGbNi0rJftlizLDRRG5MnFRrUpaJFhtRDf9FVGoSBRYBFlpteiHWhFkbvpFQZoZvBj4Xhie9z3fffe+633kBwbeY87MPefOzJkzZy4s8v8RB2aAb8BroBe4ChwEiskxQ+JJyl9gADgBFBJxHKU3AbuAk0A38CLBqE9AGxAjojiKurEeuAC8s+TeArXkmCEOS4BGYNyS74na6KRjiEMhcBn4ozZPgApy0BCHncCE2plRqsIn64BR4GbIhhjWWg5h3M/ILNfQxuX7wzbEUAIMW9MsozVzw3obZWTOA+C+z1nxwXIAntivhlPAFhaeHYoOjE416TYyw/dejc4SHc5ZMyTmpcEzYGkKuWMhu8ZlwEvp1pqOH5+U8O55ZI0RY0AT4VEn3Sbmi82aJGg8RTo48n1AJdknz3LJx1MJDkjolIfO+9TmB9Csh2WTM3pefzKBUoXVv4HVHjqulBHOfnEX2BiMzkn1NB5sFihyE6iXInfwTnNCSP4LOK9gMBsM6jlmm5jDdVVezKDjPI1E4sFpIEtrp139d6aa6wcy7HwD8NPFGDPtjhIsh9X3LbfKMVVuDmAhuhVzKiwgGKrV5xu3yq+q9JMQyLM8n1vpILgFHwc+u1U6sYzft2bWxPckhpjNNggK1J/xsFkzxHAkiSEmwRAEhakM+aJKM2xB0O1iyJWA+i5LNbWCWOw2BVoTkyodYS32XlWaDGDUqU/lfq/52BDDpj3VhnhIlfeIPoPS1YT1cyjOMGgMmxIraFyVTMjZzE4TXZrTyew0Sugp0SQPGJGODfNtNE6Gby/Ro066fUznGqJNwiPzJB/CJt865rak0yCm1H7U0kFt0mnUy6VQrZWg28rCsx2Ylk57vDbusd5AUPFXJpRb9yZdmXQQs5LYj4AVhM9KYEg6DPm5ZyxXYGY6eqz/YW58D63rON9ZzSpraM0020Y4a2JczxwLMr1UYU2zKeVejTsMmnx5p2lrOq0J+iExywGY8jzA21ezY+9LuLLuyvbde03C7euwsifFGa6DZivsiGsqeXaxfkan1Qpn4opITXh9SXmnarntApVSXRrVS2bQyhM4YUfLQn0BUaiseL+OAHGPZVZRbEOUPuEoUi7WnNpu6wOaL3rrM/r9SsfTTskmPU8sQo7zD6jaQYD5QjzJAAAAAElFTkSuQmCC"
      />
      <StoreInfoItem
        title="Pickup Instructions"
        icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAACrUlEQVR4nO2ZO4xMURjHf1YyjalorAqVkXg0VuFViA2xGla2oGIlXhGroluFR8Go6GzhHatCRWM7q/Co2MSuhFgVjV2yEhn55H/lkp2559wZe7+IX3KSyZzv/93/yb333O+cA/+pSwnoAW4Cr4AJNft9Q30W45qdwBhQy2ijwA4cMhuopow+BQ4DFWCOWkX/PUvFnZPWDVUZ+wrsAWY1iG0DehWbDMbN41QDvgBrInRrU4PZTsGUUu+E3YlY9kn7uugJoCf1TtgjE4tpniuH3dnCuCUTh5rIcUQ5rlMgIzKxpIkcS5XDvjOF8Vkmyk3kKCuH5SqM5HvgJc+/P5DJgHJjptpk3kHMc2C+9kebm2cgKwNmk5l6tEbUvyJP8m0SP2jCQChZeR6qvytP8oMSD9Tp35gyYL/zEpJnQP3mKZqzEvfX6R9NGbBaKS8heU6q/0yeC1yT2Eru6XiXMvA2zwUi8vSq3zxFMyRxZ53+LTJhF9+c5wIReTrlxTxF86YFdVSrqMiLLRmiy+upFtRRraIsL99ilwsLJPyIHz7JU3uMaLVEtujxwgt56sizDr+LH+7JU3eM6JhEF/HDJXnqixFdkOg4fjghT7b1FMwdiXbhh93yNBgjeiLROvywXp6GY0QfJFqIHxbJ03iowDbKvqt52jUvxfparJG/xx/j8mZ3J5MNCn6MP4blzd6X4NnhNv4YjJlNk/n6PP6oxnzfki/oUfzRF1Nx3Fewx6Oxbnmzuiu4ylyFPzpiqvKk7p+PP9pD10nJSmwq58HN36YtdOWarI1ti8YrYyF7CcluxSP8MiSPmxoF7VXQFfxyNeTwtV9Bp/DL6Ywd0N/2WPfjlwPyeJmAXe+t+KUr4JTg51mIBS3DL8vl8WWjoAkHp1K1wGZep8XjUVtW+3UU9wNY5IVjWCP9OAAAAABJRU5ErkJggg=="
      />
      <StoreInfoItem
        title="Order Number"
        subtitle={orderNumber}
        icon="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAB6ElEQVR4nO3ZPUoDQRjG8T8iFjb50EIwgoUK1t4iB/AAdn6Alh5FPIEaUql3iBq1tEhhoaWisRAtNPLCGxjjBpLdmdkZkwemGbJv5pfZzc7swjijmVngEHgAvoFOhvYJXAJV34gK0Mo4+E6fVs0DcQ2sAZMZa04B+1rzghwQZYu1p7TuBx4Rt8CMg+/oaPM2E6UUx9eAN211YNk3xEQ0UyKeEy5q6Zv3BcmKkNT0+FMduLQz7Tv2AbGBkLxpDfPXX9C+V9cQWwhJW+tITa8QmwhJXWudaW1p59onp50TiIm4soCQrABPfS72JRcQF4hu5vXCbmurJSCsQEzEjeU79jDJBAkFkQnicu3kDVIJDJEKEiJiaIiJkF1ZkTAyoWP6inkmJNM6rneGQFwENBPdrOrYHokYUdYzRMZ3MCiiQLiIlj6d+ZM5A9EIEFHqQZgr5F85+Q8IdL3fuxcIBdEcFCG50w9vETFCsm7cZDaIFNHNnj6blbZJfinqSkIQ98BimiJ5Y4r6158JkTemYBORhNmKFeEb4xThC+MF4RrjFeEKkwvCNiZXhC1MQRemuSKSMNtEikiLCRIxLCZoxKCYKBBJmJ1YESamo5hdfdPUSLufCGVmzJc00cxE0k5Tts0vwJE+nRln5PID5DszZFIqTSUAAAAASUVORK5CYII="
      />
    </View>
  );
}

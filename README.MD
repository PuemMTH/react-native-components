# Condition using
### ได้โปรด star Repo ให้ด้วยครับ ขอบคุณครับ

## Setup React Native
```bash
npx create-react-native app_name
```
## Install package default
```bash
npm install @react-navigation/bottom-tabs @react-navigation/native @react-navigation/native-stack axios expo-status-bar react-native-safe-area-context react-native-screens
```

## Install screen components using `Stack Navigator`
```jsx
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = () => {
  return (
    <>
      <Text>Open up App.js to start working on your app!</Text>
    </>
  )
}
```

## Install screen components using `Bottom Tab Navigator`
```jsx
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Right" component={RightScreen} />
        <Tab.Screen name="Left" component={LeftScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const HomeScreen = () => {
  return (
    <>
      <Text>Home Screen</Text>
    </>
  )
}

const RightScreen = () => {
  return (
    <>
      <Text>Right Screen</Text>
    </>
  )
}

const LeftScreen = () => {
  return (
    <>
      <Text>Left Screen</Text>
    </>
  )
}
```
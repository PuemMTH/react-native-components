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
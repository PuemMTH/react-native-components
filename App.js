import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ApiScreen from './src/screens/ApiScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Home"
        >
          <Tab.Screen name="Home" component={ApiScreen} />
          <Tab.Screen name="Right" component={RightScreen} />
          <Tab.Screen name="Left" component={LeftScreen} />
        </Tab.Navigator>
      </NavigationContainer>
  );
}

// const HomeScreen = () => (<><Text>Home Screen</Text></>)
const RightScreen = () => (<><Text>Right Screen</Text></>)
const LeftScreen = () => (<><Text>Left Screen</Text></>)
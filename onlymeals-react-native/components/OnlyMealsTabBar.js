import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnlyMealsMapScreen from '../screens/OnlyMealsMapScreen';
import MessagesScreen from '../screens/MessagesScreen';
import { SafeAreaView } from 'react-native';
import ChatScreen from '../screens/ChatScreen'
import ProfileScreen from '../screens/ProfileScreen';

const Tab = createBottomTabNavigator();

const OnlyMealsTabBar = ({ state, descriptors, navigation }) => {
  return (
      <Tab.Navigator>
        <Tab.Screen name="Map" component={OnlyMealsMapScreen} />
        <Tab.Screen name="Chat" component={ChatScreen} />
        <Tab.Screen name="Profile" component={ProfileScreen} />
      </Tab.Navigator>
  )
}

export default OnlyMealsTabBar
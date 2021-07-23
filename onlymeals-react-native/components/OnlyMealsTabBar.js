import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import OnlyMealsMapScreen from '../screens/OnlyMealsMapScreen';
import MessagesScreen from '../screens/MessagesScreen';

const Tab = createBottomTabNavigator();

const OnlyMealsTabBar = ({ state, descriptors, navigation }) => {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Map" component={OnlyMealsMapScreen} />
      <Tab.Screen name="Messages" component={MessagesScreen} />
    </Tab.Navigator>
  )
}

export default OnlyMealsTabBar
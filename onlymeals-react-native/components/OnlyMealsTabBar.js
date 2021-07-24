import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import OnlyMealsMapScreen from '../screens/OnlyMealsMapScreen';
import SelectEateryScreen from '../screens/SelectEateryScreen';
import MessagesScreen from '../screens/MessagesScreen';
import { SafeAreaView } from 'react-native';
import ChatScreen from '../screens/ChatScreen'
import ProfileScreen from '../screens/ProfileScreen';
import { Ionicons } from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

const OnlyMealsTabBar = ({ state, descriptors, navigation }) => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "SelectEatery") {
            iconName = focused
              ? 'map'
              : 'map-outline'
          }
          else if (route.name === "Profile") {
            iconName = focused
              ? 'person-circle'
              : 'person-circle-outline'
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        }
      })}
    >
      <Tab.Screen name="SelectEatery" component={SelectEateryScreen} />
      <Tab.Screen name="Profile" component={ProfileScreen} />
    </Tab.Navigator >
  )
}

export default OnlyMealsTabBar
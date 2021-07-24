import React from 'react'
import { Stack } from '../App'
import OnlyMealsMapScreen from './OnlyMealsMapScreen'
import FindKakiScreen from './FindKakiScreen'
import ChatScreen from './ChatScreen'

const SelectEateryScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Map" component={OnlyMealsMapScreen} />
      <Stack.Screen name="FindKaki" component={FindKakiScreen} />
      <Stack.Screen name="Chat" component={ChatScreen} />
    </Stack.Navigator>
  )
}

export default SelectEateryScreen;
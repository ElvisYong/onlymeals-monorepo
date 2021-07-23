import React from 'react'
import { Stack } from '../App'
import OnlyMealsMapScreen from './OnlyMealsMapScreen'
import FindKakiScreen from './FindKakiScreen'

const SelectEateryScreen = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Map" component={OnlyMealsMapScreen} />
      <Stack.Screen name="FindKaki" component={FindKakiScreen} />
    </Stack.Navigator>
  )
}

export default SelectEateryScreen;
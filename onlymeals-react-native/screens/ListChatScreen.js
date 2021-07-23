import { createStackNavigator } from "@react-navigation/stack";

import { NavigationContainer } from "@react-navigation/native";
import { Stack } from "native-base";

const NavigationExample = () => {
    
    return(
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="insertnameHere"
                component={ComponentNameHere}/>
            </Stack.Navigator>
        </NavigationContainer>
    )
}
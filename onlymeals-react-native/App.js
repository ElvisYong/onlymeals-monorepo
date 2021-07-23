import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import firebase from './firebase/firebaseConfig';
import { NativeBaseProvider } from 'native-base';

// Import the screens
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import OnlyMealsTabBar from './components/OnlyMealsTabBar';


const Stack = createStackNavigator();

// In an actual app we'll probably use redux or write a full reducer to do dispatching of sign in out events
export const AuthContext = React.createContext();

export default function App() {
  const [userToken, setUserToken] = useState(null);

  firebase.auth().onAuthStateChanged(async (user) => {
    if (user !== null) {
      const token = await user.getIdToken();
      setUserToken(token);
    }
  });


  return (
    <NativeBaseProvider>
      <NavigationContainer>
        <AuthContext.Provider value={{ userToken, setUserToken }}>
          {userToken !== null ? (
            <OnlyMealsTabBar />
          ) : (
            <Stack.Navigator >
              <Stack.Screen name="SignIn" component={SignInScreen} />
              <Stack.Screen name="SignUp" component={SignUpScreen} />
            </Stack.Navigator>
          )
          }
        </AuthContext.Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}
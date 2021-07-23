import React, { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as WebBrowser from 'expo-web-browser';
import firebase from './firebase/firebaseConfig';

// Import the screens
import HomeScreen from './screens/HomeScreen';
import SignUpScreen from './screens/SignUpScreen';
import SignInScreen from './screens/SignInScreen';
import { NativeBaseProvider } from 'native-base';


const Stack = createStackNavigator();

WebBrowser.maybeCompleteAuthSession();

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
          <Stack.Navigator >
            {userToken !== null ? (
              <>
                <Stack.Screen name="Home" component={HomeScreen} />
              </>
            ) : (
              <>
                <Stack.Screen name="SignIn" component={SignInScreen} />
                <Stack.Screen name="SignUp" component={SignUpScreen} />
              </>
            )
            }
          </Stack.Navigator>
        </AuthContext.Provider>
      </NavigationContainer>
    </NativeBaseProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

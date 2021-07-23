import React, { useState, useEffect, useContext } from 'react';
import { FormControl, Button, Input, Text, Center, Pressable } from 'native-base';
import firebase from 'firebase/app';
import * as Google from 'expo-auth-session/providers/google';
import { AuthContext } from '../App'

const SigninScreen = ({ navigation }) => {
  const { setUserToken } = useContext(AuthContext);

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  // const [request, response, promptAsync] = Google.useIdTokenAuthRequest(
  //   {
  //     clientId: ''
  //   }
  // );

  // useEffect(() => {
  //   if (response?.type === 'success') {
  //     const { id_token } = response.params;
  //     const credential = firebase.auth.GoogleAuthProvider.credential(id_token);
  //     firebase.auth().signInWithCredential(credential);
  //   }
  // }, [response]);

  const signIn = async () => {
    try {
      const response = await firebase.auth().signInWithEmailAndPassword(email, password);
      const token = await response.user.getIdToken();
      setUserToken(token);
    } catch (err) {
      setError(err.message);
    }
  }


  return <>
    <Center flex={1} m={5}>
      <FormControl isRequired>
        <FormControl.Label>Email</FormControl.Label>
        <Input
          placeholder="email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </FormControl>
      <FormControl isRequired>
        <FormControl.Label>Password</FormControl.Label>
        <Input
          type="password"
          value={password}
          onChangeText={(text) => setPassword(text)}
        />
      </FormControl>

      <Button m={5} onPress={() => signIn()} > SIGN IN </Button>
      {/* <Button m={5} onPress={() => promptAsync()} > SIGN IN WITH GOOGLE</Button> */}

      <Pressable onPress={() => navigation.navigate('SignUp')}>
        <Text>Don't have an account? Sign Up</Text>
      </Pressable>
    </Center>
  </>
};

export default SigninScreen;
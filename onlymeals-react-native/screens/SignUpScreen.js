import React, { useState } from 'react';
import { FormControl, Input, Button, Center, Pressable, Text } from 'native-base';
import firebase from 'firebase/app';

const SignupScreen = ({ navigation }) => {
  // Could use formdata or smth but this will do for now
  // React-hook-forms could do it beautifully too
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const signUp = async () => {
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password);
      console.log(response)
      // navigation.navigate('SignIn');
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

      <Button m={5} title="SignUp" onPress={() => signUp()}> SIGN UP </Button>
      <Pressable onPress={() => navigation.navigate('SignIn')}>
        <Text>Already have an account? Sign In</Text>
      </Pressable>
    </Center>
  </>
};

export default SignupScreen;
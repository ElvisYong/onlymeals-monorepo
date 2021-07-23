import React, { useState, useContext } from 'react';
import { FormControl, Input, Button, Center, Pressable, Text, Icon } from 'native-base';
import firebase from 'firebase/app';
import { AuthContext } from '../App'
import { MaterialIcons } from "@expo/vector-icons"

const SignupScreen = ({ navigation }) => {
  const { setUsertoken } = useContext(AuthContext);
  // Could use formdata or smth but this will do for now
  // React-hook-forms could do it beautifully too
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [imageURL, setImageUrl] = useState('')

  const signUp = async () => {
    try {
      const response = await firebase.auth().createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        var user = userCredential.user
        user.updateProfile({
          displayName: name,
          photoURL: imageURL ? imageURL : "https://image.shutterstock.com/image-vector/minimal-profile-icon-concept-vector-260nw-1931143013.jpg" 
        })
      })
      .catch((error) => {
        var errorCode = error.code;
        var errorMessage = error.message;
        // ..
        console.log(errorMessage)
      })
      ;
      let token = await response.user.getIdToken()
      setUsertoken(token)
    } catch (err) {
      console.log(err)
    }

  }
  return <>
    <Center flex={1} m={5}>
      <FormControl isRequired>
        <FormControl.Label>Name</FormControl.Label>
        <Input
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="badge" />}
              size="md"
              m={2}
            _light={{
              color: "black",
            }}
            _dark={{
              color: "gray.300",
            }}
            />
          }
          placeholder="Enter your name"
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </FormControl>

      <FormControl isRequired>
        <FormControl.Label>Email</FormControl.Label>
        <Input
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="email" />}
              size="md"
              m={2}
            _light={{
              color: "black",
            }}
            _dark={{
              color: "gray.300",
            }}
            />
          }
          placeholder="Enter your email"
          value={email}
          onChangeText={(text) => setEmail(text)}
        />
      </FormControl>

      <FormControl isRequired>
        <FormControl.Label>Password</FormControl.Label>
        <Input
          InputLeftElement={
            <Icon
              as={<MaterialIcons name="lock" />}
              size="md"
              m={2}
            _light={{
              color: "black",
            }}
            _dark={{
              color: "gray.300",
            }}
            />
          }
          type="Enter your password"
          value={password}
          onChangeText={(text) => setPassword(text)}
          secureTextEntry
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
import React, { useState, useEffect, useContext } from 'react'
import { Button } from 'native-base';
import { AuthContext } from '../App'
import firebase from '../firebase/firebaseConfig';

const HomeScreen = ({ navigation }) => {
  const { setUserToken } = useContext(AuthContext)

  const signOut = () => {
    firebase.auth().signOut().then(() => {
      setUserToken(null)
    }).catch((error) => {
      console.log(error)
    })
  }

  return (
    <Button onPress={() => signOut()}>SIGN OUT</Button>
  )
};

export default HomeScreen;
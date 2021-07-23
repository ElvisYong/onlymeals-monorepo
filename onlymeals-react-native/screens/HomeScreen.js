import React, { useState, useEffect, useContext } from 'react'
import { Button } from 'native-base';
import { StyleSheet, Text, View } from 'react-native';
import { AuthContext } from '../App'
import firebase from '../firebase/firebaseConfig';
import MapView from '../components/OnlyMealsMapView'

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
    //<MapView />
    <Button>TEst</Button>
  )
};

export default HomeScreen;
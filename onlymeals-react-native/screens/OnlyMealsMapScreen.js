import React, { useState, useEffect, useContext } from 'react'
import { Button, Box } from 'native-base';
import { AuthContext } from '../App'
import firebase from '../firebase/firebaseConfig';
import MapView from 'react-native-maps';
import { StyleSheet, Dimensions, View } from 'react-native';


const OnlyMealsMapScreen = ({ navigation }) => {
  const [region, setRegion] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })

  return (
    <MapView
      region={region}
      onRegionChangeComplete={(region) => setRegion(region)}
      style={{ flex: 1 }}
    />
  )
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  mapStyle: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
});

export default OnlyMealsMapScreen;
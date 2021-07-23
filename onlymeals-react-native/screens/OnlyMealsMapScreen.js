import React, { useState, useEffect, useContext } from 'react'
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Flex, VStack } from 'native-base';
import * as Location from 'expo-location';

const OnlyMealsMapScreen = ({ navigation }) => {
  const [userLocation, setUserLocation] = useState(null);
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  const [region, setRegion] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })

  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      await Location.watchPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation
      }, (liveLocation) => setUserLocation(liveLocation))

      let location = await Location.getCurrentPositionAsync()
      setLocation(location)

    })();
  }, []);

  useEffect(() => {
    if (location !== null) {
      let region = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.0022,
        longitudeDelta: 0.0021
      };
      setRegion(region);
    }
  }, [location])


  return (
    <>
      <MapView
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
        style={{ flex: 1 }}
        userLocationUpdateInterval={500}
      />
      <Flex>

      </Flex>
    </>
  )
};

export default OnlyMealsMapScreen;
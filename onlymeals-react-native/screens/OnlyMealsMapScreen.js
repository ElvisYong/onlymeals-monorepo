import React, { useState, useEffect, useContext } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Box, Text, FlatList, Input, Pressable, Icon, PresenceTransition } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';

const OnlyMealsMapScreen = ({ navigation }) => {
  const [errorMsg, setErrorMsg] = useState(null);

  const [userLocation, setUserLocation] = useState(null);
  const [location, setLocation] = useState(null);
  const [eateries, setEateries] = useState([]);
  const [region, setRegion] = useState({
    latitude: 1.3521,
    longitude: 103.8198,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421
  })

  useEffect(() => {
    const fetchData = async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        setErrorMsg('Permission to access location was denied');
      }

      await Location.watchPositionAsync({
        accuracy: Location.Accuracy.BestForNavigation
      }, (liveLocation) => setUserLocation(liveLocation))

      let location = await Location.getCurrentPositionAsync()
      setLocation(location)

      try {
        let response = await fetch(`https://onlymeals-69b1b.as.r.appspot.com/location/${location.coords.latitude}/${location.coords.longitude}`, {
          method: 'GET',
        })
        let data = await response.json()
        setEateries(data.results)

      } catch (err) {
        console.log(err)
      }
    }

    fetchData();
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

  const onEateryPressed = (selectedItem) => {
    let selectedRegion = {
      latitude: selectedItem.geometry.location.lat,
      longitude: selectedItem.geometry.location.lng,
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0021
    }
    navigation.navigate('FindKaki', { selectedItem, selectedRegion })
    setRegion(selectedRegion)

  }

  return (
    <>
      <MapView
        showsUserLocation={true}
        provider={PROVIDER_GOOGLE}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
        style={{ flex: 1, }}
      >
        {
          eateries.length !== 0 &&
          eateries.map((item, index) =>
            <Marker
              key={index}
              coordinate={{
                latitude: item.geometry.location.lat,
                longitude: item.geometry.location.lng
              }}
            />
          )
        }
      </MapView>
      <Box bg="white" flex={1}>
        <Input
          marginLeft={5}
          marginRight={5}
          placeholder="Search"
          variant="filled"
          bg="gray.200"
          borderRadius={10}
          py={1}
          px={2}
          _web={{
            _focus: { borderColor: 'muted.300', style: { boxShadow: 'none' } },
          }}
          InputLeftElement={<Icon size='sm' ml={2} size={5} color="gray.400" as={<Ionicons name="ios-search" />} />}
        />
        <FlatList
          data={eateries || []} renderItem={({ item }) => (
            <Box marginLeft={5} marginRight={5}>
              <Pressable
                onPress={() => onEateryPressed(item)}
                alignItems="flex-start"
                bg="white"
                borderBottomColor="trueGray.200"
                borderBottomWidth={1}
                justifyContent="center"
                height={50}
                underlayColor={"#AAA"}
                _pressed={{
                  bg: "trueGray.200"
                }}
                py={8}
              >
                <Text bold>{item.name}</Text>
                <Text>{item.vicinity}</Text>
              </Pressable>
            </Box>
          )}
          keyExtractor={(item) => item.place_id}
        />
      </Box>
    </>
  )
};

export default OnlyMealsMapScreen;
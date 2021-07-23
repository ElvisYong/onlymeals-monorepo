import React, { useState, useEffect, useContext } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Box, Text, FlatList, Input, Pressable, Icon, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';

const FindKakiScreen = ({ route, navigation }) => {
  const { selectedItem, selectedRegion } = route.params
  const [errorMsg, setErrorMsg] = useState(null);
  const [location, setLocation] = useState(
    {
      latitude: selectedItem.geometry.location.lat,
      longitude: selectedItem.geometry.location.lng,
      latitudeDelta: 0.0022,
      longitudeDelta: 0.0021
    }
  );
  const [region, setRegion] = useState(selectedRegion)

  return (
    <>
      <MapView
        provider={PROVIDER_GOOGLE}
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
        style={{ flex: 1, }}
      >
        <Marker
          coordinate={{
            latitude: selectedItem.geometry.location.lat,
            longitude: selectedItem.geometry.location.lng
          }}
        />
      </MapView>
      <Box bg="white" flex={1}>
        <Box marginLeft={5} marginRight={5}>
          <Pressable
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
            <Text bold>{selectedItem.name}</Text>
            <Text>{selectedItem.vicinity}</Text>
          </Pressable>
        </Box>
        <Button marginLeft={5} marginRight={5}>FIND EATING BUDDIES</Button>
      </Box>
    </>
  )
};

export default FindKakiScreen;
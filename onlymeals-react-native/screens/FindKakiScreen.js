import React, { useState, useEffect, useContext } from 'react'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps';
import { Box, Text, FlatList, Input, Pressable, Icon, Button } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import * as Location from 'expo-location';

const FindKakiScreen = ({ route, navigation }) => {
  const { selectedItem, selectedRegion } = route.params
  const [markerRef, setMarkerRef] = useState(null)
  const [isCancel, setIsCancel] = useState(false);
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
        pitchEnabled={false}
        rotateEnabled={false}
        scrollEnabled={false}
        zoomEnabled={false}
        provider={PROVIDER_GOOGLE}
        region={region}
        onRegionChangeComplete={(region) => {
          markerRef.showCallout()
          // setRegion(region)
        }}
        style={{ flex: 1, }}
      >
        <Marker
          ref={(ref) => setMarkerRef(ref)}
          coordinate={{
            latitude: selectedItem.geometry.location.lat,
            longitude: selectedItem.geometry.location.lng
          }}
        >
          <Callout>
            <Text>{selectedItem.name}</Text>
          </Callout>
        </Marker>
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
        {
          isCancel ? (
            <Button marginLeft={5} marginRight={5} onPress={() => { setIsCancel(false) }}>CANCEL SEARCH</Button>
          ) : (
            <Button marginLeft={5} marginRight={5} onPress={() => {}}>FIND EATING BUDDIES</Button>
          )
        }
      </Box>
    </>
  )
};

export default FindKakiScreen;
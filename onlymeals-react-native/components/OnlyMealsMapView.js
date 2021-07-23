import React from 'react'
import MapView from 'react-native-maps'
import { SafeAreaView, StyleSheet } from 'react-native'

const OnlyMealsMapView = () => {
    const [region, setRegion] = useState({
        region: {
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
        },
    })
    const regionChange = (region) => {
        setRegion(region)
    }
    < SafeAreaView >
        <MapView 
        region={region}
        onRegionChanged={(region) => regionChange(region)}
        />
    </SafeAreaView >
}

/*
const onlyMealsStyleSheet = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: 'center',
        justifyContent: 'center'
    },

    mapStyle: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height
    }
})
*/

export default MapView
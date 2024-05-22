import { SafeAreaView, View, TouchableOpacity, Text, Alert } from "react-native";
import { styles } from "./StyleHome";
import { useAuth } from "../../contexts/auth";
import { useEffect, useRef, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { getCurrentPositionAsync, LocationAccuracy, LocationObject, requestForegroundPermissionsAsync, watchPositionAsync } from "expo-location";
import { markers } from "./markers";
import DelegaciaCICOM from "../../components/Home/DelegaciaCICOM";
import DelegaciaDIP from "../../components/Home/DelegaciaDIP";
import Microfone from "../../components/Home/microfone";

export default function HomeInicial({ navigation }: any) {
    const { signOut, user } = useAuth()

    const handleSignOut = () => {
        signOut()
    };

    const [location, setLocation] = useState<LocationObject | null>(null)

    const mapRef = useRef<MapView>(null)
    const [CICOM, setCICOM] = useState(false)
    const [DIP, setDIP] = useState(false)

    async function requestLocationPermissions() {
        const { granted } = await requestForegroundPermissionsAsync()

        if (granted) {
            const currentPoisition = await getCurrentPositionAsync()
            setLocation(currentPoisition)
        }
    }

    useEffect(() => {
        requestLocationPermissions()
    }, [])

    useEffect(() => {
        watchPositionAsync({
            accuracy: LocationAccuracy.Highest,
            timeInterval: 1000,
            distanceInterval: 1
        }, (response) => {
            setLocation(response);
            mapRef.current?.animateCamera({
                // pitch: 70,
                center: response.coords
            })
        })
    }, [])

    const onMarkerSelecterd = (marker: any) => {
        Alert.alert(marker.name)
    }
    return (
        <SafeAreaView style={styles.geral}>
            <View style={styles.map}>



                {location && (
                    <MapView
                        ref={mapRef}
                        style={styles.map}
                        initialRegion={{
                            latitude: location.coords.latitude,
                            longitude: location.coords.longitude,
                            latitudeDelta: 0.005,
                            longitudeDelta: 0.005
                        }}
                        showsMyLocationButton
                    >
                        <Marker
                            coordinate={{
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                            }}
                        />

                        {CICOM && markers.filter(marker => marker.type === 'CICOM').map((marker, index) => (
                            <Marker key={index} coordinate={marker}>
                                <Callout>
                                    <View style={styles.ViewDelegacaia}>
                                        <Text style={styles.TextDelegacia}>{marker.name}</Text>
                                    </View>
                                </Callout>
                            </Marker>
                        ))}

                        {DIP && markers.filter(marker => marker.type === 'DIP').map((marker, index) => (
                            <Marker key={index} coordinate={marker}>
                                <Callout>
                                    <View style={styles.ViewDelegacaia}>
                                        <Text style={styles.TextDelegacia}>{marker.name}</Text>
                                    </View>
                                </Callout>
                            </Marker>
                        ))}
                    </MapView>
                )}


                <View style={styles.botoesMenu}>



                    <View style={styles.BottomView}>
                        <TouchableOpacity onPress={() => setCICOM(!CICOM)} >
                            {
                                CICOM ? <DelegaciaCICOM /> : <DelegaciaCICOM />
                            }
                        </TouchableOpacity>
                        <Text style={styles.MarginText}>CICOM</Text>
                    </View>
                    
                    <View style={styles.BottomMicrofone}>
                        <Microfone></Microfone>
                    </View>
                    <View style={styles.BottomView}>
                        <TouchableOpacity onPress={() => setDIP(!DIP)} >
                            {
                                DIP ? <DelegaciaDIP /> : <DelegaciaDIP />
                            }
                        </TouchableOpacity>
                        <Text style={styles.MarginText}>DIP</Text>

                    </View>
                </View>


            </View>

        </SafeAreaView>
    );
}
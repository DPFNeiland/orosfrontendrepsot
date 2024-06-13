import {  View, TouchableOpacity, Text, Alert, SafeAreaView } from "react-native";
import { styles } from "./StyleHome";
import { useEffect, useRef, useState } from "react";
import MapView, { Marker, Callout } from "react-native-maps";
import { getCurrentPositionAsync, LocationAccuracy, LocationObject, requestForegroundPermissionsAsync, watchPositionAsync } from "expo-location";
import { markers } from "./markers";
import DelegaciaCICOM from "../../components/Home/DelegaciaCICOM";
import DelegaciaDIP from "../../components/Home/DelegaciaDIP";
import Microfone from "../../components/Home/microfone";
import IconDEL from "../../components/Home/iconDEL";
import IconDel from "../../../assets/BotoesDelegacias/iconDEL.svg"
import DelMulher from "../../../assets/BotoesDelegacias/DelegaciaMulher.svg"
import IconDelMulher from "../../../assets/BotoesDelegacias/MulherDel.svg"
import GoBack from "../../../assets/BotoesDelegacias/GoBack.svg"

export default function HomeInicial({ navigation }: any) {

    const [location, setLocation] = useState<LocationObject | null>(null)

    const mapRef = useRef<MapView>(null)
    const [CICOM, setCICOM] = useState(false)
    const [DIP, setDIP] = useState(false)
    const [DECCM, setDECCM] = useState(false)

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

            <TouchableOpacity style={{position: 'absolute', zIndex: 100, top: "5%", left: "3%"}} onPress={() => navigation.goBack()}>
                <GoBack />
            </TouchableOpacity>
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
                                <Callout tooltip>
                                    <View style={styles.ViewDelegacaia}>
                                        <Text style={styles.TextDelegacia}>{marker.name}</Text>
                                    </View>
                                </Callout>
                            </Marker>
                        ))}

                        {DIP && markers.filter(marker => marker.type === 'DIP').map((marker, index) => (
                            <Marker key={index} coordinate={marker}>
                                <IconDel height={40} />
                                <Callout tooltip>
                                    <View style={styles.ViewDelegacaia}>
                                        <Text style={styles.TextDelegacia}>{marker.name}</Text>
                                    </View>
                                </Callout>
                            </Marker>
                        ))}

                        {DECCM && markers.filter(marker => marker.type === 'DECCM').map((marker, index) => (
                            <Marker key={index} coordinate={marker}>
                                <IconDelMulher height={40} />
                                <Callout tooltip>
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
                            {CICOM ? <DelegaciaCICOM /> : <DelegaciaCICOM />}
                        </TouchableOpacity>
                        <Text style={styles.MarginText}>CICOM</Text>
                    </View>

                    <View style={styles.BottomView}>
                        <TouchableOpacity onPress={() => setDIP(!DIP)} >
                            {DIP ? <DelegaciaDIP /> : <DelegaciaDIP />}
                        </TouchableOpacity>
                        <Text style={styles.MarginText}>DIP</Text>
                    </View>

                    <View style={styles.BottomView}>
                        <TouchableOpacity onPress={() => setDECCM(!DECCM)} >
                            {DECCM ? <DelMulher /> : <DelMulher />}
                        </TouchableOpacity>

                        <Text style={styles.MarginText}>De. da</Text>
                        <Text style={styles.MarginText}>Mulher</Text>
                    </View>


                </View>

            </View>

        </SafeAreaView>
    );
}

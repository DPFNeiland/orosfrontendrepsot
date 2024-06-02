import { View, Text, TouchableOpacity, Linking } from "react-native";
import { styles } from "./style";
import { SafeAreaView } from "react-native-safe-area-context";
import Oros from "../../components/Home/OrosHome";
import Perfil from "../../components/Home/perfil";
import Denuncia from "../../components/Home/Denuncia";
import Policia from "../../components/Home/Policia";
import Fireman from "../../components/Home/Fireman";
import Emergencia from "../../components/Home/Emergencia";
import HistoricoChamada from "../../components/Home/HistoricoEmergencia";
import TelefoneDelegacia from "../../components/Home/TelefineDelegacia";
import MapSVG from "../../components/Home/MapSVG";
import MapView, { Marker } from "react-native-maps";
import { getCurrentPositionAsync, LocationAccuracy, LocationObject, requestForegroundPermissionsAsync, watchPositionAsync } from "expo-location";
import { useEffect, useRef, useState } from "react";
import { markers } from "../HomeInicial/markers";

export default function Home({ navigation }: any) {

    /* Mapa */
    const [location, setLocation] = useState<LocationObject | null>(null)
    const [closestDelegacias, setClosestDelegacias] = useState<any[]>([]);
    const mapRef = useRef<MapView>(null)



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
                center: response.coords
            })
        })
    }, [])

    useEffect(() => {
        if (location) {
            const delegaciasWithDistance = markers.map((delegacia) => {
                const distance = Math.sqrt(
                    Math.pow(location.coords.latitude - delegacia.latitude, 2) +
                    Math.pow(location.coords.longitude - delegacia.longitude, 2)
                );
                return { ...delegacia, distance };
            });

            const closestDelegaciasSorted = delegaciasWithDistance.sort((a, b) => a.distance - b.distance);
            setClosestDelegacias(closestDelegaciasSorted);
        }
    }, [location]);




    /* Botoes de denuncia */
    const handleBombeiros = () => {
        Linking.openURL('tel:193');
    }

    const handlePoliceCivil = () => {
        Linking.openURL('tel:190');
    }

    const handleEmergencia = () => {
        Linking.openURL('tel:192');
    }

    const handleDenuncia = () => {
        Linking.openURL('tel:181');
    }

    const handelBO = () => {
        Linking.openURL('https://www.gov.br/pt-br/servicos/registrar-ocorrencia-policial-online')
    }
    return (
        <SafeAreaView style={styles.geral}>
            <View style={styles.Header}>
                <Oros />

                <TouchableOpacity style={styles.TouchablePerfil} onPress={() => navigation.navigate('Perfil')}>
                    <Text style={styles.TextPerfil}>Perfil</Text>
                    <Perfil />

                </TouchableOpacity>
            </View>

            <View style={styles.ViewNumerodeEmergencia}>

                <Text style={styles.TextNumeroDeEmergencia}>
                    Números de emergência
                </Text>

                <View /* Área dos Botões */>
                    <View /* Área 1*/>
                        <View style={styles.Area1}>
                            <TouchableOpacity style={styles.ButtonEmergencia} onPress={handleDenuncia}>
                                <Denuncia />
                                <Text style={styles.TextButtonEmergencia}>Denúncia</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.ButtonEmergencia} onPress={handlePoliceCivil}>
                                <Policia />
                                <Text style={styles.TextButtonEmergencia}>Polícia</Text>
                            </TouchableOpacity>
                        </View>



                    </View>

                    <View /* Área 2*/>
                        <View style={styles.Area1}>
                            <TouchableOpacity style={styles.ButtonEmergencia} onPress={handleBombeiros}>
                                <Fireman />
                                <Text style={styles.TextButtonEmergencia}>Bombeiros</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={styles.ButtonEmergencia} onPress={handleEmergencia}>
                                <Emergencia />
                                <Text style={styles.TextButtonEmergencia}>Emergência</Text>
                            </TouchableOpacity>
                        </View>

                        <View >
                            <TouchableOpacity style={styles.HistoricoChamadaButton} onPress={() => { navigation.navigate('ListaDeTelefones') }}>
                                <HistoricoChamada />
                                <Text style={styles.TextButtonHistorico}>Mais números de emergência</Text>
                            </TouchableOpacity>
                        </View>

                    </View>

                </View>

                <Text style={styles.TextNumeroDeEmergencia}>

                    BOs
                </Text>

                <View style={styles.Area2} /* Área dos botões */>
                    <TouchableOpacity style={styles.ButtonEmergencia} onPress={() => navigation.navigate('BOs')}>
                        <Text style={styles.TextButtonEmergencia}>Registrar B.O.</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.ButtonEmergencia} onPress={() => navigation.navigate('Historico')}>
                        <Text style={styles.TextButtonEmergencia}>Histórico de B.Os</Text>
                    </TouchableOpacity>

                </View>

                <Text style={styles.TextNumeroDeEmergencia}>
                    Delegacias próximas a você
                </Text>



                <View /* Delegacias Próximas */>
                    <View style={styles.total}>
                        <View style={styles.DelegaciasProximasButtons} /* 1º Delegacia */>
                            <MapSVG />
                            {closestDelegacias.length > 0 && closestDelegacias[0].nameabrev && (
                                <View style={{ width: '60%' }} >
                                    <Text style={styles.NomedaDelegaciaText}>{closestDelegacias[0].nameabrev}</Text>
                                    {/* Adicione mais informações da delegacia conforme necessário */}
                                </View>
                            )}

                            <TelefoneDelegacia onPress={() => {
                                let telnumero = 'tel:' + closestDelegacias[0].telefone;
                                Linking.openURL(telnumero);
                            }} />
                        </View>
                        <Text style={styles.linhacolor}>     ————————————————————————</Text>
                        <View style={styles.DelegaciasProximasButtons} /* 1º Delegacia */>
                            <MapSVG />
                            {closestDelegacias.length > 0 && closestDelegacias[0].nameabrev && (
                                <View style={{ width: '60%' }}>
                                    <Text style={styles.NomedaDelegaciaText}>{closestDelegacias[1].nameabrev}</Text>
                                    {/* Adicione mais informações da delegacia conforme necessário */}
                                </View>
                            )}

                            <TelefoneDelegacia onPress={() => {
                                let telnumero = 'tel:' + closestDelegacias[1].telefone;
                                Linking.openURL(telnumero);
                            }} />
                        </View>
                        <Text style={styles.linhacolor}>     ————————————————————————</Text>

                        <View style={styles.DelegaciasProximasButtons} /* 1º Delegacia */>
                            <MapSVG />
                            {closestDelegacias.length > 0 && closestDelegacias[0].nameabrev && (
                                <View style={{ width: '60%' }}>
                                    <Text style={styles.NomedaDelegaciaText}>{closestDelegacias[2].nameabrev}</Text>
                                    {/* Adicione mais informações da delegacia conforme necessário */}
                                </View>
                            )}

                            <TelefoneDelegacia onPress={() => {
                                let telnumero = 'tel:' + closestDelegacias[2].telefone;
                                Linking.openURL(telnumero);
                            }} />
                        </View>

                    </View>
                </View>


                <Text style={styles.TextNumeroDeEmergencia}>
                    Mapa
                </Text>

                <View /* Mapa */ >
                    <TouchableOpacity onPress={() => navigation.navigate('HomeMap')}>
                        {location && (
                            <MapView
                                ref={mapRef}
                                style={styles.Mapa}
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

                            </MapView>
                        )}
                    </TouchableOpacity>

                </View>
            </View>

        </SafeAreaView >
    )
}
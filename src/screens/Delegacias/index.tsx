import { View, Text, TouchableOpacity, ScrollView, FlatList, TextInput, Linking } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./style";
import OROS from "../../components/Home/OROS";
import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import { markers } from "../HomeInicial/markers";
import Relogio24hours from "../../../assets/BotoesDelegacias/relogio24hours.svg"
import Telefone from "../../../assets/BotoesDelegacias/telefone.svg"
import GoBack from "../../../assets/BotoesDelegacias/GoBack.svg"

interface BOItem {
    id: number;
    data_ocorrido: string;
    situacao: string;
    natureza: string;
    Situacao: string
}

export default function Delegacias({ navigation }: any) {

    const { user } = useAuth();
    const iddousuario = user?.id;

    const [BOList, setBOList] = useState<BOItem[]>([])
    const [searchTerm, setSearchTerm] = useState<string>('');

    const filteredMarkers = markers.filter(marker =>
        marker.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (

        <SafeAreaView style={styles.areaview}>

            <View style={styles.header}>

                <TouchableOpacity onPress={() => navigation.goBack()}>
                    <GoBack height={40} width={40} style={styles.teste} />
                </TouchableOpacity>

                <Text style={styles.TextRegisto}>Delegacias de Manaus</Text>

            </View>

            <TextInput
                style={styles.searchBar}
                placeholder="Pesquisar..."
                value={searchTerm}
                onChangeText={setSearchTerm}
            />

            <View style={styles.ViewAlert}>

                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={filteredMarkers}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.name}>{item.name}</Text>

                            <View style={styles.informations}>
                                <Relogio24hours />

                                {item.time == "24hours" ?
                                    <Text> Aberta 24h</Text> : <Text> Das 8h00 até às 17h00</Text>
                                }
                            </View>

                            <TouchableOpacity style={styles.informations} onPress={() => {
                                const number = item.telefone
                                Linking.openURL('tel: ' + number)

                            }}>
                                <Telefone />
                                <Text>{item.telefone}</Text>
                            </TouchableOpacity>

                        </View>
                    )}
                />

            </View>

            <OROS style={{ marginTop: '5%', marginBottom: '5%' }} />
        </SafeAreaView>
    );
}

import { View, Text, TouchableOpacity, ScrollView, FlatList } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Obos from "../../components/AuthSVG/obos";
import OROS from "../../components/Home/OROS";
import { getBOList } from "../../data/BO";
import { useEffect, useState } from "react";
import { useAuth } from "../../contexts/auth";


interface BOItem {
    id: number;
    data_ocorrido: string;
    situacao: string;
    natureza: string;
    Situacao: string
    // Adicione outras propriedades conforme necessário
}


export default function Historico({ navigation }: any) {

    const { user } = useAuth();
    const iddousuario = user?.id;

    const [BOList, setBOList] = useState<BOItem[]>([])


    useEffect(() => {
        if (iddousuario) {
            getBOList(iddousuario)
                .then(data => {
                    setBOList(data)
                })
                .catch(error => {
                    // Tratar o erro
                });
        }
    }, [iddousuario]);

    return (

        <SafeAreaView style={styles.areaview}>
            <Text style={styles.TextRegisto}>Histórico de B.Os</Text>

            <View style={styles.ViewAlert}>


                <FlatList showsVerticalScrollIndicator={false}
                    data={BOList}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => {
                        let data = new Date(item.data_ocorrido);
                        let dia = data.getDate();
                        let mes = data.getMonth() + 1;
                        let ano = data.getFullYear();
                        let hora = data.toLocaleString('pt-BR', { timeZone: "America/Manaus", hour: "2-digit", minute: "2-digit" });
                        return (
                            <TouchableOpacity
                                style={styles.DelegaciasProximasButtons}
                                onPress={() => navigation.navigate('BoDetalhes', { item })}
                            >
                                <View style={{ width: '60%' }}>
                                    <Text style={styles.Natureza}>{item.natureza}  </Text>
                                    <Text style={styles.NomedaDelegaciaText2}>Registrado {`${dia}/${mes}/${ano}`}, {hora} </Text>
                                    <Text style={styles.FuncionamentoDelegacia}>Situação: {item.Situacao}</Text>
                                </View>

                            </TouchableOpacity>




                        )
                    }}
                />

            </View>


            <OROS style={{ marginTop: '5%', marginBottom: '5%' }} />
        </SafeAreaView>
    );
}

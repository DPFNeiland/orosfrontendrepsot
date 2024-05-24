import React from 'react';
import { View, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { styles } from './StylesBoDetalhes';

export default function BoDetalhes({ route, navigation }: any) {
    const { item } = route.params;
    let data = new Date(item.data_ocorrido);
    let dia = data.getDate();
    let mes = data.getMonth() + 1;
    let ano = data.getFullYear();
    let hora = data.toLocaleString('pt-BR', { timeZone: "America/Manaus", hour: "2-digit", minute: "2-digit" });

    return (
        <SafeAreaView style={styles.areaview}>
            <Text style={styles.TextRegisto}>Detalhes do B.O</Text>
            <View style={styles.ViewAlert}>
                <Text style={styles.Natureza}>Natureza: {item.natureza}</Text>
                <Text style={styles.NomedaDelegaciaText2}>Registrado em {`${dia}/${mes}/${ano}`} às {hora}</Text>
                <Text style={styles.FuncionamentoDelegacia}>Situação: {item.situacao}</Text>
                {/* Adicione outros detalhes conforme necessário */}
            </View>
        </SafeAreaView>
    );
}

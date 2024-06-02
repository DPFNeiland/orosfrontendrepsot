import React from "react"
import { View, Text, Linking } from "react-native"
import { styles } from "./styles"
import TelefoneDelegacia from "../Home/TelefineDelegacia"

type BOtaoTelefones = {
    numero: string,
    subdescricao: string,
    descricao: string
    color: string
}


export function BOtaoTelefones({ numero, subdescricao, descricao, color }: BOtaoTelefones) {


    return (
        <View style={styles.Botao}>
            <View>
                <View style={{ height: '30%' }}>
                    <View style={styles.TextAlinhado}>
                        <View style={{ backgroundColor: color, borderRadius: 10, width: 50, height: '110%',  }}>
                            <Text style={{ fontSize: 15, alignSelf: 'center' }}>{numero}</Text>
                        </View>
                        <Text style={styles.TextRegisto}>{subdescricao}</Text>
                    </View>
                </View>
                <View style={styles.TextAlinhado}>
                    <Text>A</Text>
                    <Text>{descricao}</Text>
                </View>
            </View>


            <TelefoneDelegacia onPress={()=>{
                let telnumero = 'tel:' + numero;
                Linking.openURL(telnumero);
            }} />
        </View>
    )

}
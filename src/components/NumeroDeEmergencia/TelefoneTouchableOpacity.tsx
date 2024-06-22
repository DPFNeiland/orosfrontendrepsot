import React, { useState } from "react"
import { View, Text, Linking, TouchableOpacity, ScrollView } from "react-native"
import { styles } from "./styles"
import TelefoneDelegacia from "../Home/TelefineDelegacia"
import { Arrow } from "../../../assets/ListaTelefones/Arrow"
import { ArrowDown } from "../../../assets/ListaTelefones/ArrowDown"

type BOtaoTelefones = {
    numero: string,
    subdescricao: string,
    descricao: string
    color: string
}


export function BOtaoTelefones({ numero, subdescricao, descricao, color }: BOtaoTelefones) {

    const [hideDecription, sethideDecription] = useState(true)


    return (
        <>
            {hideDecription &&
                <View style={styles.Botao}>

                    <View>
                        <View >
                            <View style={styles.TextAlinhado}>
                                <View style={{ backgroundColor: color, borderRadius: 10, width: 50, height: '110%', }}>
                                    <Text style={{ fontSize: 15, alignSelf: 'center' }}>{numero}</Text>
                                </View>
                                <Text style={styles.TextRegisto}>{subdescricao}</Text>
                            </View>
                        </View>
                        <View style={styles.TextAlinhado}>
                            <TouchableOpacity onPress={() => { sethideDecription(!hideDecription) }}>
                                {
                                    hideDecription ? <Arrow /> : <ArrowDown />
                                }
                            </TouchableOpacity>
                            <Text>Descrição</Text>
                        </View>



                    </View>


                    <TelefoneDelegacia onPress={() => {
                        let telnumero = 'tel:' + numero;
                        Linking.openURL(telnumero);
                    }} />

                </View>
            }

            {!hideDecription &&
                <View style={styles.Botao2}>

                    <View>
                        <View >
                            <View style={styles.TextAlinhado}>
                                <View style={{ backgroundColor: color, borderRadius: 10, width: 50, height: '110%', }}>
                                    <Text style={{ fontSize: 15, alignSelf: 'center' }}>{numero}</Text>
                                </View>
                                <Text style={styles.TextRegisto}>{subdescricao}</Text>
                            </View>
                        </View>
                        <View style={styles.TextAlinhado}>
                            <TouchableOpacity onPress={() => { sethideDecription(!hideDecription) }}>
                                {
                                    hideDecription ? <Arrow /> : <ArrowDown />
                                }
                            </TouchableOpacity>
                            
                            <ScrollView style={{ width: '85%' }}>
                                <Text>{descricao}</Text>
                            </ScrollView>
                        </View>



                    </View>


                    <TelefoneDelegacia onPress={() => {
                        let telnumero = 'tel:' + numero;
                        Linking.openURL(telnumero);
                    }} />

                </View>

            }
        </>
    )

}
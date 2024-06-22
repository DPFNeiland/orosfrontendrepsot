import { Dimensions, StyleSheet } from "react-native"

const { width, height } = Dimensions.get("window");

const tamanhodotexto = 20
const outraconstante = 13 / tamanhodotexto
const outraconstanteparte2 = 20 / tamanhodotexto

export const styles = StyleSheet.create({
    areaview: {
        flex: 1,
        alignItems: 'center',
    },

    TextRegisto: {
        fontFamily: 'GothamMedium',
        fontSize: tamanhodotexto,
    },

    Botao: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        width: width * 0.8,
        height: 70,
        backgroundColor: 'white',
        elevation: 1,
        borderColor: '#C7D1ED',
        borderWidth: 2,
        borderRadius: 25
    }

})
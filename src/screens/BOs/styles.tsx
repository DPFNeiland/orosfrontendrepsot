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
        marginTop: '7.5%',
        fontFamily: 'GothamMedium',
        fontSize: tamanhodotexto,
    },

    TextRandom: {
        marginTop: '5%',
        fontFamily: 'GothamMedium',
        fontSize: tamanhodotexto * 0.7,
        marginHorizontal: '5%',
        width: '80%'

    },

    SubTextRandom: {
        marginTop: '5%',
        fontFamily: 'GothamLight',
        fontSize: tamanhodotexto * 0.8,
        marginHorizontal: '5%',
        width: '80%'
    },

    Button: {
        backgroundColor: "#EFF3FF",
        width: width * 0.83,
        height: height * 0.06,
        borderRadius: 10,
        elevation: 3,
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: "5%",
    },

    buttonLogin: {
        color: "white",
        fontSize: tamanhodotexto * outraconstanteparte2,
        fontWeight: 'bold',
        fontFamily: 'GothamLight',
        borderColor: '#D2DBF3',
        borderWidth: 1,
        borderRadius: 13
    },

    ButtonTextRandom: {
        fontFamily: 'GothamMedium',
        fontSize: tamanhodotexto * 0.8,
    },

    ViewAlert: {
        alignItems: 'flex-start',
        justifyContent: 'center',
        width: width * 0.8,
        marginTop: '5%',
        flexDirection: 'column',
        borderColor: '#C7D1ED',
        borderWidth: 1,
        marginVertical: '5%',
        borderRadius: 12
    },

    Alertalert: {

        fontFamily: 'GothamMedium',
        fontSize: 13,
        color: 'red',
        marginHorizontal: '2%'
    },


})
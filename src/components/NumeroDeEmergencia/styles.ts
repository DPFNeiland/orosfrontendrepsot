import { Dimensions, StyleSheet } from "react-native"

const { width } = Dimensions.get("window");


export const styles = StyleSheet.create({
    areaview: {
        flex: 1,
        alignItems: 'center',
    },

    TextRegisto: {
        fontFamily: 'GothamMedium',
        fontSize: 16,
    },

    TextAlinhado: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 5,
    },

    Botao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.9,
        height: 90,
        backgroundColor: 'white',
        elevation: 1,
        borderColor: '#C7D1ED',
        borderWidth: 2,
        borderRadius: 25,
        marginTop: '5%',
        paddingHorizontal: 15
    },

    Botao2: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.9,
        height: 180,
        backgroundColor: 'white',
        elevation: 1,
        borderColor: '#C7D1ED',
        borderWidth: 2,
        borderRadius: 25,
        marginTop: '2%',
        paddingHorizontal: 15
    }
})
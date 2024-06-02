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
        gap: 5,
    },

    Botao: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.8,
        height: 90,
        backgroundColor: 'white',
        elevation: 1,
        borderColor: '#C7D1ED',
        borderWidth: 2,
        borderRadius: 25,
        marginTop: '2%',
        paddingHorizontal: 15
    }
})
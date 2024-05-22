import { Dimensions, StyleSheet } from "react-native"

const { width, height } = Dimensions.get("window");

const tamanhodotexto = 20
const outraconstante = 13 / tamanhodotexto
const outraconstanteparte2 = 20 / tamanhodotexto

export const styles = StyleSheet.create({
    areaview: {
        flex: 1,
        alignItems: 'center',
        height: height * 3
    },

    TextRegisto: {
        marginTop: '7.5%',
        fontFamily: 'GothamMedium',
        fontSize: tamanhodotexto,
    },

    TextconfirmBO: {
        fontFamily: 'GothamMedium',
        fontSize: 20,
        textAlign: 'center',

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
        backgroundColor: ''

    },

    Alertalert: {

        fontFamily: 'GothamMedium',
        fontSize: 13,
        color: 'red'
    },



    /*    */
    EmailSenha: {
        fontFamily: 'GothamLight',
        alignSelf: 'flex-start',
        marginTop: width * 0.03,
        fontSize: height * 0.02,
    },

    GmailComImagem: {
        borderWidth: 1,
        borderColor: '#003470',
        borderRadius: 10, // Isso vai arredondar as bordas
        flexDirection: 'row',
        alignItems: 'center',
        width: width * 0.8,
        marginTop: '1%',

    },

    Input: {
        alignSelf: "flex-start",
        textAlignVertical: 'center',
        marginLeft: width * 0.01,
        height: height * 0.05,
        width: "80%",
        fontFamily: 'GothamLight',
        color: "#808080"

    },


    errorText: {
        color: '#BA0808',
        fontSize: 14,
        fontFamily: 'GothamLight',
        width: width * 0.8,
        marginTop: '1%',

    },

    buttonDate: {
        alignSelf: "flex-start",
        marginLeft: width * 0.01,
        height: height * 0.05,
        width: "80%",
        fontFamily: 'GothamLight',
        alignItems: 'center',

    },

    InputDescricao: {
        alignSelf: "flex-start",
        textAlignVertical: 'center',
        marginLeft: width * 0.01,
        width: "80%",
        fontFamily: 'GothamLight',

    },


    Desc: {
        borderWidth: 1,
        borderColor: '#003470',
        borderRadius: 10, // Isso vai arredondar as bordas
        flexDirection: 'row',
        width: width * 0.8,
        marginTop: '1%',
        height: height * 0.125

    },

    DescLogo: {
        marginTop: '2%',
        marginLeft: '2%'
    },

    modal: {
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        height: '20%',
        marginVertical: '75%',
        marginHorizontal: '5%',
        elevation: 30,
        borderRadius: 25,
        paddingHorizontal: 10,
        paddingVertical: 5,
        gap: 20
    },

    viewbotoes: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 40
    },

    naobutton: {
        width: '38.9%',
        height: '140%',
        borderColor: '#9CB0E8',
        borderWidth: 2,
        borderRadius: 24
    },

    simbutton: {
        width: '38.9%',
        height: '140%',
        backgroundColor: '#9CB0E8',
        borderRadius: 24,
        fontWeight: 'bold'
    },

    textbutton: {
        marginTop: '7.5%',
        fontFamily: 'GothamMedium',
        fontSize: 18,
        textAlign: 'center',

    }


})
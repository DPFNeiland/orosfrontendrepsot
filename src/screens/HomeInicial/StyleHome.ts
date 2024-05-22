import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

const dezdivididopor36 = 5 / 18

export const styles = StyleSheet.create({


  geral: {
    flex: 1
  },

  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    position: "absolute",
    left: 0,
    right: 0,
    top: 0,
    height: 360,
    backgroundColor: '#142944',
  },


  oros: {
    color: "#FFFFFF",
    fontSize: 32,
  },

  bemVindoAoOros: {
    width: '100%',
    height: '45%',
    alignItems: "center",
    position: "absolute",

  },

  view: {
    width: "80%",
    height: height * 0.44,
    backgroundColor: "white",
    alignItems: "center",
    elevation: 4,
    borderRadius: 12,

  },

  login: {
    fontSize: width * 0.07,
    color: "#1B2F49",
    marginTop: height * 0.04,
    marginBottom: height * 0.02,
    textDecorationLine: 'underline',
    fontFamily: 'MBFSpace',
    // fontWeight: 'bold'

  },

  EmailSenha: {
    fontFamily: 'GothamLight',
    color: "#808080",
    alignSelf: 'flex-start',
    marginLeft: width * 0.1,
    marginTop: width * 0.03,
    fontSize: height * 0.02,
  },

  GmailComImagem: {
    flexDirection: 'row',
    marginRight: '-4%',
    alignItems: 'center',
    width: "80%"
  },

  SenhaComImagem: {
    width: "90%",
    marginRight: '10%',
    flexDirection: 'row',
    justifyContent: 'space-between'

  },

  InputComCadeado: {
    flexDirection: 'row',
    marginLeft: '14%',

  },

  buttonLogin: {
    backgroundColor: "#003470",
    color: "white",
    width: 135,
    height: 35,
    borderRadius: 20,
    elevation: 12,
    fontSize: 20,
    textAlign: "center",
    marginTop: "5%",
    fontWeight: 'bold',

  },

  Button: {
    alignItems: 'center',
    textAlign: "center",
    justifyContent: 'center',

  },

  Input: {
    alignSelf: "flex-start",
    marginLeft: width * 0.01,
    width: "80%",
    fontFamily: 'GothamLight',
  },

  EsqueceuSuaSenha: {
    marginLeft: "40%",
    color: "#BA0808",
    textDecorationLine: 'underline',
    marginTop: width * 0.02,
    justifyContent: 'flex-end',
    fontFamily: 'GothamLight',

  },

  NaoPossuiUmaContaAindaCadastrese: {
    flexDirection: 'row',
  },

  NaoPossuiUmaContaAinda: {
    fontSize: height * 0.015,
    marginTop: width * 0.02,
    color: "#808080",
    fontFamily: 'GothamLight',

  },

  Cadastrase: {
    fontSize: height * 0.015,
    marginTop: width * 0.02,
    color: "#0C4EA3",
    textDecorationLine: 'underline',
    fontWeight: 'bold',


  },

  EmergenciaContate: {
    color: "#142944",
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: width * 0.07,
    marginBottom: width * 0.04

  },

  ViewEmergence: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: '100%'
  },

  EmergenciaContateBotoes: {
    alignItems: 'center',
  },

  BombeiroPoliciAmbulancia: {
    color: "#142944",
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  errorText: {
    color: '#BA0808',
    fontSize: 14,
    fontFamily: 'GothamLight',

  },

  containermap: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },

  map: {
    flex: 1,
    width: '100%',
    height: height
  },

  botoesMenu: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    height: height * 0.14625,
    width: width * 1,
    backgroundColor: '#EFF3FF',
    borderColor: '#B1D5FF',
    borderWidth: 1,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  BottomView: {
    alignItems: 'center'
  },

  MarginText: {
    fontFamily: 'GothamLight',
    fontWeight: '600'

  },

  ViewDelegacaia: {
    padding: 10
  },

  TextDelegacia: {
    fontSize: 10,
  },

  BottomMicrofone: {
    height: height * 0.125,
    width: 100,
    backgroundColor: '#EFF3FF',
    borderColor: '#B1D5FF',
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '25%',
    borderRadius: 500,
  }
});



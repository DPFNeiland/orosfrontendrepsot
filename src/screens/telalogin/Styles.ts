import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({


  geral: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
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
    width: width,
    height: '36%',
    alignItems: "center",
    justifyContent: 'center'

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
    color: "#858585",
    marginTop: height * 0.04,
    marginBottom: height * 0.02,
    textDecorationLine: 'underline',
    fontFamily: 'RoundoLight',
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
    borderWidth: 1,
    borderColor: '#003470',
    borderRadius: 10, // Isso vai arredondar as bordas
    flexDirection: 'row',
    alignItems: 'center',
    width: width * 0.8,
    marginTop: '1%',
    
  },

  SenhaComImagem: {
    marginTop: '1%',
    width: width * 0.8,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#003470',
    borderRadius: 10, // Isso vai arredondar as bordas
    
  },

  InputComCadeado: {
    alignItems: 'center',
    flexDirection: 'row',
    marginLeft: '5%',

  },

  buttonLogin: {
    color: "white",
    fontSize: 20,
    fontWeight: 'bold',
    fontFamily: 'GothamLight',
  },
  Button: {
    backgroundColor: "#003470",
    width: width * 0.83,
    height: height*0.06,
    borderRadius: 10,
    elevation: 12,
    alignItems: 'center', // Centraliza o conteúdo horizontalmente
    justifyContent: 'center', // Centraliza o conteúdo verticalmente
    marginTop: "5%",
  },


  Input: {
    alignSelf: "flex-start",
    marginLeft: width * 0.01,
    height: height*0.05,
    width: "80%",
    fontFamily: 'GothamLight',

  },

  EsqueceuSuaSenha: {
    color: "#F30E0E",
    textDecorationLine: 'underline',
    marginTop: width * 0.02,
    width: width*0.8,
    fontFamily: 'GothamLight',
    fontWeight: '300',
    textAlign: 'right'
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
    fontFamily: 'GothamMedium',
    color: "#A0AFD6",
    textDecorationLine: 'underline',


  },

  EmergenciaContate: {
    color: "#142944",
    fontWeight: 'bold',
    fontStyle: 'italic',
    marginTop: width * 0.07,
    marginBottom: width * 0.04

  },

  ViewEmergence: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    width: width
  },

  EmergenciaContateBotoes: {
    alignItems: 'center',
  },

  BombeiroPoliciAmbulancia: {
    fontFamily: 'GothamLight',
    color: "#142944",
    fontWeight: 'bold',
    fontStyle: 'italic',
  },

  errorText: {
    color: '#BA0808',
    fontSize: 14,
    fontFamily: 'GothamLight',
    width: width * 0.8,
    marginTop: '1%',

  },

  BemVindoAoText: {
    marginTop: '20%',
    fontFamily: 'RoundoMedium',
    fontSize: 16,
    fontWeight: '400',
    color: '#9EB0C8'
  },

  AreaLogin: {
    backgroundColor: 'white',
    height: '75%',
    borderRadius: 20,
    alignItems: 'center'

  },

  Openeye: {
    marginRight: '5%',
  }

});

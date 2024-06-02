import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");
export const styles = StyleSheet.create({


  geral: {
    flex: 1,
    alignItems: 'center'
  },

  Header: {
    width: width,
    height: height * 0.0875,
    backgroundColor: '#003470',
    borderBottomLeftRadius: 12,
    borderBottomRightRadius: 12,
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row'
  },



  TouchablePerfil: {
    backgroundColor: 'white',
    width: width * 0.26,
    height: height * 0.04,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 15
  },

  TextPerfil: {
    fontSize: 16,
    fontFamily: 'GothamLight',
    fontWeight: '900'
  },

  TextNumeroDeEmergencia: {
    marginVertical: '4%',
    fontSize: 16,
    fontFamily: 'GothamLight',
    fontWeight: '900',

  },

  ViewNumerodeEmergencia: {
    marginTop: '2%',
    width: width * 0.8,
    height: height * 0.4,
  },

  Area1: {
    marginTop: '4%',
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  Area2: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },

  ButtonEmergencia: {
    flexDirection: 'row',
    borderRadius: 50,
    width: 159,
    height: 42,
    alignItems: 'center',
    justifyContent: 'space-evenly',
    borderColor: '#E0E6F7',
    borderWidth: 2,
    elevation: 1,
    backgroundColor: 'white'

  },

  TextButtonEmergencia: {
    fontSize: 16,
    fontFamily: 'GothamMedium',

  },

  HistoricoChamadaButton: {
    marginTop: '5%',
    width: '100%',
    flexDirection: 'row',
    borderRadius: 50,
    height: 42,
    alignItems: 'center',
    padding: 10,
    justifyContent: 'space-around',
    borderColor: '#E0E6F7',
    borderWidth: 2,
    elevation: 1,
    backgroundColor: 'white'
  },

  TextButtonHistorico: {
    fontSize: 14,
    fontFamily: 'GothamMedium',

  },

  DelegaciasProximasButtons: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.8,
    height: 42,
    alignItems: 'center',
    elevation: 1,
  },


  NomedaDelegaciaText: {
    fontSize: 16,
    color: '#343434',
    fontFamily: 'GothamMedium',

  },

  FuncionamentoDelegacia: {
    color: '#638EFF',
    fontFamily: 'GothamMedium',

  },

  total: {
    backgroundColor: 'white',
    elevation: 1,
    borderColor: '#C7D1ED',
    borderWidth: 1,
    borderRadius: 25
  },

  linhacolor: {
    color: '#E3E8F6'
  },

  Mapa: {
    width: 0.8*width,
    height: height*0.175,

  }

});



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

  Alertalert: {

    fontFamily: 'GothamMedium',
    fontSize: 13,
    color: 'red',
    marginHorizontal: '2%'
  },


  total: {
    backgroundColor: 'white',
    elevation: 1,
    borderColor: '#C7D1ED',
    borderWidth: 1,
    borderRadius: 25
  },



  DelegaciasProximasButtons: {
    marginTop: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: width * 0.8,
    height: 70,
    alignItems: 'center',
    backgroundColor: 'white',
    elevation: 1,
    borderColor: '#C7D1ED',
    borderWidth: 2,
    borderRadius: 25
  },


  NomedaDelegaciaText: {
    fontSize: 16,
    color: '#343434',
    fontFamily: 'GothamMedium',

  },

  FuncionamentoDelegacia: {
    color: '#1B2F49',
    fontFamily: 'GothamLight',

  },

  NomedaDelegaciaText2: {
    fontSize: 11,
    color: '#343434',
    fontFamily: 'GothamMedium',

  },

  Natureza: {
    fontSize: 14,
    color: '#black',
    fontFamily: 'GothamMedium',

  },

  linhacolor: {
    color: '#E3E8F6'
  },

  ViewAlert: {
    marginTop: '5%',
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '85%',
  },

  item: {
    alignItems: 'flex-start',
    padding: "2.5%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#9CB0E8',
    marginVertical: '1%',
    gap: 5
  },

  informations :{
    flexDirection: 'row',
    gap: 5
  },
  
  name: {
    fontSize: 14,
    color: '#black',
    fontFamily: 'GothamMedium',
    flex: 1,
    padding: '2%',

  },
  searchBar: {
    height: 40,
    width: '85%',
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingLeft: 8,
    marginHorizontal: '2%',
},

header: {
  flexDirection: 'row', 
  justifyContent: 'center', 
  alignItems: 'center', 
  padding: 10 
},

teste: {
  height: 30,
  width: 30,
}

})
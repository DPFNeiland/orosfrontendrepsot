import { StyleSheet, Dimensions } from "react-native";

const { width, height } = Dimensions.get("window");

export const styles = StyleSheet.create({
  geral: {
    flex: 1,
  },
  map: {
    flex: 1,
    width: '100%',
    height: height,
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
    alignItems: 'center',
    flexDirection: 'column'
  },
  MarginText: {
    fontFamily: 'GothamLight',
    fontWeight: '600',
  },
  ViewDelegacaia: {
    padding: 10,
    backgroundColor: '#D9D9D9', 
    borderRadius: 20, 
    shadowColor: '#000',
    alignItems: 'center',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    width: 150,
  },
  TextDelegacia: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center', 
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
  },
});

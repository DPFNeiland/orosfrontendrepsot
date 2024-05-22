import React from "react";
import { View, Text} from "react-native";
import { styles } from "../Splash/Styles";
import Oros from "../../components/AuthSVG/oros";
import Obos from "../../components/AuthSVG/obos";

export default function Splash({navigation}: any) {

  return (
    <View style={styles.container}>
        <Oros></Oros>
        <Obos></Obos>  
    </View>
  );
}           
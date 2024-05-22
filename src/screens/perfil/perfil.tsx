import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Obos from "../../components/AuthSVG/obos";
import OROS from "../../components/Home/OROS";
import { useAuth } from "../../contexts/auth";


export default function Perfil({ navigation }: any) {


    const { signOut, user } = useAuth()


    const handlesignOut = async () => {
        signOut()
      };  //  <

    return (

        <SafeAreaView style={styles.areaview}>



            
            <TouchableOpacity style={styles.Button} onPress={handlesignOut}>
                <Text style={styles.ButtonTextRandom}>SignOut</Text>
            </TouchableOpacity>

            <OROS style={{ marginTop: '50%' }} />

        </SafeAreaView>
    );
}

import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OROS from "../../components/Home/OROS";
import { styles } from "./style";
import HistoricoChamada from "../../components/Home/HistoricoEmergencia";
import TelefoneDelegacia from "../../components/Home/TelefineDelegacia";
import { BOtaoTelefones } from "../../components/NumeroDeEmergencia/TelefoneTouchableOpacity";

export default function ListaDeTelefones({ navigation }: any) {


    return (

        <SafeAreaView style={styles.areaview}>
            <Text style={styles.TextRegisto}>Mais números de emergência</Text>

            <BOtaoTelefones
                numero="181"
                subdescricao="Denúncia Anônima"
                descricao="Descrição"
                color="#FFC01D"
            />

            <BOtaoTelefones
                numero="190"
                subdescricao="Polícia Militar"
                descricao="Descrição"
                color="#A0BAFF"
            />

            <BOtaoTelefones
                numero="192"
                subdescricao="SAMU"
                descricao="Descrição"
                color="#FF0000"
            />

            <BOtaoTelefones
                numero="193"
                subdescricao="Corpo de Bombeiros"
                descricao="Descrição"
                color="#FFA800"
            />

        </SafeAreaView>
    );
}

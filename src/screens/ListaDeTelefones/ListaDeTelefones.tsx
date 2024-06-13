import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import OROS from "../../components/Home/OROS";
import { styles } from "./style";
import HistoricoChamada from "../../components/Home/HistoricoEmergencia";
import TelefoneDelegacia from "../../components/Home/TelefineDelegacia";
import { BOtaoTelefones } from "../../components/NumeroDeEmergencia/TelefoneTouchableOpacity";

export default function ListaDeTelefones({ navigation }: any) {


    return (

        <SafeAreaView style={styles.areaview}>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <Text style={styles.TextRegisto}>Mais números de emergência</Text>

                <BOtaoTelefones
                    numero="181"
                    subdescricao="Denúncia Anônima"
                    descricao="O 190 deve ser utilizado em situações de emergência policial, ou seja, crimes em curso ou urgências. A ligação é gratuita."
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


                <BOtaoTelefones
                    numero="100"
                    subdescricao="Direitos Humanos"
                    descricao="Descrição"
                    color="#ABFFD7"
                />

                <BOtaoTelefones
                    numero="180"
                    subdescricao="Atendimento à Mulher"
                    descricao="Descrição"
                    color="#FF00FF"
                />

                <BOtaoTelefones
                    numero="151"
                    subdescricao="PROCON"
                    descricao="Descrição"
                    color="#FFE500"
                />

                <BOtaoTelefones
                    numero="197"
                    subdescricao="Polícia Civil"
                    descricao="Descrição"
                    color="#577FF5"
                />

                <BOtaoTelefones
                    numero="198"
                    subdescricao="Polícia Rodoviária Estadual"
                    descricao="Descrição"
                    color="#FFAC89"
                />

                <BOtaoTelefones
                    numero="191"
                    subdescricao="Polícia Rodoviária Federal"
                    descricao="Descrição"
                    color="#DFBB3A"
                />

                <BOtaoTelefones
                    numero="154"
                    subdescricao="Detran"
                    descricao="Descrição"
                    color="#A3A086"
                />

                <BOtaoTelefones
                    numero="193"
                    subdescricao="Guarda Municipal"
                    descricao="Descrição"
                    color="#00D4AE"
                />

                <BOtaoTelefones
                    numero="153"
                    subdescricao="IBAMA"
                    descricao="Descrição"
                    color="#41CF60"
                />

                <BOtaoTelefones
                    numero="158"
                    subdescricao="Alô Trabalho"
                    descricao="Descrição"
                    color="#FF6B00"
                />

                <BOtaoTelefones
                    numero="199"
                    subdescricao="Defesa Civl"
                    descricao="Descrição"
                    color="#AB9B7B"
                />
            </ScrollView>
        </SafeAreaView>
    );
}

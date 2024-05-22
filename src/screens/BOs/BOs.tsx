import { View, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Obos from "../../components/AuthSVG/obos";
import OROS from "../../components/Home/OROS";


export default function BOs({ navigation }: any) {


    return (

        <SafeAreaView style={styles.areaview}>
            <Text style={styles.TextRegisto}>Registro de B.O</Text>

            <Text style={styles.TextRandom}>
                Para efetuar o registro, é ncessário que preencha uma série de perguntas.
            </Text>

            <Text style={styles.TextRandom}>
                Abaixo, há a ordem do que será requisitado para conclusão do registro.

            </Text>

            <Text style={styles.SubTextRandom}>
                Data e hora, local do ocorrido, descrição do ato, anexos, envolvidos, objetos e revisão.
            </Text>





            <View style={styles.ViewAlert}>

                <Text style={styles.Alertalert}>
                    ALERTA: Você NÃO PODE registrar a ocorrência online se:
                </Text>

                <Text></Text>
                <Text style={styles.Alertalert}>
                    - A pessoa que comunica o fato ou o suspeito de praticar o crime for menor de idade;
                </Text>

                <Text style={styles.Alertalert}>
                    - Houve subtração de veículo automotor;
                </Text>

                <Text style={styles.Alertalert}>
                    - Ocorrência envolvendo arma de fogo, munições, explosivos, medicamentos ou produtos químicos.
                </Text>

                <Text></Text>
                <Text style={styles.Alertalert}>
                    Nestes casos, você deve procurar uma delegacia e registrar a ocorrência pessoalmente.
                </Text>




            </View>
            <TouchableOpacity style={styles.Button} onPress={() => navigation.navigate('BOs2')}>
                <Text style={styles.ButtonTextRandom}>Realizar registro de B.O</Text>
            </TouchableOpacity>

            <OROS style={{ marginTop: '50%' }} />

        </SafeAreaView>
    );
}

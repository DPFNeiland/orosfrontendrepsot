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
                    descricao="Usado em casos onde o cidadão testemunha ou tem conhecimendo de algum delito, não sendo focado em emergências. Atende de forma ininterrupta e sigilosa."
                    color="#FFC01D"
                />

                <BOtaoTelefones
                    numero="190"
                    subdescricao="Polícia Militar"
                    descricao="O 190 deve ser utilizado em situações de emergência policial, ou seja, crimes em curso ou urgências. A ligação é gratuita."
                    color="#A0BAFF"
                />

                <BOtaoTelefones
                    numero="192"
                    subdescricao="SAMU"
                    descricao="É um serviço brasileiro de atendimento médico pré-hospitalar, acionado em casos de urgência ou emergência, com risco de morte, sequela ou sofrimento intenso."
                    color="#FF0000"
                />

                <BOtaoTelefones
                    numero="193"
                    subdescricao="Corpo de Bombeiros"
                    descricao="Com o 193 você aciona o Corpo de Bombeiros. Ao ligar, mantenha a calma e informe o seu nome, endereço e o que está ocorrendo. Use-o em emergências como: incêndios, sinistros, desabamentos, afogamentos, terremotos, soterramentos."
                    color="#FFA800"
                />


                <BOtaoTelefones
                    numero="100"
                    subdescricao="Direitos Humanos"
                    descricao="O serviço pode ser considerado como “pronto socorro” dos direitos humanos e atende graves situações de violações que acabaram de ocorrer ou que ainda estão em curso, acionando os órgãos competentes e possibilitando o flagrante. Funciona 24h todos os dias, e qualquer pessoa pode acessar."
                    color="#ABFFD7"
                />

                <BOtaoTelefones
                    numero="180"
                    subdescricao="Atendimento à Mulher"
                    descricao="Serviço criado para o combate à violência contra a mulher e oferece três tipos de atendimento: registros de denúncias, orientações para vítimas de violência e informações sobre leis e campanhas. Funciona 24 horas por dia, todos os dias da semana."
                    color="#FF00FF"
                />

                <BOtaoTelefones
                    numero="151"
                    subdescricao="PROCON"
                    descricao="Qualquer problema/insatisfação com alguma empresa, loja ou fornecedor que desrespeite os direitos garantidos pelo Código de Defesa do Consumidor e outras regulamentações consumeristas, podem ser recebidos e tratados pelo Procon. Dentre os exemplos, pode-se citar má qualidade de produtos, taxa indevidas, dúvidas sobre cobrança e propaganda enganosa."
                    color="#FFE500"
                />

                <BOtaoTelefones
                    numero="197"
                    subdescricao="Polícia Civil"
                    descricao="Focado no acesso a informações públicas acerca de unidades de polícia e envio e acompanhamento de ocorrências que já estão em curso."
                    color="#577FF5"
                />

                <BOtaoTelefones
                    numero="198"
                    subdescricao="Polícia Rodoviária Estadual"
                    descricao="Dá acesso a informações como prevenção de acidentes, educação no trânsito, condições de veículos e documentação; fluidez do trânsito e atendimento de acidente de trânsito no local."
                    color="#FFAC89"
                />

                <BOtaoTelefones
                    numero="191"
                    subdescricao="Polícia Rodoviária Federal"
                    descricao="Telefone utilizado pela Polícia Rodoviária Federal onde a população pode ligar para informar sobre ocorrências nas rodovias federais como, por exemplo, crimes, acidentes ou irregularidades."
                    color="#DFBB3A"
                />

                <BOtaoTelefones
                    numero="154"
                    subdescricao="Detran"
                    descricao="Serviço focado em informações e denúncias relacionadas ao trânsito, podendo ser usado para busca de informações acerca da Carteira de Habilitação, infrações de trânsito e acompanhamento de ocorrências."
                    color="#A3A086"
                />

                <BOtaoTelefones
                    numero="153"
                    subdescricao="Guarda Municipal"
                    descricao="A Guarda Municipal atua no patrulhamento da cidade, servindo como prevenção constante a delitos e infrações, que podem se apresentar na forma de roubos ou mesmo pichações."
                    color="#00D4AE"
                />

                <BOtaoTelefones
                    numero="152"
                    subdescricao="IBAMA"
                    descricao="Para informar sobre desmatamento, incêndio florestal, denúncia sobre maus tratos ou venda ilegal de animais e todos os demais danos ao meio ambiente que não se enquadram como acidente ambiental. Funciona de segunda à sexta, das 07h00 às 19h00."
                    color="#41CF60"
                />

                <BOtaoTelefones
                    numero="158"
                    subdescricao="Alô Trabalho"
                    descricao="É um canal de comunicação direto entre cidadão e poder público que possibilita ao cidadão ter acesso a informações como: seguro-desemprego, abono salarial, aplicativo da CTPS Digital, legislação trabalhista, entre outros. Funciona de segunda-feira a sábado das 7h às 22h."
                    color="#FF6B00"
                />

                <BOtaoTelefones
                    numero="199"
                    subdescricao="Defesa Civil"
                    descricao="Pedidos de auxílio em casos de chuva forte, inundações e alagamentos podem ser feitos pela população diretamente pelo telefone de emergência 199, da Defesa Civil.                    "

                    color="#AB9B7B"
                />
                
            </ScrollView>
        </SafeAreaView>
    );
}

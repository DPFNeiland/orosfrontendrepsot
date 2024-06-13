import { View, Text, TouchableOpacity, TextInput, ScrollView, Modal } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { styles } from "./styles";
import Obos from "../../components/AuthSVG/obos";
import { Controller, useForm } from "react-hook-form";
import NaturezaCrime from "../../components/Home/naturezacrime";
import Horario from "../../components/Home/Horario";
import React, { useEffect, useState } from "react";
import DateTimePicker from '@react-native-community/datetimepicker'
import Calendar from "../../components/Home/Calendar";
import Cep from "../../components/AuthSVG/cep";
import Naturalidade from "../../components/AuthSVG/Naturalidade";
import UFEstado from "../../components/AuthSVG/UFestado";
import Logradouro from "../../components/AuthSVG/Logradouro";
import Numero from "../../components/AuthSVG/Numero";
import Complemento from "../../components/AuthSVG/Complemento";
import Bairro from "../../components/AuthSVG/Bairro";
import TipoLocal from "../../components/Home/TipoLocal";
import Descricao from "../../components/Home/Descricao";
import axios from "axios";
import { apiCriarBO } from "../../../services/BOapi/BO.endpoint";
import AwesomeAlert from "react-native-awesome-alerts";
import { useAuth } from "../../contexts/auth";
import GoBack from "../../../assets/BotoesDelegacias/GoBack.svg"


export default function BOs2({ navigation }: any) {

    const { control, handleSubmit, formState: { errors }, watch, setValue } = useForm();


    /* API VIA CEP */
    // const cep = watch('cep_ocorrido')

    // useEffect(() => {
    //     if (cep?.length === 8) {
    //         fetch(`https://viacep.com.br/ws/${cep}/json/`)
    //             .then(response => response.json())
    //             .then(data => {
    //                 if (data.localidade) {
    //                     setValue('municipioBO', data.localidade);
    //                 }
    //             });
    //     }
    // }, [cep, setValue]);

    /* FIM API VIA CEP */
    const [date, setDate] = useState(new Date());
    const [mode, setMode] = useState('date');
    const [show, setShow] = useState(false);


    const onChange = (event: any, selectedDate: any) => {
        const currentDate = selectedDate || date;
        setShow(false);
        setDate(currentDate);

    };


    const showMode = (currentMode: any) => {
        setShow(true);
        setMode(currentMode);

    };

    const showDatepicker = () => {
        showMode('date');

    };

    const formatDate = (date: any) => {
        const day = date.getDate().toString().padStart(2, '0');
        const month = (date.getMonth() + 1).toString().padStart(2, '0');
        const year = date.getFullYear();

        return `${year}-${month}-${day}`;
    };


    /* Cadastro BO */


    const { user } = useAuth()


    const handleCreateBO = async (data: any) => {

        const numeroeminteiro = watch('numeroerrado');
        const horadoocorrido = watch('hora_ocorrido');

        const dataFormatada = formatDate(date);

        const horaFormatada = horadoocorrido.padStart(5, '0') + ':00';

        const data_ocorrido = `${dataFormatada}T${horaFormatada}.000-04:00`;


        const dataWithUser = {
            ...data,
            userId: user?.id,
            numero: parseInt(numeroeminteiro),
            data_ocorrido,
            natureza
        };

        console.log(dataWithUser);

        try {
            const response = await axios.post(apiCriarBO, dataWithUser);
            console.log('Resposta da requisição:', response.data);

            navigation.navigate('Home');
            return response;
        } catch (error: any) {
            console.error('Erro na requisição:', error.response.data.message as string);
            throw error.response.data.message as string;
        }
    };


    /* Confirmar BO */
    const [showAlert, setShowAlert] = useState(false);

    const handleConfirmCreateBO = () => {
        setShowAlert(true);
    };

    const confirmCreateBO = async () => {
        setShowAlert(false);
        await handleSubmit(handleCreateBO)();

    };

    const [naturezadocrime, setNaturezaDoCrime] = useState(false)
    const [natureza, setNatureza] = useState("")

    return (

        <SafeAreaView style={styles.areaview}>
            <TouchableOpacity style={{ position: 'absolute', zIndex: 100, top: "5%", left: "3%" }} onPress={() => navigation.goBack()}>
                <GoBack />
            </TouchableOpacity>

            <ScrollView
                showsVerticalScrollIndicator={false}
            >

                <Text style={styles.TextRegisto}>    Registro de B.O</Text>

                {natureza == "" &&
                    <>
                        <Text style={styles.TextRandom}>
                            Natureza do Crime
                        </Text>

                        <Text style={styles.EmailSenha}>Tipo de crime</Text>
                        <View style={styles.GmailComImagem}>
                            <NaturezaCrime />

                            <TouchableOpacity
                                style={styles.Input}

                                onPress={() => {
                                    setNaturezaDoCrime(true)
                                }}
                            />

                            <Modal
                                animationType="slide"
                                transparent={true}
                                visible={naturezadocrime}

                            >
                                <View style={styles.modal}>
                                    <Text style={styles.TextconfirmBO}>Qual a natureza do crime?</Text>

                                    <View style={styles.viewbotoes}>
                                        <TouchableOpacity
                                            onPress={() => {
                                                setNaturezaDoCrime(false)
                                                setNatureza("Furto")
                                                console.log('Furto')
                                            }}
                                            style={styles.naobutton}
                                        >
                                            <Text style={styles.textbutton}>Furto</Text>
                                        </TouchableOpacity>



                                        <TouchableOpacity
                                            onPress={() => {
                                                setNaturezaDoCrime(false)
                                                setNatureza("Roubo")
                                                console.log('Roubo')
                                            }}
                                            style={styles.simbutton}
                                        >
                                            <Text style={styles.textbutton}>Roubo</Text>
                                        </TouchableOpacity>

                                    </View>
                                </View>
                            </Modal>


                        </View>
                    </>
                }


                {natureza != "" &&
                    <>


                        <Text style={styles.TextRandom}>
                            Natureza do Crime
                        </Text>

                        <Text style={styles.EmailSenha}>Tipo de crime</Text>
                        <View style={styles.GmailComImagem}>
                            <NaturezaCrime />

                            <Text
                                style={styles.Input}
                                onPress={() => {
                                    setNaturezaDoCrime(true)
                                }}
                            >
                                {natureza}



                            </Text>
                        </View>


                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={naturezadocrime}

                        >
                            <View style={styles.modal}>
                                <Text style={styles.TextconfirmBO}>Qual a natureza do crime?</Text>

                                <View style={styles.viewbotoes}>
                                    <TouchableOpacity
                                        onPress={() => {
                                            setNaturezaDoCrime(false)
                                            setNatureza("Furto")
                                            console.log('Furto')
                                        }}
                                        style={styles.naobutton}
                                    >
                                        <Text style={styles.textbutton}>Furto</Text>
                                    </TouchableOpacity>



                                    <TouchableOpacity
                                        onPress={() => {
                                            setNaturezaDoCrime(false)
                                            setNatureza("Roubo")
                                            console.log('Roubo')
                                        }}
                                        style={styles.simbutton}
                                    >
                                        <Text style={styles.textbutton}>Roubo</Text>
                                    </TouchableOpacity>

                                </View>
                            </View>
                        </Modal>

                        <Text style={styles.TextRandom}>
                            Quando Ocorreu?
                        </Text>

                        <Text style={styles.EmailSenha}>Horário</Text>
                        <View style={styles.GmailComImagem}>
                            <Text>   </Text>
                            <Horario />

                            <Controller

                                control={control}
                                render={({ field }) => (
                                    <TextInput
                                        style={styles.Input}
                                        onChangeText={(value) => field.onChange(value)}
                                        value={field.value}
                                        placeholder="19:57"
                                        placeholderTextColor="#808080"
                                    />
                                )}
                                name="hora_ocorrido"
                                rules={{ required: "Horário do crime é obrigatório" }}
                            />
                        </View>
                        {errors.hora_ocorrido && <Text style={styles.errorText}>{errors.hora_ocorrido.message as string}</Text>}






                        <Text style={styles.EmailSenha}>Data</Text>
                        <View style={styles.GmailComImagem}>
                            <Text>   </Text>
                            <Calendar />
                            <TouchableOpacity onPress={showDatepicker} style={styles.buttonDate}>
                                <Text style={styles.Input}>{date.toLocaleDateString()}</Text>
                            </TouchableOpacity>

                            {show && (
                                <DateTimePicker
                                    testID="dateTimePicker"
                                    value={date}
                                    mode={mode as unknown as undefined}
                                    is24Hour={true}
                                    display="default"
                                    onChange={onChange}
                                />
                            )}
                        </View>



                        <Text style={styles.TextRandom}>
                            Onde Ocorreu?
                        </Text>

                        <Text style={styles.EmailSenha}>CEP</Text>
                        <View style={styles.GmailComImagem}>
                            <Cep />

                            <Controller

                                control={control}
                                render={({ field }) => (
                                    <TextInput
                                        style={styles.Input}
                                        onChangeText={(value) => field.onChange(value)}
                                        value={field.value}
                                        placeholder="00000-000"
                                        placeholderTextColor="#808080"
                                    />
                                )}
                                name="cep_ocorrido"
                                rules={{ required: "Cep é obrigatório" }}
                            />
                        </View>
                        {errors.cep_ocorrido && <Text style={styles.errorText}>{errors.cep_ocorrido.message as string}</Text>}



                        <Text style={styles.EmailSenha}>UF (Estado)</Text>
                        <View style={styles.GmailComImagem}>
                            <UFEstado />

                            <Controller

                                control={control}
                                render={({ field }) => (
                                    <TextInput
                                        style={styles.Input}
                                        onChangeText={(value) => field.onChange(value)}
                                        value={field.value}
                                        placeholder="Amazonas"
                                        placeholderTextColor="#808080"
                                    />
                                )}
                                name="ufBO"
                                rules={{ required: "Estado é obrigatório" }}
                            />
                        </View>
                        {errors.ufBO && <Text style={styles.errorText}>{errors.ufBO.message as string}</Text>}



                        <Text style={styles.EmailSenha}>Município</Text>
                        <View style={styles.GmailComImagem}>
                            <Naturalidade />

                            <Controller

                                control={control}
                                render={({ field }) => (
                                    <TextInput
                                        style={styles.Input}
                                        onChangeText={(value) => field.onChange(value)}
                                        value={field.value}
                                        placeholder="Manaus"
                                        placeholderTextColor="#808080"
                                    />
                                )}
                                name="municipioBO"
                                rules={{ required: "Município do BO é obrigatório" }}
                            />
                        </View>
                        {errors.municipioBO && <Text style={styles.errorText}>{errors.municipioBO.message as string}</Text>}


                        <Text style={styles.EmailSenha}>Logradouro</Text>
                        <View style={styles.GmailComImagem}>
                            <Logradouro />

                            <Controller

                                control={control}
                                render={({ field }) => (
                                    <TextInput
                                        style={styles.Input}
                                        onChangeText={(value) => field.onChange(value)}
                                        value={field.value}
                                        placeholder="Rua itaitê"
                                        placeholderTextColor="#808080"
                                    />
                                )}
                                name="logradouro"
                                rules={{ required: "Logradouro é obrigatório" }}
                            />
                        </View>
                        {errors.logradouro && <Text style={styles.errorText}>{errors.logradouro.message as string}</Text>}


                        <Text style={styles.EmailSenha}>Número</Text>
                        <View style={styles.GmailComImagem}>
                            <Numero />

                            <Controller

                                control={control}
                                render={({ field }) => (
                                    <TextInput
                                        style={styles.Input}
                                        onChangeText={(value) => field.onChange(value)}
                                        value={field.value}
                                        placeholder="916"
                                        placeholderTextColor="#808080"
                                        keyboardType="numeric"
                                    />
                                )}
                                name="numeroerrado"
                                rules={{ required: "Número é obrigatório" }}
                            />
                        </View>
                        {errors.numeroerrado && <Text style={styles.errorText}>{errors.numeroerrado.message as string}</Text>}

                        <Text style={styles.EmailSenha}>Complemento</Text>
                        <View style={styles.GmailComImagem}>
                            <Complemento />

                            <Controller

                                control={control}
                                render={({ field }) => (
                                    <TextInput
                                        style={styles.Input}
                                        onChangeText={(value) => field.onChange(value)}
                                        value={field.value}
                                        placeholder=""
                                        placeholderTextColor="#808080"
                                    />
                                )}
                                name="complemento"
                                rules={{ required: "Complemento é obrigatório" }}
                            />
                        </View>
                        {errors.complemento && <Text style={styles.errorText}>{errors.complemento.message as string}</Text>}


                        <Text style={styles.EmailSenha}>Bairro</Text>
                        <View style={styles.GmailComImagem}>
                            <Bairro />

                            <Controller

                                control={control}
                                render={({ field }) => (
                                    <TextInput
                                        style={styles.Input}
                                        onChangeText={(value) => field.onChange(value)}
                                        value={field.value}
                                        placeholder="Distrito Industrial I"
                                        placeholderTextColor="#808080"
                                    />
                                )}
                                name="bairro"
                                rules={{ required: "Bairro é obrigatório" }}
                            />
                        </View>
                        {errors.bairro && <Text style={styles.errorText}>{errors.bairro.message as string}</Text>}


                        <Text style={styles.EmailSenha}>Ponto de Referência</Text>
                        <View style={styles.GmailComImagem}>
                            <Logradouro />

                            <Controller

                                control={control}
                                render={({ field }) => (
                                    <TextInput
                                        style={styles.Input}
                                        onChangeText={(value) => field.onChange(value)}
                                        value={field.value}
                                        placeholder="Fundação Matias Machline"
                                        placeholderTextColor="#808080"
                                    />
                                )}
                                name="ponto_referencai"
                                rules={{ required: "Ponto de referência é obrigatório" }}
                            />
                        </View>
                        {errors.ponto_referencai && <Text style={styles.errorText}>{errors.ponto_referencai.message as string}</Text>}


                        <Text style={styles.EmailSenha}>Tipo de local</Text>
                        <View style={styles.GmailComImagem}>
                            <Text>   </Text>

                            <TipoLocal />

                            <Controller

                                control={control}
                                render={({ field }) => (
                                    <TextInput
                                        style={styles.Input}
                                        onChangeText={(value) => field.onChange(value)}
                                        value={field.value}
                                        placeholder="Fundação Matias Machline"
                                        placeholderTextColor="#808080"
                                    />
                                )}
                                name="tipo_local"
                                rules={{ required: "Tipo de Local é obrigatório" }}
                            />
                        </View>
                        {errors.tipo_local && <Text style={styles.errorText}>{errors.tipo_local.message as string}</Text>}

                        <Text style={styles.TextRandom}>
                            Descrição
                        </Text>
                        <View style={styles.Desc}>
                            <View style={styles.DescLogo}>

                                <Descricao />
                            </View>
                            <Controller

                                control={control}
                                render={({ field }) => (
                                    <TextInput
                                        multiline={true}
                                        numberOfLines={5}
                                        style={styles.InputDescricao}
                                        onChangeText={(value) => field.onChange(value)}
                                        value={field.value}
                                        placeholder=""
                                        placeholderTextColor="#808080"
                                    />
                                )}


                                name="descricao"
                                rules={{ required: "Descrição é obrigatório" }}
                            />
                        </View>

                        {errors.descricao && <Text style={styles.errorText}>{errors.descricao.message as string}</Text>}


                        <TouchableOpacity style={styles.Button} onPress={handleConfirmCreateBO}>
                            <Text style={styles.ButtonTextRandom}>Realizar registro de B.O</Text>
                        </TouchableOpacity>
                    </>
                }

                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={showAlert}

                >
                    <View style={styles.modal}>
                        <Text style={styles.TextconfirmBO}> Tem certeza que deseja realizar esta ação?</Text>

                        <View style={styles.viewbotoes}>
                            <TouchableOpacity onPress={() => {
                                setShowAlert(false)
                                console.log('nao')
                            }}
                                style={styles.naobutton}

                            >
                                <Text style={styles.textbutton}>Não</Text>
                            </TouchableOpacity>



                            <TouchableOpacity
                                onPress={confirmCreateBO}
                                style={styles.simbutton}
                            >
                                <Text style={styles.textbutton}>Sim</Text>
                            </TouchableOpacity>




                        </View>
                    </View>
                </Modal>


            </ScrollView>
        </SafeAreaView>
    );
}


// handleSubmit(handleCreateBO)
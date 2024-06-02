import { View, Text, TextInput, TouchableOpacity, Pressable, ScrollView, Image, Alert } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./Styles";
import Nomecomplet from "../../components/AuthSVG/nomeCompleto";
import DateTimePicker from '@react-native-community/datetimepicker'
import Oros from "../../components/AuthSVG/oros";
import EyeCrossed from "../../components/AuthSVG/eyecrossed";
import Gmail from "../../components/AuthSVG/gmail";
import Cadeado from "../../components/AuthSVG/cadeado";
import { useState } from "react";
import Eyeopen from "../../components/AuthSVG/eyeopen";
import Datadenascimento from "../../components/AuthSVG/datadenascimento";
import { useEffect } from "react";
import Cpf from "../../components/AuthSVG/Cpf";
import Sexo from "../../components/AuthSVG/sexo";
import { Picker } from "@react-native-picker/picker";
import OrientacaoSexual from "../../components/AuthSVG/orientationsexuation";
import AutoDeclaration from "../../components/AuthSVG/AutoDeclaration";
import IdentidadeDeGenero from "../../components/AuthSVG/identidadedegenero";
import RG from "../../components/AuthSVG/rg";
import OrgaoEmissor from "../../components/AuthSVG/orgaoemissor";
import Naturalidade from "../../components/AuthSVG/Naturalidade";
import SSP from "../../components/AuthSVG/ssp";
import Brasil from "../../components/AuthSVG/Brasil";
import Profissao from "../../components/AuthSVG/Profissao";
import AutorizationDesmasquerd from "../../components/AuthSVG/AutorizationDesmasquerd";
import Autorization from "../../components/AuthSVG/Autorizacao";
import UFEstado from "../../components/AuthSVG/UFestado";
import Endereco from "../../components/AuthSVG/Endereco";
import Bairro from "../../components/AuthSVG/Bairro";
import Numero from "../../components/AuthSVG/Numero";
import Logradouro from "../../components/AuthSVG/Logradouro";
import Complemento from "../../components/AuthSVG/Complemento";
import Cep from "../../components/AuthSVG/cep";
import { UsuarioService } from "../../../services/api/UsuarioService";
import axios from "axios";
import { apisigupnback } from "../../../services/api/api.endpoints";

export default function Cadastro({ navigation }: any) {
  const { control, handleSubmit, formState: { errors }, watch, setValue } = useForm();
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    setValue('datadenascimento', new Date().toLocaleDateString());
  }, [setValue]);

  const nameCompleto = watch('nome')
  const CadastroDePessoaFisica = watch('cpf')
  const gemail = watch('email')
  const password = watch('senha')
  const Confirmpassword = watch('confirmsenha')

  const apelido = watch('Apelido')
  const nomesocial = watch('NomeSocial')
  const filiacaomae = watch('FiliacaoMae')
  const filiacaopai = watch('FiliacaoPai')
  const genero = watch('genero')
  const orientationsex = watch('OrientacaoSexual')
  const ssp = watch('SSP')
  const UfOrgaoEmissor = watch('UfOrgaoEmissor')
  const Nacionalidade = watch('Nacionalidade')
  const UFdenaturalidade = watch('UFdenaturalidade')
  const naturalidade = watch('Naturalidade')
  const profissao = watch('Profissao')

  const estado = watch('estado')
  const municipio = watch('municipio')
  const endereco = watch('endereco')
  const bairro = watch('bairro')
  const numero = watch('numero')
  const logradouro = watch('logradouro')
  const complemento = watch('complemento')
  const cep = watch('cep')
  const Rg = watch('rg')



  const [hidePass, setHidePass] = useState(true)
  const [autorization, setAutorizarion] = useState(false)

  const [hidePassconfirm, setHidePassconfirm] = useState(true)

  const handleSignUPawait = async () => {
    try {
      // Obtenha os dados do formulário
      const data = {
        nome: watch('nome'),
        cpf: watch('cpf'),
        email: watch('email'),
        senha: watch('senha'),
        confirmsenha: watch('confirmsenha'),

        Apelido: watch('Apelido'),
        NomeSocial: watch('NomeSocial'),
        FiliacaoMae: watch('FiliacaoMae'),
        FiliacaoPai: watch('FiliacaoPai'),
        genero: watch('genero'),
        OrientacaoSexual: watch('OrientacaoSexual'),
        rg: watch('rg'),
        SSP: watch('SSP'),
        UfOrgaoEmissor: watch('UfOrgaoEmissor'),
        Nacionalidade: watch('Nacionalidade'),
        UFdenaturalidade: watch('UFdenaturalidade'),
        Profissao: watch('Profissao'),

        estado: watch('estado'),
        municipio: watch('municipio'),
        endereco: watch('endereco'),
        bairro: watch('bairro'),
        numero: watch('numero'),
        logradouro: watch('logradouro'),
        complemento: watch('complemento'),
        cep: watch('cep'),
        apelido: watch('apelido'),
        nomesocial: watch('nomesocial'),
        filiacaomae: watch('filiacaomae'),
        ssp: watch('ssp'),
        naturalidade: watch('naturalidade'),
        profissao: watch('profissao'),
        nameCompleto: watch('nameCompleto'),
        CadastroDePessoaFisica: watch('CadastroDePessoaFisica'),
        gemail: watch('gemail'),
        password: watch('password'),

        IdentidadeDeGenero: watch('IdentidadeDeGenero')
        // Adicione outros campos conforme necessário
      };

      console.log(data)

      // Faça a requisição
      const response = await fetch(apisigupnback, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        navigation.navigate('Login');

        console.log('Cadastro realizado com sucesso:', result);
      } else {
        // Erro na requisição
        console.error('Erro ao realizar o cadastro:', result);
      }
    } catch (error) {
      console.error('Erro na requisição:', error);
    }

  }



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

  return (
    <View style={styles.geral}>
      <ScrollView>

        <View style={styles.bemVindoAoOros}>
          <Text style={styles.BemVindoAoText}>BEM-VINDO AO</Text>
          <Oros />
        </View>

        <View style={styles.AreaLogin}>
          <Text style={styles.login}>CADASTRO</Text>

          <Text style={styles.EmailSenha}>Nome Completo</Text>
          <View style={styles.GmailComImagem}>
            <Nomecomplet />

            <Controller

              control={control}
              render={({ field }) => (
                <TextInput
                  style={styles.Input}
                  onChangeText={(value) => field.onChange(value)}
                  value={field.value}
                  placeholder="Seu nome completo"
                  placeholderTextColor="#808080"
                />
              )}
              name="nome"
              rules={{ required: "Nome completo é obrigatório" }}
            />
          </View>
          {errors.nome && <Text style={styles.errorText}>{errors.nome.message as string}</Text>}


          <Text style={styles.EmailSenha}>Data de Nascimento</Text>
          <View style={styles.GmailComImagem}>
            <Datadenascimento />
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


          <Text style={styles.EmailSenha}>CPF</Text>

          <View style={styles.GmailComImagem}>
            <Cpf />
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  style={styles.Input}
                  onChangeText={(value) => field.onChange(value)}
                  value={field.value}
                  placeholder="123.456.789-00"
                  placeholderTextColor="#808080"
                  keyboardType="numeric"
                />
              )}
              name="cpf"
              rules={{
                required: 'CPF é obrigatório',
                pattern: {
                  value: /^\d{3}\.\d{3}\.\d{3}-\d{2}$/,
                  message: "Digite um CPF válido"
                }
              }}

            />
          </View>
          {errors.cpf && <Text style={styles.errorText}>{errors.cpf.message as string}</Text>}

          <Text style={styles.EmailSenha}>E-Mail</Text>
          <View style={styles.GmailComImagem}>
            <Gmail />
            <Controller
              control={control}
              render={({ field }) => (
                <TextInput
                  style={styles.Input}
                  onChangeText={(value) => field.onChange(value)}
                  value={field.value}
                  placeholder="example@gmail.com"
                  placeholderTextColor="#808080"
                  textAlign="left"
                  keyboardType="email-address"
                />
              )}
              name="email"
              rules={{
                required: 'Email é obrigatório',
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  message: "Digite um email válido"
                }
              }}
            />
          </View>
          {errors.email && <Text style={styles.errorText}>{errors.email.message as string}</Text>}


          <Text style={styles.EmailSenha}>Senha</Text>

          <View style={styles.SenhaComImagem}>
            <View style={styles.InputComCadeado}>
              <Cadeado />
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput

                    style={styles.Input}
                    onChangeText={(value) => field.onChange(value)}
                    value={field.value}
                    placeholder="***********"
                    placeholderTextColor="#808080"
                    secureTextEntry={hidePass}
                  />
                )}
                name="senha"
                rules={{
                  required: 'Digite uma senha válida',
                  minLength: { value: 8, message: 'Senha de 8 dígitos' }
                }}
              />
            </View>

            <TouchableOpacity onPress={() => setHidePass(!hidePass)} style={styles.Openeye}>
              {
                hidePass ? <Eyeopen /> : <EyeCrossed />
              }
            </TouchableOpacity>

          </View>
          {errors.senha && <Text style={styles.errorText}>{errors.senha.message as string}</Text>}


          <Text style={styles.EmailSenha}>Confirme sua Senha</Text>

          <View style={styles.SenhaComImagem}>
            <View style={styles.InputComCadeado}>
              <Cadeado />
              <Controller
                control={control}
                render={({ field }) => (
                  <TextInput
                    style={styles.Input}
                    onChangeText={(value) => { field.onChange(value); }}
                    value={field.value}
                    placeholder="***********"
                    placeholderTextColor="#808080"
                    secureTextEntry={hidePassconfirm}
                  />
                )}
                name="confirmsenha"
                rules={{
                  required: 'Confirme a sua senha',
                  validate: value => value === password || 'As senhas não coincidem'
                }}
              />
            </View>

            <TouchableOpacity onPress={() => setHidePassconfirm(!hidePassconfirm)} style={styles.Openeye}>
              {
                hidePassconfirm ? <Eyeopen /> : <EyeCrossed />
              }
            </TouchableOpacity>
          </View>
          {errors.confirmsenha && <Text style={styles.errorText}>{errors.confirmsenha.message as string}</Text>}


          {nameCompleto && CadastroDePessoaFisica && gemail && password && Confirmpassword && (
            <>

              <Text style={styles.dadospessoais}>DADOS PESSOAIS</Text>

              <Text style={styles.EmailSenha}>Apelido</Text>
              <View style={styles.GmailComImagem}>
                <Nomecomplet />

                <Controller

                  control={control}
                  render={({ field }) => (
                    <TextInput
                      style={styles.Input}
                      onChangeText={(value) => field.onChange(value)}
                      value={field.value}
                      placeholder="Ex: Leo"
                      placeholderTextColor="#808080"
                    />
                  )}
                  name="Apelido"
                  rules={{ required: "Nome completo é obrigatório" }}
                />
              </View>
              {errors.Apelido && <Text style={styles.errorText}>{errors.Apelido.message as string}</Text>}

              <Text style={styles.EmailSenha}>Nome Social</Text>
              <View style={styles.GmailComImagem}>
                <Nomecomplet />

                <Controller

                  control={control}
                  render={({ field }) => (
                    <TextInput
                      style={styles.Input}
                      onChangeText={(value) => field.onChange(value)}
                      value={field.value}
                      placeholder="Leandro Pinheiro Neiland"
                      placeholderTextColor="#808080"
                    />
                  )}
                  name="NomeSocial"
                  rules={{ required: "Nome completo é obrigatório" }}
                />
              </View>
              {errors.NomeSocial && <Text style={styles.errorText}>{errors.NomeSocial.message as string}</Text>}

              <Text style={styles.EmailSenha}>Filiação - Mãe</Text>
              <View style={styles.GmailComImagem}>
                <Nomecomplet />

                <Controller

                  control={control}
                  render={({ field }) => (
                    <TextInput
                      style={styles.Input}
                      onChangeText={(value) => field.onChange(value)}
                      value={field.value}
                      placeholder="Brennah Pinheiro Neiland"
                      placeholderTextColor="#808080"
                    />
                  )}
                  name="FiliacaoMae"
                  rules={{ required: "Nome completo é obrigatório" }}
                />
              </View>
              {errors.FiliacaoMae && <Text style={styles.errorText}>{errors.FiliacaoMae.message as string}</Text>}

              <Text style={styles.EmailSenha}>Filiação - Pai</Text>
              <View style={styles.GmailComImagem}>
                <Nomecomplet />

                <Controller

                  control={control}
                  render={({ field }) => (
                    <TextInput
                      style={styles.Input}
                      onChangeText={(value) => field.onChange(value)}
                      value={field.value}
                      placeholder="Brennah Pinheiro Neiland"
                      placeholderTextColor="#808080"
                    />
                  )}
                  name="FiliacaoPai"
                  rules={{ required: "Nome completo é obrigatório" }}
                />
              </View>
              {errors.FiliacaoPai && <Text style={styles.errorText}>{errors.FiliacaoPai.message as string}</Text>}

              <Text style={styles.EmailSenha}>Sexo</Text>
              <View style={styles.GmailComImagem}>
                <Sexo />

                <Controller
                  control={control}
                  name="genero"
                  rules={{ required: 'Seleção de gênero é obrigatória' }}
                  render={({ field: { onChange, value } }) => (
                    <Picker
                      style={styles.Picker}
                      selectedValue={value}
                      onValueChange={(itemValue) => onChange(itemValue)}
                      itemStyle={{ color: '#808080' }}
                    >
                      <Picker.Item label="Masculino" value="masculino" />
                      <Picker.Item label="Feminino" value="feminino" />
                      <Picker.Item label="Nenhum deles" value="nenhum" />

                    </Picker>
                  )}
                />



              </View>

              <Text style={styles.EmailSenha}>Orientação Sexual</Text>
              <View style={styles.GmailComImagem}>
                <OrientacaoSexual />

                <Controller
                  control={control}
                  name="OrientacaoSexual"
                  rules={{ required: 'Seleção de Orientação Sexual é obrigatória' }}
                  render={({ field: { onChange, value } }) => (
                    <Picker
                      style={styles.Picker}
                      selectedValue={value}
                      onValueChange={(itemValue, itemindex) => onChange(itemValue)}
                      itemStyle={{ color: '#808080' }}
                    >
                      <Picker.Item label="Heterosexual" value="heterossexual" />
                      <Picker.Item label="Homossexual" value="homossexual" />

                    </Picker>
                  )}
                />
              </View>

              {orientationsex == "homossexual" && (
                <>
                  <Text style={styles.EmailSenha}>Auto Declaração</Text>
                  <View style={styles.GmailComImagem}>
                    <AutoDeclaration />

                    <Controller
                      control={control}
                      name="Autodeclaracao"
                      rules={{ required: 'Seleção de Auto delcaração é obrigatória' }}
                      render={({ field: { onChange, value } }) => (
                        <Picker
                          style={styles.Picker}
                          selectedValue={value}
                          onValueChange={(itemValue, itemindex) => onChange(itemValue)}
                          itemStyle={{ color: '#808080' }}
                        >
                          <Picker.Item label="Nenhum" value="nenhum" />
                          <Picker.Item label="Gay" value="gay" />
                          <Picker.Item label="Lésbica" value="lesbica" />

                        </Picker>
                      )}
                    />
                  </View>

                </>
              )

              }
              <Text style={styles.EmailSenha}>Identidade de Gênero</Text>
              <View style={styles.GmailComImagem}>
                <IdentidadeDeGenero />

                <Controller
                  control={control}
                  name="IdentidadeDeGenero"
                  rules={{ required: 'Seleção de Auto delcaração é obrigatória' }}
                  render={({ field: { onChange, value } }) => (
                    <Picker
                      style={styles.Picker}
                      selectedValue={value}
                      onValueChange={(itemValue, itemindex) => onChange(itemValue)}
                      itemStyle={{ color: '#808080' }}
                    >
                      <Picker.Item label="Nenhum" value="nenhum" />
                      <Picker.Item label="Cisgênero" value="cisgenero" />
                      <Picker.Item label="Transgênero" value="transgenero" />

                    </Picker>
                  )}
                />
              </View>

              <Text style={styles.EmailSenha}>RG</Text>

              <View style={styles.GmailComImagem}>
                <RG />
                <Controller
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      style={styles.Input}
                      onChangeText={(value) => field.onChange(value)}
                      value={field.value}
                      placeholder="12.345.678-9"
                      placeholderTextColor="#808080"
                      keyboardType="numeric"
                    />
                  )}
                  name="rg"
                  rules={{
                    required: 'RG é obrigatório',
                    pattern: {
                      value: /^\d{2}\.\d{3}\.\d{3}-\d{1}$/,
                      message: "Digite um RG válido"
                    }
                  }}

                />
              </View>
              {errors.rg && <Text style={styles.errorText}>{errors.rg.message as string}</Text>}

              <Text style={styles.EmailSenha}>Orgão Emissor</Text>

              <View style={styles.GmailComImagem}>
                <SSP />

                <Controller
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      style={styles.Input}
                      onChangeText={(value) => field.onChange(value)}
                      value={field.value}
                      placeholder="SSP"
                      placeholderTextColor="#808080"
                    />
                  )}
                  name="SSP"
                  rules={{
                    required: 'SSP é obrigatório',
                  }}

                />
              </View>
              {errors.SSP && <Text style={styles.errorText}>{errors.SSP.message as string}</Text>}


              <Text style={styles.EmailSenha}>UF do órgão emissor</Text>

              <View style={styles.GmailComImagem}>
                <Naturalidade />
                <Controller
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      style={styles.Input}
                      onChangeText={(value) => field.onChange(value)}
                      value={field.value}
                      placeholder="AM - Amazonas"
                      placeholderTextColor="#808080"
                    />
                  )}
                  name="UfOrgaoEmissor"
                  rules={{
                    required: 'UF do órgão emissor é obrigatório',
                  }}

                />
              </View>
              {errors.UfOrgaoEmissor && <Text style={styles.errorText}>{errors.UfOrgaoEmissor.message as string}</Text>}

              <Text style={styles.EmailSenha}>Nacionalidade</Text>

              <View style={styles.GmailComImagem}>
                <Brasil />
                <Controller
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      style={styles.Input}
                      onChangeText={(value) => field.onChange(value)}
                      value={field.value}
                      placeholder="Brasil"
                      placeholderTextColor="#808080"
                    />
                  )}
                  name="Nacionalidade"
                  rules={{
                    required: 'Nacionalidade é obrigatório',
                  }}

                />
              </View>
              {errors.Nacionalidade && <Text style={styles.errorText}>{errors.Nacionalidade.message as string}</Text>}
              <Text style={styles.EmailSenha}>UF de naturalidade</Text>

              <View style={styles.GmailComImagem}>
                <Brasil />
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
                  name="UFdenaturalidade"
                  rules={{
                    required: 'UF de Naturalidade é obrigatório',
                  }}

                />
              </View>
              {errors.UFdenaturalidade && <Text style={styles.errorText}>{errors.UFdenaturalidade.message as string}</Text>}

              <Text style={styles.EmailSenha}>Naturalidade</Text>

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
                  name="Naturalidade"
                  rules={{
                    required: 'Naturalidade é obrigatório',
                  }}

                />
              </View>
              {errors.Naturalidade && <Text style={styles.errorText}>{errors.Naturalidade.message as string}</Text>}

              <Text style={styles.EmailSenha}>Profissão</Text>

              <View style={styles.GmailComImagem}>
                <Profissao />
                <Controller
                  control={control}
                  render={({ field }) => (
                    <TextInput
                      style={styles.Input}
                      onChangeText={(value) => field.onChange(value)}
                      value={field.value}
                      placeholder="Designer de Interiores"
                      placeholderTextColor="#808080"
                    />
                  )}
                  name="Profissao"
                  rules={{
                    required: 'Profissão é obrigatório',
                  }}

                />
              </View>
              {errors.Profissao && <Text style={styles.errorText}>{errors.Profissao.message as string}</Text>}


            </>
          )

          }

          {apelido && nomesocial && filiacaomae && Rg && ssp && UfOrgaoEmissor && Nacionalidade && UFdenaturalidade && naturalidade && profissao && nameCompleto && CadastroDePessoaFisica && gemail && password && (

            <View style={styles.autorizacao}>
              <TouchableOpacity onPress={() => setAutorizarion(!autorization)} >
                {
                  autorization ? <AutorizationDesmasquerd /> : <Autorization />
                }
              </TouchableOpacity>
              <Text style={styles.MarginText}>Autorizo voluntariamente a utilização de aplicativos de mensagens (WhatsApp e similares), Redes Sociais, SMS e/ou E-mail informados acima para receber intimações decorrentes da tramitação desta ocorrência.</Text>
            </View>
          )

          }

          {autorization && apelido && nomesocial && filiacaomae && Rg && ssp && UfOrgaoEmissor && Nacionalidade && UFdenaturalidade && naturalidade && profissao && nameCompleto && CadastroDePessoaFisica && gemail && password &&

            <>
              <Text style={styles.dadospessoais}>Localização</Text>

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
                  name="estado"
                  rules={{ required: "Estado é obrigatório" }}
                />
              </View>
              {errors.estado && <Text style={styles.errorText}>{errors.estado.message as string}</Text>}



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
                  name="municipio"
                  rules={{ required: "Município é obrigatório" }}
                />
              </View>
              {errors.municipio && <Text style={styles.errorText}>{errors.municipio.message as string}</Text>}

              <Text style={styles.EmailSenha}>Endereço</Text>
              <View style={styles.GmailComImagem}>
                <Endereco />

                <Controller

                  control={control}
                  render={({ field }) => (
                    <TextInput
                      style={styles.Input}
                      onChangeText={(value) => field.onChange(value)}
                      value={field.value}
                      placeholder="Av. Min. João Gonçalves de Souza"
                      placeholderTextColor="#808080"
                    />
                  )}
                  name="endereco"
                  rules={{ required: "Endereço é obrigatório" }}
                />
              </View>
              {errors.endereco && <Text style={styles.errorText}>{errors.endereco.message as string}</Text>}



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
                    />
                  )}
                  name="numero"
                  rules={{ required: "Número é obrigatório" }}
                />
              </View>
              {errors.numero && <Text style={styles.errorText}>{errors.numero.message as string}</Text>}





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
                      placeholder=""
                      placeholderTextColor="#808080"
                    />
                  )}
                  name="logradouro"
                  rules={{ required: "Logradouro é obrigatório" }}
                />
              </View>
              {errors.logradouro && <Text style={styles.errorText}>{errors.logradouro.message as string}</Text>}

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
                      placeholder=""
                      placeholderTextColor="#808080"
                    />
                  )}
                  name="cep"
                  rules={{ required: "Cep é obrigatório" }}
                />
              </View>
              {errors.cep && <Text style={styles.errorText}>{errors.cep.message as string}</Text>}
            </>

          }



          {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

          {
            apelido && nomesocial && filiacaomae && Rg && ssp && UfOrgaoEmissor && Nacionalidade && UFdenaturalidade && naturalidade && profissao && nameCompleto && CadastroDePessoaFisica && gemail && password ? (
              <TouchableOpacity onPress={handleSignUPawait} style={styles.Button}>
                <Text style={styles.buttonLogin}>Cadastrar</Text>
              </TouchableOpacity>
            ) : (
              <TouchableOpacity onPress={handleSignUPawait} style={styles.Buttonantecadastro}>
                <Text style={styles.buttonanteCadastro}>Preencha todos os campos para se Cadastar</Text>
              </TouchableOpacity>
            )
          }


          <View style={styles.NaoPossuiUmaContaAindaCadastrese}>
            <Text style={styles.NaoPossuiUmaContaAinda}>Já possui uma conta? </Text>
            <Pressable
              onPress={() => navigation.navigate('Login')}>
              <Text style={styles.Cadastrase}>Entrar</Text>
            </Pressable>
          </View>
        </View>

      </ScrollView >

    </View >
  );
}
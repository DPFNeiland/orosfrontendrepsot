import { SafeAreaView, View, Text, TextInput, TouchableOpacity, Pressable, Linking } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { styles } from "./Styles";
import BemVindoAo from "../../components/AuthSVG/bemVindoAo";
import Oros from "../../components/AuthSVG/oros";
import Bombeiro from "../../components/AuthSVG/bombeiros";
import Policia from "../../components/AuthSVG/policia";
import Ambulancia from "../../components/AuthSVG/ambulancia";
import EyeCrossed from "../../components/AuthSVG/eyecrossed";
import Gmail from "../../components/AuthSVG/gmail";
import Cadeado from "../../components/AuthSVG/cadeado";
import { useState } from "react";
import { useAuth } from "../../contexts/auth";
import Eyeopen from "../../components/AuthSVG/eyeopen";

export default function Login({ navigation }: any) {
  const { control, handleSubmit, formState: { errors } } = useForm();
  const [errorMessage, setErrorMessage] = useState('');
  const [hidePass, setHidePass] = useState(true)
  const { signed, login, user } = useAuth()

  const handleSignInfront = async (data: any) => {

    try{
      await login(data)
      console.log(user)

    } catch (error: any) {
      setErrorMessage(error.message.replace('Error: ', ''))
    }

  };


  const handleFireman = () => {
    Linking.openURL('tel:193');
  }

  const handlePolice = () => {
    Linking.openURL('tel:190');
  }

  const handleSAMU = () => {
    Linking.openURL('tel:192');
  }

  return (
    <SafeAreaView style={styles.geral}>

      <View style={styles.bemVindoAoOros}>
        <Text style={styles.BemVindoAoText}>BEM-VINDO AO</Text>
        <Oros />
      </View>

      <View style={styles.AreaLogin}>
        <Text style={styles.login}>LOGIN</Text>

        <Text style={styles.EmailSenha}>CPF</Text>
        <View style={styles.GmailComImagem}>
          <Gmail />
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
        {errors.cpf && <Text style={styles.errorText}>Digite um CPF válido</Text>}

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

          <TouchableOpacity onPress={() => setHidePass(!hidePass)}  style={styles.Openeye}>
            {
               hidePass ? <Eyeopen/> : <EyeCrossed />
            }
          </TouchableOpacity>

        </View>
        {errors.senha && <Text style={styles.errorText}>Senha de 8 dígitos</Text>}

        <View>
          <Pressable >
            <Text style={styles.EsqueceuSuaSenha}>Esqueci senha</Text>
          </Pressable>
        </View>

        <TouchableOpacity onPress={handleSubmit(handleSignInfront)} style={styles.Button}>
          <Text style={styles.buttonLogin}>ENTRAR</Text>
        </TouchableOpacity>

        {errorMessage && <Text style={styles.errorText}>{errorMessage}</Text>}

        <Text style={styles.EmergenciaContate}>Emergência? Contate:</Text>

        <View style={styles.ViewEmergence}>
          <View style={styles.EmergenciaContateBotoes}>
            <TouchableOpacity onPress={handleFireman}>
              <Bombeiro />
            </TouchableOpacity>
            <Text style={styles.BombeiroPoliciAmbulancia}>Bombeiro</Text>
          </View>
          <View style={styles.EmergenciaContateBotoes}>
            <TouchableOpacity onPress={handlePolice}>
              <Policia />
            </TouchableOpacity>
            <Text style={styles.BombeiroPoliciAmbulancia}>Polícia Militar</Text>
          </View>
          <View style={styles.EmergenciaContateBotoes}>
            <TouchableOpacity onPress={handleSAMU}>
              <Ambulancia />
            </TouchableOpacity>
            <Text style={styles.BombeiroPoliciAmbulancia}>Samu</Text>
          </View>
        </View>


        <View style={styles.NaoPossuiUmaContaAindaCadastrese}>
          <Text style={styles.NaoPossuiUmaContaAinda}>Não possui uma conta ainda? </Text>
          <Pressable
            onPress={() => navigation.navigate('Cadastro')}>
            <Text style={styles.Cadastrase}>Cadastre-se</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
}
import { createStackNavigator } from '@react-navigation/stack'
import Login from '../screens/telalogin/login'
import Cadastro from '../screens/telaCadastro/Cadastro'

const AuthStack = createStackNavigator()

export default function () {
    return (
        <AuthStack.Navigator screenOptions={{ headerShown: false }}>
            <AuthStack.Screen
                name="Login"
                component={Login}
            />
            <AuthStack.Screen
                name="Cadastro"
                component={Cadastro}
            />

        </AuthStack.Navigator>
    )
}
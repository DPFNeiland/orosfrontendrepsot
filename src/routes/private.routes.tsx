import { createStackNavigator } from '@react-navigation/stack'
import HomeInicial from '../screens/HomeInicial/Home'
import Home from '../screens/Home/Home'
import BOs from "../screens/BOs/BOs"
import BOs2 from '../screens/BOs2/BOs2'
import Perfil from '../screens/perfil/perfil'
import Historico from '../screens/HistoricoBO/BOs'
import BoDetalhes from '../screens/BoDetalhes/BoDetalhes'
import ListaDeTelefones from '../screens/ListaDeTelefones/ListaDeTelefones'

const AppRoutes = createStackNavigator()

export default function () {
    return (
        <AppRoutes.Navigator screenOptions={{ headerShown: false }}>

            <AppRoutes.Screen
                name="Home"
                component={Home}
            />

            <AppRoutes.Screen
                name="HomeMap"
                component={HomeInicial}
            />

            <AppRoutes.Screen
                name="BOs"
                component={BOs}
            />


            <AppRoutes.Screen
                name="BOs2"
                component={BOs2}
            />

            <AppRoutes.Screen
                name="Perfil"
                component={Perfil}
            />

            <AppRoutes.Screen
                name="Historico"
                component={Historico}
            />

            <AppRoutes.Screen
                name="BoDetalhes"
                component={BoDetalhes}
            />

            <AppRoutes.Screen
                name="ListaDeTelefones"
                component={ListaDeTelefones}
            />
        </AppRoutes.Navigator>
    )
}
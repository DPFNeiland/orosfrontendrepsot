import {  TouchableOpacity } from "react-native";
import GoBack from "../../../assets/BotoesDelegacias/GoBack.svg"


export function GoBackStack({ navigation }: any) {
    return (
        <TouchableOpacity style={{ position: 'absolute', zIndex: 100, top: "5%", left: "3%" }} onPress={() => navigation.goBack()}>
            <GoBack />
        </TouchableOpacity>
    )
}
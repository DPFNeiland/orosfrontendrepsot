import React from "react";
import AuthRoutes from "./auth.routes";
import AppRoutes from "./private.routes"
import {useAuth} from "../contexts/auth";
import Splash from "../screens/Splash/Splash";

const Routes: React.FC = () => {
    const {signed, loading} = useAuth()

    if(loading){
        <Splash/>
    }

    return signed ? <AppRoutes/> : <AuthRoutes/>
    
}

export default Routes 
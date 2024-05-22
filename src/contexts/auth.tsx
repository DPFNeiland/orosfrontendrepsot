import React, { createContext, useState, ReactNode, useEffect, useContext } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { UsuarioService } from "../../services/api/UsuarioService";
import api from "../../services/api/api";

interface AuthContextData {
    signed: boolean,
    user: User | null,
    loading: boolean,
    login(data: any): Promise<any>,
    signOut(): void,
}

interface AuthProviderProps {
    children: ReactNode;
}

interface User {
    id: number,
    nome: string,
    naturalidade: string,
    estadocivil: string,
    datadenascimento: string,
    email: string,
    cpf: string,
    cep: string,
    senha: string,
    idade: number | null,
    telefone: string
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData)

export const AuthProvider: React.FC<AuthProviderProps> = ({ children }) => {
    const [user, setUser] = useState<User | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        async function loadStoraged() {
            // multiget

            const storageUser = await AsyncStorage.getItem('RNAuth:user')
            const storageToken = await AsyncStorage.getItem('RNAuth:token')

            if (storageToken && storageUser) {
                api.defaults.headers['Authorization'] = `Bearer ${storageToken}`


                setUser(JSON.parse(storageUser))
                setLoading(false)
            }

        }

        loadStoraged()
    }, [])

    const usuarioService = new UsuarioService();

    async function login(data: any) {

        try {
            const Response = await usuarioService.login(data)
            setUser(Response.user)

            api.defaults.headers['Authorization'] = `Bearer ${Response.access_token}`

            await AsyncStorage.setItem('RNAuth:user', JSON.stringify(Response.user))
            await AsyncStorage.setItem('RNAuth:token', Response.access_token)

        } catch(error: any) {
            console.log('contexto => ', error)
            throw new Error(error)
        }


    }

    function signOut() {
        AsyncStorage.clear().then(() => {
            setUser(null)
        })
    }



    return (
        <AuthContext.Provider value={{
            signed: !!user,
            user,
            loading,
            login,
            signOut
        }}>
            {children}
        </AuthContext.Provider>
    )
}
export function useAuth() {
    const context = useContext(AuthContext)

    return context;
}
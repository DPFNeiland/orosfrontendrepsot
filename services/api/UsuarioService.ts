import axios, { AxiosResponse } from "axios";
import { apisigupnback, apisigninback } from "./api.endpoints";

interface LoginResponse {
    access_token: string;
    user: {
        id: number;
        nome: string;
        naturalidade: string;
        estadocivil: string;
        datadenascimento: string;
        email: string;
        cpf: string;
        cep: string;
        senha: string;
        idade: number | null;
        telefone: string;
    };
}

export class UsuarioService {
    async cadastrar(data: any): Promise<LoginResponse> {
        try {
            const response: AxiosResponse = await axios.post(apisigupnback, data);
            const cadastroResponse: LoginResponse = {
                access_token: response.data.access_token,
                user: {
                    id: response.data.user.id,
                    nome: response.data.user.nome,
                    naturalidade: response.data.user.naturalidade,
                    estadocivil: response.data.user.estadocivil,
                    datadenascimento: response.data.user.datadenascimento,
                    email: response.data.user.email,
                    cpf: response.data.user.cpf,
                    cep: response.data.user.cep,
                    senha: response.data.user.senha,
                    idade: response.data.user.idade,
                    telefone: response.data.user.telefone
                }
            };
            console.log(response);
            return cadastroResponse;
        } catch (error: any) {
            console.error(error.response.data.message);
            throw new Error(error.response.data.message);
        }
    }

    async login(data: any): Promise<LoginResponse> {
        try {
            const response: AxiosResponse = await axios.post(apisigninback, data);
            const loginResponse: LoginResponse = {
                access_token: response.data.access_token,
                user: {
                    id: response.data.user.id,
                    nome: response.data.user.nome,
                    naturalidade: response.data.user.naturalidade,
                    estadocivil: response.data.user.estadocivil,
                    datadenascimento: response.data.user.datadenascimento,
                    email: response.data.user.email,
                    cpf: response.data.user.cpf,
                    cep: response.data.user.cep,
                    senha: response.data.user.senha,
                    idade: response.data.user.idade,
                    telefone: response.data.user.telefone
                }
            };
            console.log(response);
            return loginResponse;
        } catch (error: any) {
            console.log(error.response.data.message);
            throw new Error(error.response.data.message);
        }
    }
}

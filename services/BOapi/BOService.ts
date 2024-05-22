import axios, { AxiosResponse } from "axios";
import { apiCriarBO } from "./BO.endpoint";




export class BOService {
    async CriarBO(data: any) {
        return await axios.post(
            apiCriarBO,
            data
        ).then((response) => {
            console.log(response);
            return Promise.resolve(response);
        }).catch((error) => {
            console.error(error.response.data.message);
            return Promise.reject(error.response.data.message);
        })
    }


    /*

    interface LoginResponse {
    access_token: string;
    user: {
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
}


    async login(data: any): Promise<LoginResponse> {
        try{
            const response: AxiosResponse = await axios.post(apisigninback, data)
            const loginResponse: LoginResponse = {
                access_token: response.data.access_token,
                user: {
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
            }
            console.log(response);
            return loginResponse
        } catch(error: any){
            console.log(error.response.data.message)
            throw new Error(error.response.data.message)
        }
    }*/
}

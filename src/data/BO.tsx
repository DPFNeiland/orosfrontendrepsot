import { apiBO } from "../../services/BOapi/BO.endpoint";

export async function getBOList(iddousuario: number | undefined) {
  if (!iddousuario) {
    throw new Error('iddousuario é null ou undefined');
  }
  const listagem = `${apiBO}/user/${iddousuario}`;
  try {
    const response = await fetch(listagem);
    if (!response.ok) {
      throw new Error('Erro ao buscar os BOs: ' + response.statusText);
    }
    if (response.headers.get('content-type')?.includes('application/json')) {
      const BOList = await response.json();
      return BOList; // Retorna o array de BOs
    } else {
      throw new Error('A resposta não é JSON!');
    }
  } catch (error) {
    console.error(error);
    throw error; // Rejeita o erro para ser tratado pelo chamador
  }
}


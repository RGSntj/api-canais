import { criarCanalRepository, pegarCanaisRepository } from "../repository/canalRepository.js";
import { validarBodyCanal, validarCanalExistente } from "../validate/canalValidate.js";

export async function criarCanalService(canal){
  validarBodyCanal(canal);

  await validarCanalExistente(canal.nome);

  const idCanal = await criarCanalRepository(canal);
  return idCanal;
}

export async function pegarCanaisService(){
  const canais = await pegarCanaisRepository();
  return canais;
}
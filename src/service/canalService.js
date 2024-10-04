import { criarCanalRepository, pegarCanaisRepository } from "../repository/canalRepository.js";
import { validarBodyCanal } from "../validate/canalValidate.js";

export async function criarCanalService(canal){
  validarBodyCanal(canal);

  const idCanal = await criarCanalRepository(canal);
  return idCanal;
}

export async function pegarCanaisService(){
  const canais = await pegarCanaisRepository();
  return canais;
}
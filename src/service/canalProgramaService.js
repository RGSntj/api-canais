import { criarCanalProgramaRepository, pegarTodosOsProgramasRepository } from "../repository/canalProgramaRepository.js";

export async function criarCanalProgramaService(objCanalPrograma, idCanal){
  const id = await criarCanalProgramaRepository(objCanalPrograma, idCanal);

  return id;
}

export async function pegarTodosOsProgramasService(){
  const programas = await pegarTodosOsProgramasRepository();

  return programas;
}
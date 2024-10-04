import { criarCanalProgramaRepository } from "../repository/canalProgramaRepository.js";



export async function criarCanalProgramaService(objCanalPrograma, idCanal){
  const id = await criarCanalProgramaRepository(objCanalPrograma, idCanal);

  return id;
}
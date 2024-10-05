import { favoritarProgramaRepository } from '../repository/programaFavoritoRepository.js'

export async function favoritarProgramaService(canal, idPrograma) {
  const idCanal = await favoritarProgramaRepository(canal, idPrograma);

  return idCanal;
}
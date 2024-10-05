import { db } from '../db/connection.js'

export async function favoritarProgramaRepository(canal, idPrograma) {
  const comando = `INSERT INTO tb_programa_favorito (id_usuario, vl_avaliacao, id_canal_programa)
                                  VALUES (?, ?, ?)`;

  const resposta = await db.query(comando, [canal.idUsuario, canal.avaliacao, idPrograma]);
  return resposta[0].insertId;
}
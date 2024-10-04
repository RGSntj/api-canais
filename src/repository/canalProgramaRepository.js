import { db } from '../db/connection.js'

export async function criarCanalProgramaRepository(objPrograma, idCanal){
  const comando = `INSERT INTO tb_canal_programa (nm_programa, ds_genero, hr_programa, id_canal)
                                  VALUES (?, ?, ?, ?)`;

  const resposta = await db.query(comando, [objPrograma.nome, objPrograma.genero, objPrograma.hora, idCanal])
  return resposta[0].insertId;
}
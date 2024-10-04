import { db } from '../db/connection.js'

export async function criarCanalProgramaRepository(objPrograma, idCanal){
  const comando = `INSERT INTO tb_canal_programa (nm_programa, ds_genero, hr_programa, id_canal)
                                  VALUES (?, ?, ?, ?)`;

  const resposta = await db.query(comando, [objPrograma.nome, objPrograma.genero, objPrograma.hora, idCanal])
  return resposta[0].insertId;
}

export async function pegarTodosOsProgramasRepository(){
  const comando = `SELECT 
	                  C.nm_canal  	"Nome do canal",
                    C.nr_canal  	"Numero do canal",
                    CP.nm_programa 	"Nome do programa",
                    CP.ds_genero 	"Genero do programa",
                    CP.hr_programa 	"Hora do programa"
                  FROM tb_canal C
                  JOIN tb_canal_programa CP on C.id_canal = CP.id_canal`

  const resposta = await db.query(comando)
  return resposta[0]
}
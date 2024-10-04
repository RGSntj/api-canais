import { db } from "../db/connection.js"


export async function criarUsuarioRepository(usuario){
  const comando = `INSERT INTO tb_usuario (nm_usuario)
                                  VALUES (?)`;
  
    const resposta = await db.query(comando, [usuario.nome]);
    return resposta[0].insertId;
}
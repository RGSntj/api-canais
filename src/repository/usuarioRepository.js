import { db } from "../db/connection.js"

export async function criarUsuarioRepository(usuario) {
  const comando = `INSERT INTO tb_usuario (nm_usuario)
                                  VALUES (?)`;

  const resposta = await db.query(comando, [usuario.nome]);
  return resposta[0].insertId;
}

export async function consultarTodosUsuariosRepository() {
  const comando = `SELECT * FROM tb_usuario`

  const resposta = await db.query(comando);
  return resposta[0];
}

export async function consultarUsuarioPeloNomeRepository(nome) {
  const comando = `SELECT * FROM tb_usuario
                        WHERE nm_usuario = ?`

  const resposta = await db.query(comando, [nome]);
  return resposta[0];
}
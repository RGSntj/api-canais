import { db } from '../db/connection.js'

export async function criarCanalRepository(canal) {
    const comando = `INSERT INTO tb_canal (nm_canal, nr_canal, bt_aberto)
                                  VALUES (?, ?, ?)`;

    const resposta = await db.query(comando, [canal.nome, canal.numero, canal.aberto]);
    return resposta[0].insertId;
}

export async function pegarCanaisRepository() {
    const comando = `SELECT id_canal    id,
                            nm_canal    nome,
                            nr_canal    numero,
                            bt_aberto   aberto 
                    FROM tb_canal`

    const resposta = await db.query(comando)
    return resposta[0]
}

export async function pegarCanalPeloNomeRepository(nome) {
    const comando = `SELECT * FROM tb_canal
                        WHERE nm_canal = ?`

    const resposta = await db.query(comando, [nome])
    return resposta[0]
}
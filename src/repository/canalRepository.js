import { db } from '../db/connection.js'

export async function criarCanalRepository(canal){
    const comando = `INSERT INTO tb_canal (nm_canal, nr_canal, bt_aberto)
                                  VALUES (?, ?, ?)`;

    const resposta = await db.query(comando, [canal.nome, canal.numero, canal.aberto]);
    return resposta[0].insertId;
}

export async function pegarCanaisRepository(){
    const comando = `SELECT * FROM tb_canal`

    const resposta = await db.query(comando)
    return resposta[0]
}
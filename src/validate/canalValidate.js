import { pegarCanalPeloNomeRepository } from "../repository/canalRepository.js"

export function validarBodyCanal(canal){
  if (!canal.nome) throw new Error("Nome do canal é obrigátorio !")

  if (!canal.numero) throw new Error("Numero do canal é obrigátorio !")

  if (!canal.aberto) throw new Error("Informe se o canal está em aberto !")
}

export async function validarCanalExistente(nome){
  const canal = await pegarCanalPeloNomeRepository(nome);

  if (canal.length > 0) 
    throw new Error("Já existe um canal com esse nome !")
}


export function validarBodyCanal(canal){
  if (!canal.nome) throw new Error("Nome do canal é obrigátorio !")

  if (!canal.numero) throw new Error("Numero do canal é obrigátorio !")

  if (!canal.aberto) throw new Error("Informe se o canal está em aberto !")
}
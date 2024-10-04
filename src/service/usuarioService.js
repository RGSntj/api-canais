import { consultarTodosUsuariosRepository, consultarUsuarioPeloNomeRepository, criarUsuarioRepository } from "../repository/usuarioRepository.js";

export async function criarUsuarioService(usuario) {
  const resposta = await consultarUsuarioPeloNomeRepository(usuario.nome);

  if (resposta.length > 0) throw new Error("Usuário com este nome já existe !");

  const idUsuario = await criarUsuarioRepository(usuario);

  return idUsuario;
}

export async function consultarTodosUsuariosService() {
  const usuarios = await consultarTodosUsuariosRepository();
  return usuarios;
}
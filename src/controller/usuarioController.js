import { Router } from "express";
import { consultarTodosUsuariosService, criarUsuarioService } from '../service/usuarioService.js'

const endpoints = Router();

endpoints.get("/usuarios", async (req, resp) => {
  try {
    const usuarios = await consultarTodosUsuariosService();

    return resp.send(usuarios);
  } catch (error) {
    return resp.status(400).send({
      erro: error.message
    })
  }
})

endpoints.post("/criar-usuario", async (req, resp) => {
  try {
    const objUsuario = req.body;
    const idUsuarioCriado = await criarUsuarioService(objUsuario);

    return resp.send({
      id: idUsuarioCriado
    })
  } catch (error) {
    return resp.status(400).send({
      erro: error.message
    })
  }
})

export default endpoints;
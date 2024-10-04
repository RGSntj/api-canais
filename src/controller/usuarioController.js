import { Router } from "express";
import { criarUsuarioRepository } from "../repository/usuarioRepository.js";

const endpoints = Router();

endpoints.post("/criar-usuario", async (req, resp) => {
  const objUsuario = req.body;
  const idUsuarioCriado = await criarUsuarioRepository(objUsuario);

  return resp.send({
    id: idUsuarioCriado
  })
})

export default endpoints;
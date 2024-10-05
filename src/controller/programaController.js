import { Router } from 'express'
import { favoritarProgramaService } from '../service/programaService.js';

const endpoints = Router();

endpoints.post("/favoritar/:idPrograma", async (req, resp) => {
  try {
    const objCanal = req.body;
    const { idPrograma } = req.params;

    const idCanalFavorito = await favoritarProgramaService(objCanal, idPrograma);

    return resp.status(201).send({
      id: idCanalFavorito
    })
  } catch (error) {
    return resp.status(400).send({
      erro: error.message
    })
  }
})

export default endpoints;
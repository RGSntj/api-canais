import { Router } from "express";
import { criarCanalService, pegarCanaisService } from "../service/canalService.js";

const endpoints = Router();

endpoints.get("/canais", async (req, resp) => {
  try {
    const canais = await pegarCanaisService();

    return resp.status(201).send(canais);
  } catch (error) {
    return resp.status(400).send({
      erro: error.message
    })
  }
})

endpoints.post("/criar-canal", async (req, resp) => {
  try {
    const bodyCanal = req.body;
    const idCanalCriado = await criarCanalService(bodyCanal);

    return resp.status(201).send({
      id: idCanalCriado
    });
  } catch (error) {
    return resp.status(400).send({
      erro: error.message
    })
  }
})

export default endpoints;
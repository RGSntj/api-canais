import { Router } from "express";
import { criarCanalProgramaService } from "../service/canalProgramaService.js";

const endpoints = Router();

endpoints.post("/programa/:idCanal", async (req, resp) => {
  try {
    const { idCanal } = req.params;
    const objPrograma = req.body;

    const idProgramaCriado = await criarCanalProgramaService(objPrograma, idCanal)

    return resp.send({
      id: idProgramaCriado
    })
  } catch (error) {
    return resp.status(400).send({
      erro: error.message
    })
  }
})

export default endpoints;
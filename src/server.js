import express from 'express'
import { adicionarRotas } from './rotas.js'

import cors from 'cors'

const servidor = express()
servidor.use(express.json())
servidor.use(cors())

adicionarRotas(servidor)

const PORTA = process.env.PORTA || 3001

servidor.listen(PORTA, () => console.log(`Servidor rodando na porta ${PORTA}`))
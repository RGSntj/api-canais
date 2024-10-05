import canalController from '../src/controller/canalController.js'
import canalProgramaController from '../src/controller/canalProgramaController.js'
import usuarioController from './controller/usuarioController.js'
import programaController from './controller/programaController.js'

export function adicionarRotas(servidor) {
  servidor.use(canalController)
  servidor.use(canalProgramaController)
  servidor.use(usuarioController)
  servidor.use(programaController)
}
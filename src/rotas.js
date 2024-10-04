import canalController from '../src/controller/canalController.js'
import canalProgramaController from '../src/controller/canalProgramaController.js'

export function adicionarRotas(servidor){
  servidor.use(canalController)
  servidor.use(canalProgramaController)
}
import canalController from '../src/controller/canalController.js'

export function adicionarRotas(servidor){
  servidor.use(canalController)
}
import { combineReducers } from 'redux'
import { envio, listas, abrir } from './reducers'

const tudo = combineReducers({
  envio,
  listas,
  abrir
})

export default tudo;

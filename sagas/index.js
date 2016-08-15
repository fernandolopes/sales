import { takeEvery, delay } from 'redux-saga'
import { put } from 'redux-saga/effects'
import { fork } from 'redux-saga/effects';
import { listaUsuarios } from './usuariosSaga';

export default function* rootSaga(){
  yield fork(listaUsuarios);
}

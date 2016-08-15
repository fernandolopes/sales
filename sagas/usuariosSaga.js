import fetch from 'isomorphic-fetch';
import { takeEvery } from 'redux-saga';
import { call, put } from 'redux-saga/effects';

/*
function fetchList(id) {
  const url = (id) ? `/feedbacks/${id}.json` : '/feedbacks.json';
  return fetch(url)
          .then(response => response.json())
          .then(json => json);
}
*/

function* users() {
  const config = {
    method: 'GET',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };
  return yield fetch('/usuarios.json', config)
                        .then(response => response.json())
                        .then(json => json);
}

function* fetchUsers(){
  try{
    const usuarios = yield call(users);
    yield put({type:'USUARIO_SUCESSO',payload: usuarios});
  } catch(e){
    yield put({type:'USER_FETCH_FAILED', payload: e.message});
  }
}

export function* listaUsuarios() {
  yield* takeEvery('GET_USUARIO', fetchUsers);
}

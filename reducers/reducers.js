import listaUsuarios from '../sagas';

export const envio = (state ={}, action) => {

    switch(action.type){
        case 'ADD_USER':{
            state = action.payload;
            return state;
        }
        default:
            return state;
    }
};

export const listas = (state ={}, action) => {
    switch(action.type){
        case 'USUARIO_SUCESSO':{
            state = {type: 'USUARIO_SUCESSO', payload: action.payload};
           // console.log(state);
            return state;
        }
        default:
            return state;
    }
};

export const abrir = (state = false, action) => {
  if (action.type === 'NEW_USER') {
    return action.payload;
  }
  return state;
};

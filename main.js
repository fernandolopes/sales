import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { createStore, applyMiddleware } from 'redux'
import tudo from './reducers/index'
import { Provider } from 'react-redux'
import injectTapEventPlugin from 'react-tap-event-plugin';
import createSagaMiddleware from 'redux-saga'
import rootSaga from './sagas/'

injectTapEventPlugin();

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  tudo,
  applyMiddleware(sagaMiddleware)
);

sagaMiddleware.run(rootSaga);

store.subscribe(function() {
  console.log('passou aqui no listen');
  console.log(store.getState().listas);
});

ReactDOM.render(
       <Provider store={store}>
            <App />
       </Provider>,
       document.getElementById('app')
       );

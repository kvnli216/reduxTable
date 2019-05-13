import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../sagas/rootSaga';
import rootReducer from '../reducers';

const sagaMiddleware = createSagaMiddleware();
const middlewares = applyMiddleware(sagaMiddleware);

const store = createStore(
  rootReducer,
  composeWithDevTools(middlewares),
  // eslint-disable-next-line no-underscore-dangle
  // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);
sagaMiddleware.run(rootSaga);

export default store;

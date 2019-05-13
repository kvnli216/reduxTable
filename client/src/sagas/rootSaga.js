import { all } from 'redux-saga/effects';
import { watchAsyncGetData } from './saga';

export default function* rootSaga() {
  yield all([
    watchAsyncGetData(),
  ]);
}

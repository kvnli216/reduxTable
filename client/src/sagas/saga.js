import axios from 'axios';
import { takeEvery, call, put } from 'redux-saga/effects';


const getData = () => axios.get('/data');

export function* AsyncGetData() {
  try {
    const rowData = yield call(getData);
    const { data } = rowData;
    yield put({ type: 'GET_SUCCESS', payload: data });
  } catch (error) {
    yield put({ type: 'GET_FAILED', error }); // don't have a reducer for error catching yet
  }
}

export function* watchAsyncGetData() {
  yield takeEvery('ASYNC_GET_DATA', AsyncGetData);
}

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

export function* AsyncEditCell(payload) {
  yield put({ type: 'EDIT_CELL', payload }); // **CHECK** this line still works when commented out?
}

export function* watchAsyncGetData() {
  yield takeEvery('WATCH_GET_DATA', AsyncGetData);
}

export function* watchEditCell(action) {
  const { payload } = action;

  yield takeEvery('WATCH_EDIT_CELL', AsyncEditCell(payload));
}

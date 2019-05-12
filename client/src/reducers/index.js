import { combineReducers } from 'redux';
import rowData from './rowData';
import columnDefs from './columnDefs';


const rootReducer = combineReducers({
  columnDefs,
  rowData,
});

export default rootReducer;

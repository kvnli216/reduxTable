export const rowData = action => ({
  type: 'GET_ROW_DATA',
  payload: action,
});

export const AsyncRowData = action => ({
  type: 'ASYNC_GET_DATA',
  payload: action,
});

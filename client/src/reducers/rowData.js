const defaultState = [{
  username: 'DEFAULT',
  email: 'DEFAULT',
  subscriptions: 0,
  follows: 0,
  friends: 0,
  prime: false,
}];


const rowData = (state = defaultState, action) => {
  const { payload } = action;
  switch (action.type) {
    case 'EDIT_CELL':
      return {
        rowData: payload,
      };
    case 'GET_SUCCESS':
      return payload;
    case 'GET_FAILED':
      return state; // need better error handling
    default:
      return state;
  }
};

export default rowData;

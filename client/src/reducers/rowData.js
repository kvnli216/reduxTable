const defaultState = [{
  username: 'DEFAULT',
  email: 'DEFAULT',
  subscriptions: 0,
  follows: 0,
  friends: 0,
  prime: false,
}];

const rowData = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_SUCCESS':
      return action.payload;
    case 'GET_FAILED':
      return state; // need better error handling
    default:
      return state;
  }
};

export default rowData;

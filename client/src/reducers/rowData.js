const defaultState = [{
  username: 'test',
  email: 'test',
  subscriptions: 0,
  follows: 0,
  friends: 0,
  prime: false,
}];

const rowData = (state = defaultState, action) => {
  switch (action.type) {
    case 'GET_ROW_DATA':
      return action.payload;
    default:
      return state;
  }
};

export default rowData;

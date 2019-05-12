const defaultState = [
  { headerName: 'Username', field: 'username' },
  { headerName: 'Email', field: 'email' },
  { headerName: 'Subscriptions', field: 'subscriptions' },
  { headerName: 'Follows', field: 'follows' },
  { headerName: 'Friends', field: 'friends' },
  { headerName: 'Prime', field: 'prime' },
];

const columnDefs = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default columnDefs;

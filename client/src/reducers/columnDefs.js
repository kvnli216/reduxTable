const defaultState = [
  {
    headerName: 'Avatar',
    field: 'avatar',
    editable: false,
    cellRenderer: 'avatarCellRenderer',
    autoHeight: true,
  },
  {
    headerName: 'Username',
    field: 'username',
    editable: true,
  },
  {
    headerName: 'Email',
    field: 'email',
    editable: true,
  },
  {
    headerName: 'Subscriptions',
    field: 'subscriptions',
    editable: true,
  },
  {
    headerName: 'Follows',
    field: 'follows',
    editable: true,
  },
  {
    headerName: 'Friends',
    field: 'friends',
    editable: true,
  },
  {
    headerName: 'Prime',
    field: 'prime',
    editable: true,
  },
];

const columnDefs = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default columnDefs;

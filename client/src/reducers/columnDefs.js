const defaultState = [
  {
    headerName: 'Username',
    field: 'username',
    editable: true,
    cellEditor: 'cellEditor',
    cellEditorParams: {

    },
    getQuickFilterText(params) {
      return params.value.name;
    },
  },
  {
    headerName: 'Email',
    field: 'email',
    editable: true,
    getQuickFilterText(params) {
      return params.value.name;
    },
  },
  { headerName: 'Subscriptions', field: 'subscriptions', editable: true },
  { headerName: 'Follows', field: 'follows', editable: true },
  { headerName: 'Friends', field: 'friends', editable: true },
  { headerName: 'Prime', field: 'prime', editable: true },
];

const columnDefs = (state = defaultState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default columnDefs;

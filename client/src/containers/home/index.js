import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './home.css';
import CellEditor from '../cellEditor';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frameworkComponents: {
        cellEditor: CellEditor,
      },
      searchValue: '',
    };

    this.getData = this.getData.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.quickSearch = this.quickSearch.bind(this);
    this.cellValueChanged = this.cellValueChanged.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  onGridReady(params) {
    this.gridApi = params.api;
    this.gridColumnApi = params.columnApi;
  }

  getData() {
    // eslint-disable-next-line react/prop-types
    const { dispatch } = this.props;

    dispatch({ type: 'WATCH_GET_DATA' });
  }

  cellValueChanged() {
    // eslint-disable-next-line react/prop-types
    const { rowData, dispatch } = this.props;
    const newState = rowData;

    dispatch({ type: 'WATCH_EDIT_CELL', payload: newState });
  }

  updateSearch(e) {
    e.preventDefault();
    const text = e.target.value;
    this.setState({
      searchValue: text,
    });
  }

  quickSearch() {
    const { searchValue } = this.state;
    // this.props.api.setQuickFilter(searchValue);
  }


  render() {
    const { columnDefs, rowData } = this.props;
    const { frameworkComponents } = this.state;

    return (
      <div className="home">
        <div className="header">
          <h1 className="title">Twitch Accounts</h1>
          <button type="button" className="refreshButton" onClick={this.getData}>Refresh</button>
        </div>
        <label htmlFor="filter">
          Global Filter
          <input id="filter" type="text" onKeyUp={this.quickSearch} onChange={this.updateSearch} />
        </label>
        <div
          className="ag-theme-balham"
          style={{
            height: '1000px',
            width: '1200px',
          }}
        >
          <AgGridReact
            columnDefs={columnDefs}
            rowData={rowData}
            animateRows
            enableFilter
            // enable delta updates
            deltaRowDataMode
            // return id required for tree data and delta updates
            getRowNodeId={data => data.id}
            frameworkComponents={frameworkComponents}
            onGridReady={this.onGridReady}
            onCellValueChanged={this.cellValueChanged}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  columnDefs: state.columnDefs,
  rowData: state.rowData,
});

Home.defaultProps = {
  columnDefs: PropTypes.array,
  rowData: PropTypes.array,
};

Home.propTypes = {
  columnDefs: PropTypes.arrayOf(PropTypes.shape(
    {
      headerName: PropTypes.string,
      field: PropTypes.string,
    },
    {
      headerName: PropTypes.string,
      field: PropTypes.string,
    },
    {
      headerName: PropTypes.string,
      field: PropTypes.string,
    },
    {
      headerName: PropTypes.string,
      field: PropTypes.string,
    },
    {
      headerName: PropTypes.string,
      field: PropTypes.string,
    },
    {
      headerName: PropTypes.string,
      field: PropTypes.string,
    },
  )),
  rowData: PropTypes.arrayOf(PropTypes.shape({
    username: PropTypes.string,
    email: PropTypes.string,
    subscriptions: PropTypes.number,
    follows: PropTypes.number,
    friends: PropTypes.number,
    prime: PropTypes.bool,
  })),
};

export default connect(mapStateToProps)(Home);

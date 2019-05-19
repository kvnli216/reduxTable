import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './index.css';
import CellEditor from '../cellEditor';
import Filter from '../../components/filter';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      frameworkComponents: {
        cellEditor: CellEditor,
      },
      searchValue: undefined,
    };

    this.getData = this.getData.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.cellValueChanged = this.cellValueChanged.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    // eslint-disable-next-line react/prop-types
    const { dispatch } = this.props;

    dispatch({ type: 'WATCH_GET_DATA' });
  }

  updateSearch(e) {
    // debugger;
    const text = e.target.value;
    this.setState(
      { searchValue: text },
    );
    e.preventDefault();
  }

  cellValueChanged() {
    // eslint-disable-next-line react/prop-types
    const { rowData, dispatch } = this.props;
    const newState = rowData;

    dispatch({ type: 'WATCH_EDIT_CELL', payload: newState });
  }

  render() {
    const { columnDefs, rowData } = this.props;
    const { frameworkComponents, searchValue } = this.state;

    return (
      <div className="home">
        <div className="header">
          <h1 className="title">Twitch Accounts</h1>
          <button type="button" className="refreshButton" onClick={this.getData}>Refresh</button>
        </div>
        <div className="controller">
          <Filter updateSearch={this.updateSearch} searchValue={searchValue} />
          <button type="button" className="exportButton">Export to csv</button>
        </div>
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
            quickFilterText={searchValue}
            frameworkComponents={frameworkComponents}
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

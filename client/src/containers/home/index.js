import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import axios from 'axios';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './home.css';
// import * as actions from '../actions';

class Home extends React.Component {
  constructor(props) {
    super(props);

    this.getData = this.getData.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  getData() {
    // eslint-disable-next-line react/prop-types
    const { dispatch } = this.props;

    axios.get('/data')
      .then((rowData) => {
        // dispatch({ type: 'GET_ROW_DATA', payload: rowData.data });
        dispatch({ type: 'ASYNC_GET_DATA', payload: rowData.data });
      })
      .catch((err) => {
        // eslint-disable-next-line no-console
        console.log('err on GET DATA: ', err);
      });
  }

  render() {
    const { columnDefs, rowData } = this.props;

    return (
      <div className="home">
        <div className="header">
          <h1 className="title">Twitch Accounts</h1>
          <button type="button" className="refreshButton" onClick={this.getData}>Refresh</button>
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
          />
        </div>
      </div>
    );
  }
}

// *** Replaced actions with redux-saga ***
// // eslint-disable-next-line no-unused-vars
// const mapDispatchToProps = dispatch => ({
//   // getRowData: data => dispatch(actions.getRowData(data)),
//   getRowData: data => dispatch(actions.AsyncRowData(data)),
// });

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

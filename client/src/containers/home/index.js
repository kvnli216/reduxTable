/* eslint-disable react/no-unused-state */
import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './index.css';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CellEditor from '../cellEditor';
import AvatarCellRenderer from '../../components/avatarCellRenderer';
import AvatarModal from '../../components/avatarModal';
import Filter from '../../components/filter';
import Export from '../../components/export';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      context: { componentParent: this },
      frameworkComponents: {
        cellEditor: CellEditor,
        avatarCellRenderer: AvatarCellRenderer,
        avatarModal: AvatarModal,
      },
      loadingOverlayComponent: 'avatarModal',
      loadingOverlayComponentParams: {
        username: null,
        subscriptions: null,
        prime: null,
      },
      searchValue: undefined,
    };

    this.getData = this.getData.bind(this);
    this.updateSearch = this.updateSearch.bind(this);
    this.cellValueChanged = this.cellValueChanged.bind(this);
    this.rowClicked = this.rowClicked.bind(this);
    this.exportCsv = this.exportCsv.bind(this);
  }

  componentDidMount() {
    this.getData();
  }

  onGridReady = (params) => {
    this.api = params.api;
    this.api.sizeColumnsToFit();
  }

  getData() {
    // eslint-disable-next-line react/prop-types
    const { dispatch } = this.props;

    dispatch({ type: 'WATCH_GET_DATA' });
  }

  exportCsv() {
    this.api.exportDataAsCsv();
  }

  updateSearch(e) {
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

  rowClicked(e) {
    const { outerHTML } = e.event.target;
    const colsArr = ['username', 'email', 'subscription', 'follows', 'friends', 'prime', 'input'];
    const contains = (target, arr) => {
      let value = 0;
      arr.forEach((word) => {
        value += target.includes(word);
      });
      return (value === 0);
    };

    if (contains(outerHTML, colsArr)) {
      const { username, subscriptions, prime } = e.data;
      this.setState({
        loadingOverlayComponentParams: {
          username,
          subscriptions,
          prime,
        },
      }, () => {
        this.api.showLoadingOverlay();
      });
    }
  }

  render() {
    const { columnDefs, rowData } = this.props;
    const {
      context,
      frameworkComponents,
      loadingOverlayComponent,
      loadingOverlayComponentParams,
      searchValue,
    } = this.state;

    return (
      <div className="home">
        <div className="controller">
          <AppBar position="static">
            <Toolbar>
              <Typography variant="h6" color="inherit" noWrap>
                Twitch Users
              </Typography>
              <Filter updateSearch={this.updateSearch} searchValue={searchValue} />
              <Button type="button" variant="contained" color="primary" className="refreshButton" onClick={this.getData}>Refresh</Button>
              <Export exportCsv={this.exportCsv} />
            </Toolbar>
          </AppBar>
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
            onGridReady={this.onGridReady}
            animateRows
            quickFilterText={searchValue}
            context={context}
            frameworkComponents={frameworkComponents}
            loadingOverlayComponent={loadingOverlayComponent}
            loadingOverlayComponentParams={loadingOverlayComponentParams}
            onCellValueChanged={this.cellValueChanged}
            exportDataAsCsv={this.exportToCsv}
            onRowClicked={this.rowClicked}
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

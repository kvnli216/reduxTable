import React from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-balham.css';
import './App.css';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      columnDefs: [
        {headerName: "Username", field: "username"},
        {headerName: "Email", field: "email"},
        {headerName: "Subscriptions", field: "subscriptions"},
        {headerName: "Follows", field: "follows"},
        {headerName: "Friends", field: "friends"},
        {headerName: "Prime", field: "prime"},
      ],
      rowData: []
    }

    this.updateColumnDefs = this.updateColumnDefs.bind(this);
    this.updateRowData = this.updateRowData.bind(this);
    this.getData = this.getData.bind(this);
  }

  updateColumnDefs(defs) {
    this.setState({
      columndDefs: defs
    })
  }

  updateRowData(data) {
    this.setState({
      rowData: data
    })
  }

  getData() {
    axios.get('/data')
      .then(rowData => {
        this.updateRowData(rowData.data);
      })
      .catch(err => {
        console.log('err on /data GET: ', err);
      });
  }

  componentDidMount() {
    this.getData();
  }

   render() {
    return (
      <div className='app'>
        <div className='header'>
          <h1 className='title'>Twitch Accounts</h1>
          <button className='refreshButton' onClick={this.getData}>Refresh</button>
        </div>

        <div
          className="ag-theme-balham"
          style={{ 
          height: '1000px', 
          width: '1200px' }} 
        >
          <AgGridReact
            columnDefs={this.state.columnDefs}
            rowData={this.state.rowData}>
          </AgGridReact>
        </div>
      </div>
    );
  }
}

export default App;

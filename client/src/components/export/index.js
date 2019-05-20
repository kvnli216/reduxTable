import React from 'react';
import './index.css';

const Export = (props) => {
  const { exportCsv } = props;
  return (
    <button type="button" className="exportButton" onClick={exportCsv}>Export to csv</button>
  );
};

export default Export;

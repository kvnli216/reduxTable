import React from 'react';
import Button from '@material-ui/core/Button';
import './index.css';

const Export = (props) => {
  const { exportCsv } = props;
  return (
    <Button
      type="button"
      variant="contained"
      color="primary"
      className="exportButton"
      onClick={exportCsv}
    >
      Export to csv
    </Button>
  );
};

export default Export;

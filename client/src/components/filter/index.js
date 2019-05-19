/* eslint-disable react/prop-types */
import React from 'react';
import './index.css';

const Filter = (props) => {
  const { updateSearch, searchValue } = props;
  return (
    <form className="filterForm">
      <label htmlFor="filter">
        Global Filter:
        <input id="filter" type="text" onChange={updateSearch} defaultValue={searchValue} />
      </label>
    </form>
  );
};

export default Filter;

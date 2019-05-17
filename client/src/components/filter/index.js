import React from 'react';

class Filter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      filter: '',
    };
  }

  render() {
    return (
      <form>
        <input name="filter" />
        <button type="button">Apply</button>
      </form>
    );
  }
}

export default Filter;

import React, { Component } from 'react';

class CellEditor extends Component {
  constructor(props) {
    super(props);

    this.textInput = React.createRef();
    this.getValue = this.getValue.bind(this);
  }

  componentDidMount() {
    this.textInput.current.addEventListener('keydown', this.onKeyDown);
  }

  getValue() {
    const input = this.textInput.current.value;
    return input;
  }

  afterGuiAttached() {
    if (this.textInput) this.textInput.current.focus();
  }

  render() {
    return (
      <div>
        <input ref={this.textInput} />
      </div>
    );
  }
}

export default CellEditor;

import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import CloseIcon from '@material-ui/icons/Close';
import './index.css';

const styles = () => ({
  fab: {
    marginLeft: '10px',
    size: 'mini',
  },
});

class AvatarModal extends Component {
  constructor(props) {
    super(props);

    this.closeModal = this.closeModal.bind(this);
  }

  closeModal() {
    this.props.api.hideOverlay();
  }

  render() {
    const {
      username, subscriptions, prime, classes,
    } = this.props;

    return (
      <div className="profile-modal">
        <div className="modal-header">
          <h2>{`${username} Summary`}</h2>
          <Fab color="primary" className={classes.fab} onClick={this.closeModal}>
            <CloseIcon />
          </Fab>
        </div>
        <div className="modal-content">
          {`Subscriptions: ${subscriptions}`}
          <br />
          {`Prime: ${prime}`}
          <br />
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(AvatarModal);

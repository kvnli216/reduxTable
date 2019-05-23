import React from 'react';
import './index.css';

const AvatarCellRenderer = (props) => {
  const { value } = props;

  return (
    <div className="avatar-cell">
      <img width="25px" src={value} />
    </div>
  );
};

export default AvatarCellRenderer;

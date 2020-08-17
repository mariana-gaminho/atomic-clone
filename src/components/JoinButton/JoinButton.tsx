import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';

import './JoinButton.scss';

const JoinButton: FunctionComponent = () => {
  return (
    <Link to="/join-form">
      <button className="join-button">¡Quiero ser parte!</button>
    </Link>
  );
};

export default JoinButton;

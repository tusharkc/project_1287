import React from 'react';
import { Progress } from 'reactstrap';
import './styles.css';

function Splash() {
  return (
    <div className="max-screen">
      <div className="logo">
        <img src="/images/logo_bilty.png" />
      </div>
      <div className="loading">
        <div className="progress">
          <Progress color="warning" value="25" />
        </div>
        <div className="loading-text">Loading...</div>
      </div>
      <div className="bottom-label">
        <div className="expand">Expand your Business opportunity</div>
        <div className="copy">CopyRight @ 2020 All rights reserved</div>
      </div>
    </div>
  );
}

export default Splash;

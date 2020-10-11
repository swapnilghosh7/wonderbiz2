import React, {useEffect, useState} from 'react';
import './LaunchDashboardBox.css';


function LaunchDashboardBox(props) {
  // console.log(props);
  return (    
            <div className="launchDashboardBox">
              <span className="launchDashboardBoxTitle">{props.launchDashboardBoxData + ' Launches'} </span>
              <span className="launchDashboardBoxMessage">{props.number}</span>
            </div>
  );
}

export default LaunchDashboardBox;

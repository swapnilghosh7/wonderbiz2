import React, {useEffect, useState} from 'react';
import './LaunchDashboardBox.css';


function LaunchDashboardBox(props) {
  // console.log(props);
  return (    
            <div className="launchDashboardBox">
              <span className="launchDashboardBoxMessage">{props.launchDashboardBoxData}</span>
              <span className="launchDashboardBoxMessage">{props.number}</span>
            </div>
  );
}

export default LaunchDashboardBox;

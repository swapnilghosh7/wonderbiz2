import React, {useEffect, useState} from 'react';
import './DashboardMap.css';
import MapChart from '../MapChart/MapChart';


function DashboardMap(props) {

  return (
    <div className="launchpadWrapper">
      <div className="launchpadLocationHeadingWrap">
        <span className="launchPadHeading">Launch Pad Location Map</span>
      </div>
      <div className="dashboardMapWrap" style={{ height: '600px', width: '450px' }}>
        {props.mapData &&
            <MapChart mapData={props.mapData}/>
        }
        
  
      </div>
    </div>
  );
}

export default DashboardMap;

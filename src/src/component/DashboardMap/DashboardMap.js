import React from 'react';
import './DashboardMap.css';
import MapChart from '../MapChart/MapChart';


function DashboardMap(props) {

  return (
    <div className="launchpadWrapper">
      <div className="launchpadLocationHeadingWrap">
        <h4 className="launchPadHeading">Launch Pad Location Map</h4>
      </div>
      <div className="dashboardMapWrap" style={{ height: '400px', width: '500px' }}>
        {props.mapData &&
            <MapChart mapData={props.mapData}/>
        }
        
  
      </div>
    </div>
  );
}

export default DashboardMap;

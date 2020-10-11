import React, {useEffect, useState} from 'react';
import './DashboardMap.css';
import MapChart from '../MapChart/MapChart';


function DashboardMap(props) {

  return (
    
      <div className="dashboardMapWrap" style={{ height: '600px', width: '600px' }}>
        {props.mapData &&
            <MapChart mapData={props.mapData}/>
        }
        
  
      </div>
    
  );
}

export default DashboardMap;

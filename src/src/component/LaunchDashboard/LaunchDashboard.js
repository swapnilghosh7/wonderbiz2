import React, {useEffect, useState} from 'react';
import './LaunchDashboard.css';
import LaunchDashboardBox from '../LaunchDashboardBox/LaunchDashboardBox';



function LaunchDashboard(props) {
  const [filterData, setFilterData] = useState({'dashboardData' : ''});
  function setStateData()
  {
    setFilterData({'dashboardData' : props.dashboardData});
  }
  
  useEffect(setStateData, [props.dashboardData])


  
  return (
    
      <div className="launchDashboardWrap">

            <div className="launchDashboard">
              <span className="launchDashboardMessage">Launch Dashboard</span>
            </div>
            <div className="launchDashboardBoxMainWrap">
              {filterData.dashboardData && 
              filterData.dashboardData.map((data,i) => {
                return(
                  <LaunchDashboardBox number={data[Object.keys(data)[0]].length} launchDashboardBoxData={Object.keys(data)[0]}  key={i} />
                )
              })
              }
            </div>
            
  
      </div>
    
  );
}

export default LaunchDashboard;

import React from 'react';
import './DashboardTimeline.css';


function DashboardTimeline(props) {
  var dateobj =  new Date();
  let isoDate =  dateobj.toISOString();
  // console.log(props);
  return (
    
      <div className="dashboardTimelineWrap">
            <div className="dashboardTimelineHeadingWrap">
              <h4 className="dashboardTimelineHeading">Launch Timeline</h4>
            </div>
            <div className="dashboardTimeline">
              <ul className="dashboardTimelineList">
                {props.timelineData && props.timelineData['all'].map((data) => {
                  let timeline =  data.launch_date_utc > isoDate ? 'upcoming' : 'past';
                  let launch_success = data.launch_success != null ? data.launch_success ? 'successful' : 'failed' : '';
                  return(
                  <li key={data.flight_number} className={'dashboardTimelineListItem ' + launch_success + ' ' + timeline}>
                    <span className="flightNum">Flight Num: {data.flight_number}.</span> 
                    {data.mission_name} 
                    <span className="statuslabel">{launch_success ? launch_success : 'pending'}</span> 
                    </li>
                  )
                  
                })
          
                }
              </ul>
             
            </div>
            
  
      </div>
    
  );
}

export default DashboardTimeline;

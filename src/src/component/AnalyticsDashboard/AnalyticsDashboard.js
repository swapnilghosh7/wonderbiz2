import React, {useEffect, useState} from 'react';
import './AnalyticsDashboard.css';
import LaunchDashboard from '../LaunchDashboard/LaunchDashboard';
import DashboardMap from '../DashboardMap/DashboardMap';
import DashboardTimeline from '../DashboardTimeline/DashboardTimeline';
import DashboardBar from '../DashboardBar/DashboardBar';
import axios from 'axios';

function AnalyticsDashboard() { 
  const [data,newData] = useState({'dashboardData' : ''});
  const [mapData,newMapData] = useState({'mapdata': ''});
  const [bardata,newBarData] = useState({'bardata': ''});


  var dateobj =  new Date();
  let isoDate =  dateobj.toISOString();

  function fetchData(){
    axios.get('https://api.spacexdata.com/v3/launches').then((response)=>{
      // console.log(response.data);
      let dashboardData = [];
      let upcoming = response.data.filter((data)=>{
            return data.launch_date_utc > isoDate;
            
        });
      dashboardData.push({'upcoming': upcoming});
      let past = response.data.filter((data)=>{
        return data.launch_date_utc < isoDate;
        
    });
    dashboardData.push({'past': past});
    dashboardData.push({'all': response.data});

      newData({'dashboardData' : dashboardData});
      newBarData({'bardata' : response.data});
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  function fetchLaunchpadData()
  {
    axios.get('https://api.spacexdata.com/v3/launchpads').then((response)=>{
      newMapData({'mapdata' : response.data})
    })
    .catch(function (error) {
      console.log(error);
    })
  }

  // function processBarChartData(){
  //   // var uniqueYear =  [...new Set(data.dashboardData[2].map(item => item.launch_year))]; 
  //   console.log(bardata);
  // }

  useEffect(() => {
    fetchData();
    fetchLaunchpadData();

  }, [])

  // useEffect(() => {

  //   processBarChartData();
  // }, [bardata])
  
  return (
      <>  
        <div className="analyticsDashboardWrap">
              <div className="analyticsDashboard">
                <span className="analyticsDashboardMessage">Analytics Dashboard</span>
                <p className="analyticsDashboardText">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
              </div>
              <LaunchDashboard dashboardData={data.dashboardData} />

              <div className="dashboardMapWrapper">
                {mapData.mapdata &&
                  <DashboardMap mapData={mapData.mapdata} />
                }
                
                {bardata.bardata && 
                  <DashboardBar barGraphData={bardata} />
                }
                
                <DashboardTimeline timelineData={data.dashboardData[2]} />
              </div>
      
        </div>
        
      </>
    
  );
}

export default AnalyticsDashboard;

import React, {useEffect, useState} from 'react';
import './DashboardBar.css';
import Chart from 'chart.js';

function DashboardBar(props) {
  const [barData, setBarData] = useState({'barData' : ''});
  const [uniqueYearData, setUniqueYear] = useState([]);


  function setBarDataState()
  {
    var uniqueYear =  [...new Set(props.barGraphData.bardata.map(item => item.launch_year))]; 
    setUniqueYear(uniqueYear);
    

    let dataArray = [];
    uniqueYear.map((data) => {
      
      let temparray = props.barGraphData.bardata.filter((item) => {
        return data === item.launch_year;
      })

      dataArray.push(temparray.length);
    })
    console.log(dataArray);
    setBarData({'barData' : dataArray});
   
  }
  
  function createBargraph(){
    var ctx = document.getElementById('dashboardGraphbar').getContext('2d');

    var myBarChart = new Chart(ctx, {
              type: 'bar',
              
              data: {
                labels: uniqueYearData,
                datasets: [{
                  label: 'Launch per year',
                  backgroundColor: 'rgb(255, 99, 132)',
                  borderColor: 'rgb(255, 99, 132)',
                  data: barData.barData
                }]
              },
              options: {
              }
          });
  }
  useEffect(setBarDataState, [props.barGraphData]);
  useEffect(createBargraph, [barData]);
  
  
  return (
    
      <div className="dashboardBarWrap">

            <div className="dashboardBar">
              <canvas id="dashboardGraphbar" width="500" height="500"></canvas>
            </div>
            
  
      </div>
    
  );
}

export default DashboardBar;

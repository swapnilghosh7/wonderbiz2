import React, {useState, useEffect} from 'react';
import Header from './src/component/Header/Header';
import Menubar from './src/component/Menubar/Menubar';
import AnalyticsDashboard from './src/component/AnalyticsDashboard/AnalyticsDashboard';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import 'popper.js/dist/popper.min.js';
import 'jquery/dist/jquery.min.js';


import './App.css';

function App() {
  const [menuData, setMenuData] = useState([])
  function menudata()
  {
    let menuDatatemp = [{
      'menuHeading': 'a',
      'menuList': [1,2,3]
    },
    {
      'menuHeading': 'b',
      'menuList': [4,5,6]
    },
    {
      'menuHeading': 'c',
      'menuList': [7,8,9]
    }];
    setMenuData(menuDatatemp);
  }
  useEffect(() => {
    menudata();
  }, [])
  return (
    <div className="App">
        <Header/>
        <div className="mainWrapper">
          {menuData && 
            <Menubar menudata={menuData} />
          }
          
          <AnalyticsDashboard />
        </div>
        
    </div>
  );
}

export default App;

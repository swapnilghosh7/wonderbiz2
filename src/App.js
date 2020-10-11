import React from 'react';
import Header from './src/component/Header/Header';
import Menubar from './src/component/Menubar/Menubar';
import AnalyticsDashboard from './src/component/AnalyticsDashboard/AnalyticsDashboard';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
        <Header/>
        <div className="mainWrapper">
          <Menubar />
          <AnalyticsDashboard />
        </div>
        
    </div>
  );
}

export default App;

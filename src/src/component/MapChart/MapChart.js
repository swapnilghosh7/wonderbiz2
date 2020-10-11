import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography,Marker } from "react-simple-maps";
import { scaleQuantile } from "d3-scale";
import { csv } from "d3-fetch";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapChart = (props) => {
  const [data, setData] = useState({'mapData': ''});

  useEffect(() => {
      setData({'mapData' : props.mapData});
      console.log(props.mapData);
  }, []);



  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => {
            

            let cur = data.mapData.find((s) => {
              console.log(s.location.region);
            console.log("GEO =>" + geo.properties.name);
              return s.location.region === geo.properties.name;
            });
            console.log(cur);
            return (
              <Geography
                key={geo.rsmKey}
                geography={geo}
                fill={cur ? "#1E90FF" : "#666"}
              />
            );
          })
        }
      </Geographies>
      {/* {data.mapData && data.mapData.map((s,i) => {
        // let [long,lat] = [s.location.longitude, s.location.latitude];
        let coordinatesAxis = new Array(s.location.longitude, s.location.latitude);
        console.log(Array.isArray(coordinatesAxis));
        if(Array.isArray(coordinatesAxis))
        {
          return(
            <Marker coordinates={coordinatesAxis}>
              <text textAnchor="middle" fill="#F53">
                {s.name}
              </text>
              <circle r={8} fill="#F53" />
            </Marker>
          )
        }
        
        
      }) */}

      
    </ComposableMap>
  );
};

export default MapChart;
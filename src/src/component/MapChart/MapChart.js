import React, { useState, useEffect } from "react";
import { ComposableMap, Geographies, Geography } from "react-simple-maps";

const geoUrl = "https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json";

const MapChart = (props) => {
  const [data, setData] = useState({'mapData': ''});

  useEffect(() => {
      setData({'mapData' : props.mapData});
  }, [props.mapData]);



  return (
    <ComposableMap projection="geoAlbersUsa">
      <Geographies geography={geoUrl}>
        {({ geographies }) =>
          geographies.map(geo => {
            let cur = data.mapData.find((s) => {
              return s.location.region === geo.properties.name;
            });
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

      
    </ComposableMap>
  );
};

export default MapChart;
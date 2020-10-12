import React from 'react';
import './MenubarList.css';


function MenubarList(props) {

  return (
    <div className="menuBarListWrap">
      <div className="menuBarHeading">{props.menubarHeading}</div>
      
      <ul className="menuBarlistWrap">
      {props.menubarList && props.menubarList.map((data)=>{
        return(
          <li className="menuBarListItem">{data}</li>
        )
      })

      }
      </ul>
    </div> 
    
  );
}

export default MenubarList;

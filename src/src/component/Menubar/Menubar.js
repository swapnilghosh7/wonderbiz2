import React from 'react';
import './Menubar.css';
import $ from 'jquery';
import {BsFillCaretRightFill} from "react-icons/bs";
import MenubarList from '../MenubarList/MenubarList';

function Menubar(props) {
  function toggleView()
  {
    $('.menubarwrapper').toggleClass('open');
  }
  return (
    
      <div className="menubarwrapper">
          <div className="menuBarContentWrap">
            {props.menudata && props.menudata.map((data,i) => {
              return(<MenubarList menubarHeading={data.menuHeading} menubarList={data.menuList} ></MenubarList>)
            })

            }

          </div>
          <div className="menuBarButton" onClick={() => toggleView()}>
              <BsFillCaretRightFill />
          </div>
      </div>

     
    
  );
}

export default Menubar;

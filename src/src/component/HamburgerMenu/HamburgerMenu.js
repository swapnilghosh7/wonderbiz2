import React from 'react';
import './HamburgerMenu.css';

function HamburgerMenu() {
  return (
    <div className="hamburgerWrap">
    <button id="navBarButton" className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navBarContentWrap" aria-controls="navBarContentWrap" aria-expanded="false" aria-label="Toggle navigation">
        <div className="navbar-toggler-icon navBarHamburgerWrapper">
            <span className="navBarLine"></span>
            <span className="navBarLine"></span>
            <span className="navBarLine"></span>
        </div>
    </button>
    <div className="navBarContentWrap collapse navbar-collapse" id="navBarContentWrap">
        <ul className="navbar-nav menuListWrap">
            {/* <li className="nav-item menuListItem">Login/Signup</li> */}
            <li className="nav-item menuListItem">Home</li>
            <li className="nav-item menuListItem">About Us</li>
            <li className="nav-item menuListItem">Support</li>
            <li className="nav-item menuListItem">Logout</li>
        </ul>
    </div>
    </div>
  );
}

export default HamburgerMenu;


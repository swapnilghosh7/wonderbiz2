import React from 'react';
import './Header.css';
import HamburgerMenubar from '../HamburgerMenu/HamburgerMenu';

function Header() {
  return (
    
      <header className="header">
          <div className="container">
            <div className="headerWrapper">
            <h1 className="companyName">Company</h1>
            

              <HamburgerMenubar />
            </div>
            
          </div>     
      </header>
    
  );
}

export default Header;

import React from 'react';
import { ReactSVG } from 'react-svg';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-logo">
        <ReactSVG src="./svg/headerLogo.svg" className="header-logo--svg" />
        <div className="header-logo--text">Skdimka</div>
      </div>
      <nav className="header-nav">
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/contact">Contact</a>
          </li>
          <li>
            <a href="/project">Project</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;

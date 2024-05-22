import React from "react";
import { ReactSVG } from "react-svg";

const Header: React.FC = () => {
  return (
    <header className="header">
      <ReactSVG src="/headerLogo.svg" />
      <nav className="header__nav">
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
        </ul>
      </nav>
      <button className="header__login">Login</button>
    </header>
  );
};

export default Header;

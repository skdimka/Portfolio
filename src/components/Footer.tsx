import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <ul>
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#project">Project</a>
          </li>
        </ul>
      </nav>
    </footer>
  );
};

export default Footer;

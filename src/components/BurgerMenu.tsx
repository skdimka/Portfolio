import React, { useState } from 'react';
import classNames from 'classnames';

const BurgerMenu: React.FC = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <div className="burger-menu">
      <button
        className={classNames('burger-menu__button', {
          'burger-menu__button--open': isMenuOpen,
        })}
        onClick={toggleMenu}
      >
        <span className="burger-menu__icon"></span>
      </button>
      <nav
        className={classNames('burger-menu__nav', {
          'burger-menu__nav--open': isMenuOpen,
        })}
      >
        <ul className="burger-menu__list">
          <li className="burger-menu__item">
            <a href="#home" className="burger-menu__link">
              Home
            </a>
          </li>
          <li className="burger-menu__item">
            <a href="#about" className="burger-menu__link">
              About
            </a>
          </li>
          <li className="burger-menu__item">
            <a href="#project" className="burger-menu__link">
              Project
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default BurgerMenu;

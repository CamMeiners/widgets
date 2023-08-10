import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import './BurgerMenu.css';
function BurgerMenu() {
  function handleOpenMenu() {
    document.getElementById('menu').style.width = '200px';
  }
  function handleCloseMenu() {
    document.getElementById('menu').style.width = '0px';
  }

  return (
    <div>
      <div className="burgerMenu" id="burgerMenu">
        <FontAwesomeIcon icon={faBars} onClick={handleOpenMenu} />
      </div>
      <div className="menu" id="menu">
        <FontAwesomeIcon
          className="closeIcon"
          icon={faXmark}
          onClick={handleCloseMenu}
        />
        <div className="links">
          <a href="/" draggable>
            Home
          </a>
          <a href="/iptracker" draggable>
            IP Tracker
          </a>
          <a href="/tictactoe" draggable>
            Tic Tac Toe
          </a>
          <a href="/triangle" draggable>
            Sierpinski
            <br /> Triangle
          </a>
          {/* <a href="/movieapi" draggable>
            Movie API
          </a> */}
        </div>
      </div>
    </div>
  );
}
export default BurgerMenu;

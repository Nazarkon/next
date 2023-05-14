/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import './DotsMenu.scss';

const DotsMenu = ({ navigationList, movieID }) => {
  const [isVisible, setVisibility] = useState(false);

  return (
    <div className="dot-menu-container">
      <div
        id="three-dot-menu"
        className="dot-menu-more-button"
        onClick={(event) => {
          setVisibility(true);
        }}
      >
        <div className="dot-menu-container-more-button-dot"></div>
        <div className="dot-menu-container-more-button-dot"></div>
        <div className="dot-menu-container-more-button-dot"></div>
      </div>
      {isVisible ? (
        <div className="dot-menu-portal-container">
          <ul className="dot-menu-portal">
            <FontAwesomeIcon
              id="close-icon"
              className="dot-menu-icon"
              onClick={(event) => {
                setVisibility(false);
              }}
              data-testid="close-icon"
              icon={faTimes}
              style={{ color: 'white' }}
            />
            {navigationList.map((navLink) => (
              <li
                className="dot-menu-portal-item"
                key={navLink.id}
                onClick={() => navLink.action(movieID)}
              >
                {navLink.name}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </div>
  );
};

export default DotsMenu;

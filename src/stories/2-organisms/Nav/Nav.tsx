import React from 'react';
import './Nav.css';

export const Nav = (): JSX.Element => {
  return (
    <div className="box">
      <div className="nav">
        <div className="group">
          <div className="text-wrapper">Home</div>
          <div className="div">About</div>
          <div className="text-wrapper-2">Contact</div>
        </div>
        <button className="element-button-small">
          <button className="button-label">Buy Now</button>
        </button>
      </div>
    </div>
  );
};

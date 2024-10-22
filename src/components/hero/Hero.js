import React from 'react';
// import './index.css';
import Invitation from '../../assets/newIvLook.png';

const Hero = () => {
  return (
    <div className="hero">
      <img src={Invitation} alt="Wedding" className="hero-image" />
      <div className="hero-text">
        {/* <h1>Welcome to Our Wedding</h1>
        <p>We are excited to share our special day with you!</p> */}
      </div>
    </div>
  );
};

export default Hero;

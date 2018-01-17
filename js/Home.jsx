import React from 'react';

import Nav from './Nav';
import Countdown from './Countdown';

const firstComp = () => (
  <div>
    <div>
      <Nav />
    </div>
    <div className="container">
      <h1 id="home_h1">Alex and Jacqueline</h1>
      <h2>Brooklyn, New York</h2>
      <h3>October 13th, 2018</h3>
      <div>
        <Countdown />
      </div>
      <div>
        <img id="home_image" alt="Alex and Jacqueline" src="/public/img/posters/ten.JPG" />
      </div>
    </div>
  </div>
);

export default firstComp;

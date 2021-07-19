import React from 'react';
import AboutMe from './AboutMe.js';
import Portfolio from './Portfolio.js';
import Promo from './Promo.js';
import Techs from './Techs.js';
import Aboutproject from './AboutProject.js';
import './Main.css';

function Main() {
  return (
    <main className='main'>
      <Promo />
      <Aboutproject />
      <Techs />
      <AboutMe />
      <Portfolio />
    </main>
  );
}

export default Main;

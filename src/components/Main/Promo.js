import React from 'react';
import landingLogo from '../../images/landingLogo.png';
import './Promo.css';

function Promo() {
  return (
    <section className='promo'>
      <div className='promo__text-block'>
        <h1 className='promo__header'>
          Учебный проект студента факультета Веб-разработки.
        </h1>
        <p className='promo__paragrph'>
          Листайте ниже, чтобы узнать больше про этот проект и его создателя.
        </p>
        <button className='promo__button'>Узнать больше</button>
      </div>
      <div>
        <img
          className='promo__img'
          alt='Очертания карты мира.'
          src={landingLogo}
        />
      </div>
    </section>
  );
}

export default Promo;

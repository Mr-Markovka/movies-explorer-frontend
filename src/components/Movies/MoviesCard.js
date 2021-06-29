import React from 'react';

import './MoviesCard.css';

function MoviesCard() {
  return (
    <li className='card card__item '>
      <button className='card__like' type='button' />
      <img className='card__img' alt='#' src='#' />
      <div className='card__bottom'>
        <h3 className='card__title'>#</h3>
        <p className='card__timer'>#</p>
      </div>
    </li>
  );
}

export default MoviesCard;

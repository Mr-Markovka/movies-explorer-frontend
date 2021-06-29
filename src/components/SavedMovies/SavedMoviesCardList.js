import React from 'react';
// import SavedMoviesCardList from './SavedMoviesCardList';
import pic1 from '../../images/1.jpg';
import pic2 from '../../images/2.jpg';
import pic3 from '../../images/3.jpg';

import './SavedMoviesCardList.css';

function SavedMoviesCardList() {
  return (
    <section className='saved-movies-cards'>
      <ul className='cards__list'>
        {/* <SavedMoviesCard /> */}
        <li className='saved-movies-card saved-movies-card__item '>
          <button className='saved-movies-card__delete' type='button' />

          <img className='saved-movies-card__img' alt='#' src={pic1} />
          <div className='saved-movies-card__bottom'>
            <h3 className='saved-movies-card__title'>33 слова о дизайне</h3>
            <p className='saved-movies-card__timer'>1ч 17м</p>
          </div>
        </li>

        <li className='saved-movies-card saved-movies-card__item '>
          <button className='saved-movies-card__delete_active' type='button' />
          <img className='saved-movies-card__img' alt='#' src={pic2} />
          <div className='saved-movies-card__bottom'>
            <h3 className='saved-movies-card__title'>
              Киноальманах «100 лет дизайна»
            </h3>
            <p className='saved-movies-card__timer'>1ч 17м</p>
          </div>
        </li>

        <li className='saved-movies-card saved-movies-card__item '>
          {/* <button className='saved-movies-card__delete saved-movies-card__delete_active' type='button'/> */}
          <img className='saved-movies-card__img' alt='#' src={pic3} />
          <div className='saved-movies-card__bottom'>
            <h3 className='saved-movies-card__title'>В погоне за Бенкси</h3>
            <p className='saved-movies-card__timer'>1ч 17м</p>
          </div>
        </li>
      </ul>
    </section>
  );
}

export default SavedMoviesCardList;

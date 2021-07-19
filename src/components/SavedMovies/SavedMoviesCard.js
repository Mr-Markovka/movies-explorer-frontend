import React from 'react';
import { useState } from 'react';
import './SavedMoviesCard.css';

function SavedMoviesCard(props) {
  const [isDeleted, setIsDeleted] = useState(false);

  const deleteMovie = () => {
    setIsDeleted(!isDeleted);
    props.onMovieDelete(props.savedMovie);
  };

  function getTimeFromMins(mins) {
    let hours = Math.trunc(mins / 60);
    let minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  }

  const cardDeleteButtonClassName = `saved-movies-card__btn-delete ${
    isDeleted ? 'saved-movies-card__delete' : 'saved-movies-card__delete_active'
  }`;
  return (
    <li className='card saved-movies-card__item '>
      <button
        className={cardDeleteButtonClassName}
        type='button'
        onClick={deleteMovie}
      />
      <a
        className='saved-movies-card__link'
        target='_blank'
        href={props.trailerLink}
        rel='noopener noreferrer'
      >
        <img
          className='saved-movies-card__img'
          alt={props.alt}
          src={props.src}
        />
      </a>
      <div className='saved-movies-card__bottom'>
        <h3 className='saved-movies-card__title'>{props.nameRU}</h3>
        <p className='saved-movies-card__timer'>
          {getTimeFromMins(props.duration)}
        </p>
      </div>
    </li>
  );
}

export default SavedMoviesCard;

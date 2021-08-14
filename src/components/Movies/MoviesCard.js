import React from 'react';
import './MoviesCard.css';

function MoviesCard({ onMovieSave, onMovieSaveDelete, ...props }) {
  const baseUrl = `https://api.nomoreparties.co`;

  const saveMovie = () => {
    if (!isLiked) {
      onMovieSave(props.movie);
    } else if (isLiked) {
      onMovieSaveDelete(props.movie);
    }
  };

  const isLiked = props.savedMovies.some((i) => i.movieId === props.movie.id);

  const cardLikeButtonClassName = `cards__btn-like ${
    isLiked ? 'card__like_active' : 'card__like'
  }`;

  function getTimeFromMins(mins) {
    const hours = Math.trunc(mins / 60);
    const minutes = mins % 60;
    return hours + 'ч ' + minutes + 'м';
  }

  return (
    <li className='card card__item '>
      <button
        className={cardLikeButtonClassName}
        type='button'
        onClick={saveMovie}
      />
      <a
        className='card__link'
        target='_blank'
        href={props.trailerLink}
        rel='noopener noreferrer'
      >
        <img className='card__img' alt={props.alt} src={baseUrl + props.src} />
      </a>

      <div className='card__bottom'>
        <p className='card__title'>{props.nameRU}</p>
        <p className='card__duration'>{getTimeFromMins(props.duration)}</p>
      </div>
    </li>
  );
}

export default MoviesCard;

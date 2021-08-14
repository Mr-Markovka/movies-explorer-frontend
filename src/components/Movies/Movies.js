import React from 'react';
import { useState } from 'react';
import SearchForm from './SearchForm.js';
import MoviesCardList from './MoviesCardList.js';
import Preloader from './Preloader.js';

import './Movies.css';

function Movies(props) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckbox() {
    setIsChecked(!isChecked);
  }
  return (
    <main className='movies'>
      <SearchForm
        filmError={props.filmError}
        onSearchRequest={props.onSearchRequest}
        onCheckbox={handleCheckbox}
      />

      {props.isMoviesLoading && <Preloader />}

      {props.isMoviesLoadError && (
        <div className='cards__notFound'>{props.isMoviesLoadError}</div>
      )}

      {!props.isMoviesLoading && !props.isMoviesLoadError && (
        <MoviesCardList
          movies={props.movies}
          onCardLike={props.onCardLike}
          inputSQ={props.inputSQ}
          notFound={props.notFound}
          onMovieSave={props.onMovieSave}
          savedMovies={props.savedMovies}
          onMovieSaveDelete={props.onMovieSaveDelete}
          isChecked={isChecked}
        />
      )}
    </main>
  );
}

export default Movies;

import React from 'react';
import { useState } from 'react';
import SavedMoviesSearchForm from '../SavedMovies/SavedMoviesSearchForm.js';
import SavedMoviesCardList from './SavedMoviesCardList.js';

import './SavedMovies.css';

function SavedMovies(props) {
  const [searchQuerySM, setSearchQuerySM] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  function handleCheckbox() {
    setIsChecked(!isChecked);
  }

  function searchRequestSM(film) {
    setSearchQuerySM(film);
  }

  return (
    <main className='saved-movies'>
      <SavedMoviesSearchForm
        onCheckboxSM={handleCheckbox}
        onSearchRequestSM={searchRequestSM}
      />

      <SavedMoviesCardList
        savedMovies={props.savedMovies}
        onMovieDelete={props.onMovieDelete}
        searchQuerySM={searchQuerySM}
        isChecked={isChecked}
      />
    </main>
  );
}

export default SavedMovies;
